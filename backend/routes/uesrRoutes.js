import express from 'express';
const router = express.Router();

import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserByID,
    deleteUser,
    updateUser
} from '../controllers/userController.js';

import { protect,Admin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(getUsers);

router.post('/logout',logoutUser);

router.post('/auth',authUser);

router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);

router.route('/:id').delete(protect,Admin,deleteUser).get(protect,Admin,getUserByID).put(protect,Admin,updateUser);

export default router;    