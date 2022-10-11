import express from 'express'
import { findRelatedComments } from './comments.services'

const router = express.Router()

router.get('/:id', async (req, res, next) => {
    try {
        const id = +req.params.id;
        const comments = await findRelatedComments(id)
        res.json(comments)
    } catch (err) {
        next(err)
    }
})

export default router