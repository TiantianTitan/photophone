const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();

// 获取下一个可用编号
const getNextFileIndex = () => {
  const files = fs.readdirSync('uploads');
  const indices = files
    .map(file => parseInt(path.basename(file, path.extname(file))))
    .filter(num => !isNaN(num));
  return indices.length > 0 ? Math.max(...indices) + 1 : 1;
};

// 配置 multer 以存储文件
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const nextIndex = getNextFileIndex(); // 获取下一个编号
    const ext = path.extname(file.originalname); // 获取文件扩展名
    cb(null, `${nextIndex}${ext}`); // 文件命名为 "编号.扩展名"
  }
});

const upload = multer({ storage });

// 上传多个文件并保存信息到数据库的 Application 表
router.post('/upload', upload.array('files', 10), async (req, res) => {
  const { userId } = req.body;

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }

  try {
    const applicationRecords = req.files.map(file => ({
      userId: parseInt(userId),
      filePath: file.path,
      uploadedAt: new Date(),
      isCompleted: false,
      isPaid: false
    }));

    const savedApplications = await prisma.application.createMany({
      data: applicationRecords,
    });

    res.json({ message: 'Files uploaded and saved successfully', applications: savedApplications });
  } catch (error) {
    console.error("Error saving file info:", error);
    res.status(500).json({ message: 'Error saving file info' });
  }
});

module.exports = router;
