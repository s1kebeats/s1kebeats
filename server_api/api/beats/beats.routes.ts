import express from 'express'
import { findBeatById } from './beats.services'
const router = express.Router()

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const beat = await findBeatById(id)
    res.json(beat)
  } catch (err) {
    next(err)
  }
})

export default router
