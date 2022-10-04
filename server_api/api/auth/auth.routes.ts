import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import { addTokenToWhiteList, deleteRefreshToken, findRefreshTokenById } from './auth.services'
import { generateTokens } from '~/server_api/utils/jwt'
import { findUserByEmail, createUser, findUserById, findUserByUsername } from '~/server_api/api/users/users.services'
import hashToken from '~/server_api/utils/hashToken'

const router = express.Router()
router.post('/register', async (req, res, next) => {
  try {
    const { email, password, username } = req.body
    if (!email || !password || !username) { res.status(400); throw new Error('Provide email, username and password.') }

    let existingUser = await findUserByEmail(email)
    if (existingUser) {
      res.status(400)
      throw new Error('Email already in use.')
    }
    existingUser = await findUserByUsername(username)
    if (existingUser) {
      res.status(400)
      throw new Error('Username already in use.')
    }

    const user = await createUser({ email, password, username })
    const jti = uuidv4()
    const { accessToken, refreshToken } = generateTokens(user, jti)
    await addTokenToWhiteList({ jti, refreshToken, userId: user.id })

    res.json({
      accessToken,
      refreshToken
    })
  } catch (err) {
    next(err)
  }
})
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(400)
      throw new Error('You must provide email and password.')
    }

    const existingUser = await findUserByEmail(email)
    if (!existingUser) {
      res.status(403)
      throw new Error('Invalid login credentials.')
    }

    const validPassword = await bcrypt.compare(password, existingUser.password)
    if (!validPassword) {
      res.status(403)
      throw new Error('Invalid login credentials.')
    }

    const jti = uuidv4()
    const { accessToken, refreshToken } = generateTokens(existingUser, jti)
    await addTokenToWhiteList({ jti, refreshToken, userId: existingUser.id })

    res.json({
      accessToken,
      refreshToken
    })
  } catch (err) {
    next(err)
  }
})
router.post('/refresh', async (req, res, next) => {
  try {
    const { refreshToken } = req.body
    if (!refreshToken) {
      res.status(400)
      throw new Error('Missing refresh token.')
    }
    const payload = jsonwebtoken.verify(refreshToken, process.env.JWT_REFRESH_SECRET)
    const savedRefreshToken = await findRefreshTokenById(payload.jti)

    if (!savedRefreshToken || savedRefreshToken.revoked === true) {
      res.status(401)
      throw new Error('Unauthorized')
    }

    const hashedToken = hashToken(refreshToken)
    if (hashedToken !== savedRefreshToken.hashedToken) {
      res.status(401)
      throw new Error('Unauthorized')
    }

    const user = await findUserById(payload.userId)
    if (!user) {
      res.status(401)
      throw new Error('Unauthorized')
    }

    await deleteRefreshToken(savedRefreshToken.id)
    const jti = uuidv4()
    const { accessToken, refreshToken: newRefreshToken } = generateTokens(user, jti)
    await addTokenToWhiteList({ jti, refreshToken: newRefreshToken, userId: user.id })

    res.json({
      accessToken,
      refreshToken: newRefreshToken
    })
  } catch (err) {
    next(err)
  }
})

export default router
