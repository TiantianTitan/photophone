// routes/applications.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

// 获取所有 Application 数据
router.get('/', async (req, res) => {
  try {
    const applications = await prisma.application.findMany();
    res.json(applications); // 确保返回的是数组
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ message: 'Error fetching applications' });
  }
});

module.exports = router;
