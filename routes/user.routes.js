const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUsers);
router.get('/add', userController.renderAddUserForm);
router.post('/add', userController.createNewUser);
router.get('/edit/:id', userController.renderEditUserForm);
router.post('/edit/:id', userController.updateExistingUser);
router.get('/delete/:id', userController.deleteExistingUser);

module.exports = router;