import express from 'express';
import userController from '../controllers/users.js'

const router = express.Router();

router.get('/', userController.getAllUsers)

router.get('/:id', userController.getUserById)

router.post('/', userController.createUser)

router.delete('/:id', userController.deleteUserById)

router.patch('/:id', userController.updateUserById)

export default router;