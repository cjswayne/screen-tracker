const mongoose = require('mongoose');

const connection = () => {
    const connection = mongoose.createConnection('mongodb://localhost/screen_time');
    console.log('MongoDB connected');
    return connection;
};

module.exports = connection;
