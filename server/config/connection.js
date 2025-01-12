import mongoose from 'mongoose';

const connection = () => {
    const connection = mongoose.createConnection('mongodb://localhost/screen_time');

    connection.on('open', () => {
        console.log('MongoDB connected');
    });

    connection.on('error', (err) => { 
        console.log('MongoDB connection error:', err);
    });
    return connection;
};

export default connection;
