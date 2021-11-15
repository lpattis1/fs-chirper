import * as express from "express";
import db from "../db";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  const id = Number(req.params.id);
  if (id) {
    try {
      const [chirp] = await db.Chirps.singleChirps(id);
      res.json(chirp);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const chirps = await db.Chirps.allChirps();
      res.json(chirps);
    } catch (error) {
      next(error);
    }
  }
});


router.post("/", async (req, res, next) => {
  const chirp = req.body;
  try {
    await db.Chirps.postChirps(chirp.content);
    res.json({ id: chirp.userid });
  } catch (error) {
    next(error);
  }
});


router.put("/:id", async (req, res, next) => {
  const id = Number(req.params.id);
  const chirp = req.body;
  try {
    await db.Chirps.putChirps(id, chirp.content);
    res.json({ msg: "revised", id });
  } catch (error) {
    next(error);
  }
});


router.delete("/:id", async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    await db.Chirps.deleteChirps(id);
    res.json({ msg: "removed" });
  } catch (error) {
    next(error);
  }
});

export default router;
