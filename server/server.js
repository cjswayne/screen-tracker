// backend/index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import  ScreenTime from './models/ScreenTime.js';
import connection from './config/connection.js';


const app = express();
const PORT = process.env.PORT || 8080;


app.use(cors());
app.use(bodyParser.json());

// API to track usage time for an app
app.post('/api/update-usage', async (req, res) => {
  const { userId, appName, usageTime, idleTime } = req.body;

  try {
    let screenTime = await ScreenTime.findOne({ userId, appName });
    if (!screenTime) {
      screenTime = new ScreenTime({ userId, appName, usageTime, idleTime });
    } else {
      screenTime.usageTime += usageTime;
      screenTime.idleTime += idleTime;
    }
    await screenTime.save();
    res.status(200).json({ message: 'Usage updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// API to fetch usage data
app.get('/api/get-usage/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const data = await ScreenTime.find({ userId });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });


