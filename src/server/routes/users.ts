import * as express from "express";
import db from "../db";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  const id = Number(req.params.id);
  if (id) {
    try {
      const [user] = await db.Users.singleUser(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const users = await db.Users.allUsers();
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
});

router.post("/", async (req, res, next) => {
  const user = req.body;
  try {
    await db.Users.postUser(user.name);
    res.json({ username: user.name });
  } catch (error) {
    next(error);
  }
});

export default router;
