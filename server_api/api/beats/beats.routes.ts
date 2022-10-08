import express from "express";
import { findBeatById, createBeat, allBeats } from "./beats.services";
import isAuthenticated from "~/server_api/middlewares";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const sort = req.query.orderBy ? req.query.orderBy : "createdAt";
    const beats = await allBeats(sort);
    res.json(beats);
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const beat = await findBeatById(id);
    res.json(beat);
  } catch (err) {
    next(err);
  }
});
// router.post('/:id/like', isAuthenticated, async (req, res, next) => {
//   try {
//     const { userId } = req.payload
//     const beatId = +req.params.id
//     if (await findBeatById(beatId).likes)
//   } catch(arr) {
//     next(err)
//   }
// })
router.post("/upload", isAuthenticated, async (req, res, next) => {
  try {
    const { userId } = req.payload;
    // eslint-disable-next-line prefer-const
    let { name, bpm, tags, image, wave, mp3, stems, wavePrice, stemsPrice } =
      req.body;
    if (!name || !bpm || !wave || !mp3 || !wavePrice) {
      res.status(400);
      throw new Error("Not enough data provided.");
    }
    const beat = await createBeat({
      name,
      bpm: +bpm,
      tags,
      image,
      wave,
      mp3,
      stems,
      wavePrice: +wavePrice,
      stemsPrice: stemsPrice ? +stemsPrice : stemsPrice,
      authorId: userId,
    });
    res.json(beat);
  } catch (err) {
    next(err);
  }
});

export default router;
