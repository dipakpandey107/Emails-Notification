const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { initializeJobs } = require('./utils/scheduleEmailJobs');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json()); 
app.use('/api/users', userRoutes); 

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    initializeJobs();
});
