import { Router } from "express";
import db from "../../utils/db/index.js";

const router = Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const query = "SELECT * FROM blogs";
      const data = await db.query(query);
      res.send(data.rows);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const { title, category, cover } = req.body;
      const query = `INSERT INTO blogs (title, category, cover) VALUES('${title}', '${category}', '${cover}') RETURNING *`;
      const data = await db.query(query);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
