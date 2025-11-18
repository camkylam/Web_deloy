const express = require('express');
const connectDB = require('./config/database.config'); // Đường dẫn tới file database.config.js
const userRoutes = require('./routes/user.routes'); // Đường dẫn tới file route của bạn
const path = require('path');

// Khởi tạo ứng dụng express
const app = express();

// Kết nối MongoDB
connectDB();

// Cấu hình middleware để xử lý dữ liệu từ form (POST requests)
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Nếu bạn sử dụng JSON trong các API
app.use(express.static('public'));

// Cấu hình view engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Định nghĩa đường dẫn tới thư mục views

// Sử dụng routes cho người dùng (CRUD)
app.use('/', userRoutes);

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

