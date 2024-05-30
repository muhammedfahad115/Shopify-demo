const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

// Create a new timer
router.post('/timers', async (req, res) => {
  const { storeId, startTime, endTime, description, displayOptions } = req.body;
  const timer = await prisma.timer.create({
    data: { storeId, startTime, endTime, description, displayOptions }
  });
  res.json(timer);
});

// Get timers for a store
router.get('/timers/:storeId', async (req, res) => {
  const { storeId } = req.params;
  const timers = await prisma.timer.findMany({ where: { storeId } });
  res.json(timers);
});

module.exports = router;
