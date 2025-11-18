const User = require('../models/user.model');

// Lấy tất cả người dùng và hiển thị danh sách
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.render('index', { users });
    } catch (err) {
        res.status(500).send({ message: 'Có lỗi xảy ra khi lấy danh sách người dùng.' });
    }
};

// Hiển thị form thêm người dùng mới
const renderAddUserForm = (req, res) => {
    res.render('add');
};

// Thêm người dùng mới vào cơ sở dữ liệu
const createNewUser = async (req, res) => {
    const { name, email, age, address } = req.body;
    const newUser = new User({ name, email, age, address });
    try {
        await newUser.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).send({ message: 'Có lỗi xảy ra khi thêm người dùng.' });
    }
};

// Hiển thị form chỉnh sửa thông tin người dùng
const renderEditUserForm = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).send({ message: 'Người dùng không tồn tại.' });
        res.render('edit', { user });
    } catch (err) {
        res.status(500).send({ message: 'Có lỗi xảy ra khi hiển thị form chỉnh sửa.' });
    }
};

// Cập nhật thông tin người dùng hiện có
const updateExistingUser = async (req, res) => {
    const userId = req.params.id;
    const { name, email, age, address } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, { name, email, age, address }, { new: true });
        if (!updatedUser) return res.status(404).send({ message: 'Người dùng không tồn tại.' });
        res.redirect('/');
    } catch (err) {
        res.status(400).send({ message: 'Có lỗi xảy ra khi cập nhật người dùng.' });
    }
};

// Xóa người dùng khỏi cơ sở dữ liệu
const deleteExistingUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) return res.status(404).send({ message: 'Người dùng không tồn tại.' });
        res.redirect('/');
    } catch (err) {
        res.status(500).send({ message: 'Có lỗi xảy ra khi xóa người dùng.' });
    }
};

module.exports = {
    getAllUsers,
    renderAddUserForm,
    createNewUser,
    renderEditUserForm,
    updateExistingUser,
    deleteExistingUser
};


