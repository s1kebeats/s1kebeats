import express from 'express'
import { findBeatById } from './beats.services'
import isAuthenticated from '~/server_api/middlewares'
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
router.post('/', isAuthenticated, async (req, res, next) => {
  try {
    const { userId } = req.payload
    const { name, bpm, tags, image, wave, mp3, stems, wavePrice, stemsPrice } = req.body
    if (!name || !bpm || !wave || !mp3 || !wavePrice) {

    }
    const beat = await createBeat(beat)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

export default router
