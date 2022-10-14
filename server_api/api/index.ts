import express from "express";
import auth from "./auth/auth.routes";
import users from "./users/users.routes";
import beats from "./beats/beats.routes";
import comments from "./comments/comments.routes";

const router = express.Router();

router.use("/users", users);
router.use("/auth", auth);
router.use("/beats", beats);
router.use("/comments", comments);

export default router;
