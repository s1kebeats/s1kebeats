import express from 'express';
import { findUserByUsername } from './users.services';

const router = express.Router();

// router.get('/:username', isAuthenticated, async (req, res, next) => {
//   try {
//     const { userId } = req.payload;
//     const user = await findUserById(userId);
//     delete user.password;
//     delete user.email;
//     delete user.updatedAt;
//     res.json(user);
//   } catch (err) {
//     next(err);
//   }
// });

router.get('/:username', async (req, res, next) => {
  try {
    const username = req.params.username;
    const user = await findUserByUsername(username);
    delete user.password;
    delete user.email;
    delete user.updatedAt;
    res.json(user);
  } catch (err) {
    next(err);
  }
});

export default router;