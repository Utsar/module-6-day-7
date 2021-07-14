import { Router } from "express";
import { Blogs } from "../db/models/BlogsModel.js";
const router = Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Module.findAll();
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Module.create(req.body);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router.route("/:moduleId/students/:studentId").post(async (req, res, next) => {
  try {
    const module = await Module.findByPk(req.params.moduleId);
    const row = await module.addStudents([parseInt(req.params.studentId)]);
    res.send(row);
  } catch (error) {
    console.log(error);
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
  .put(async (req, res, next) => {
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
  });

export default router;
