const express = require('express');
const multer = require('multer');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const path = require('path');

const router = express.Router();

// 配置 multer 以存储文件
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // 存储上传文件的目录
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname); // 确保文件名唯一
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
    // 将文件记录保存到数据库
    const applicationRecords = req.files.map(file => ({
      userId: parseInt(userId),
      filePath: file.path,
      uploadedAt: new Date(),
      isCompleted: false, // 默认为未完成
      isPaid: false       // 默认为未付款
    }));

    const savedApplications = await prisma.application.createMany({
      data: applicationRecords,
    });

    res.json({ message: 'Files uploaded and saved to applications successfully', applications: savedApplications });
  } catch (error) {
    console.error("Error saving application info to database:", error);
    res.status(500).json({ message: 'Error saving application info to database' });
  }
});

module.exports = router;
