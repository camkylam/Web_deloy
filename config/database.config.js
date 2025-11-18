const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://lcky:lamcamky123cluster0.skjwh.mongodb.net/?appName=Cluster0');
        console.log('Kết nối MongoDB thành công');
    } catch (err) {
        console.error('Lỗi kết nối MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;