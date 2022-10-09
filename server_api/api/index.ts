import express from "express";
import auth from "./auth/auth.routes";
import users from "./users/users.routes";
import beats from "./beats/beats.routes";

const router = express.Router();

router.use("/users", users);
router.use("/auth", auth);
router.use("/beats", beats);

export default router;
