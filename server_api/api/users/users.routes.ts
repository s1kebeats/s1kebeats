import express from 'express';
import isAuthenticated from '~/server_api/middlewares';
import { findUserById } from './users.services';

const router = express.Router();

router.get('/profile', isAuthenticated, async (req, res, next) => {
  try {
    const { userId } = req.payload;
    const user = await findUserById(userId);
    delete user.password;
    res.json(user);
  } catch (err) {
    next(err);
  }
});

export default router;