import express from "express";
import { findUserByUsername, allUsers } from "./users.services";

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

function computeAuthorBeats(user: AuthorIndividual): AuthorIndividual {
  return {
    ...user,
    beatsCount: user.beats.length,
  };
}
function computeAuthorPlays(user: AuthorIndividual): AuthorIndividual {
  return {
    ...user,
    playsCount: user.beats.reduce(
      (acc: number, curr: BeatIndividual): number => acc + curr.plays,
      0
    ),
  };
}

router.get("/:username", async (req, res, next) => {
  try {
    const username = req.params.username;
    const user = await findUserByUsername(username);
    res.json(computeAuthorPlays(computeAuthorBeats(user)));
  } catch (err) {
    next(err);
  }
});
router.get("/", async (req, res, next) => {
  try {
    const users = await allUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

export default router;
