import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import {generateTokens} from '~/server_api/utils/jwt';
import {addTokenToWhiteList, deleteRefreshToken, findRefreshTokenById} from './auth.services';
import {findUserByEmail, createUserByEmailAndPassword, findUserById} from '~/server_api/api/users/users.services';
import bcrypt from 'bcrypt';
import hashToken from '~/server_api/utils/hashToken';
import jsonwebtoken from 'jsonwebtoken';

const router = express.Router();
router.post('/register', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {res.status(400); throw new Error('You must provide an email and a password.')}

        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            res.status(400);
            throw new Error('Email already in use.');
        }

        const user = await createUserByEmailAndPassword({ email, password });
        const jti = uuidv4();
        const { accessToken, refreshToken } = generateTokens(user, jti);
        await addTokenToWhiteList({ jti, refreshToken, userId: user.id });

        res.json({
            accessToken,
            refreshToken,
        });
    } catch(err) {
        next(err);
    }
})
router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
          res.status(400);
          throw new Error('You must provide an email and a password.');
        }
    
        const existingUser = await findUserByEmail(email);
        if (!existingUser) {
          res.status(403);
          throw new Error('Invalid login credentials.');
        }
    
        const validPassword = await bcrypt.compare(password, existingUser.password);
        if (!validPassword) {
          res.status(403);
          throw new Error('Invalid login credentials.');
        }
    
        const jti = uuidv4();
        const { accessToken, refreshToken } = generateTokens(existingUser, jti);
        await addTokenToWhiteList({ jti, refreshToken, userId: existingUser.id });
    
        res.json({
          accessToken,
          refreshToken
        });
    } catch (err) {
        next(err);
    }
})
router.post('/refreshToken', async (req, res, next) => {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken) {
        res.status(400);
        throw new Error('Missing refresh token.');
      }
      const payload = jsonwebtoken.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
      const savedRefreshToken = await findRefreshTokenById(payload.jti);
  
      if (!savedRefreshToken || savedRefreshToken.revoked === true) {
        res.status(401);
        throw new Error('Unauthorized');
      }
  
      const hashedToken = hashToken(refreshToken);
      if (hashedToken !== savedRefreshToken.hashedToken) {
        res.status(401);
        throw new Error('Unauthorized');
      }
  
      const user = await findUserById(payload.userId);
      if (!user) {
        res.status(401);
        throw new Error('Unauthorized');
      }
  
      await deleteRefreshToken(savedRefreshToken.id);
      const jti = uuidv4();
      const { accessToken, refreshToken: newRefreshToken } = generateTokens(user, jti);
      await addTokenToWhiteList({ jti, refreshToken: newRefreshToken, userId: user.id });
  
      res.json({
        accessToken,
        refreshToken: newRefreshToken
      });
    } catch (err) {
      next(err);
    }
});

export default router;