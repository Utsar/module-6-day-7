import express from "express";
import { Router } from "express";
import sequelize from "sequelize";
import { Blogs } from "../db/models/BlogsModel.js";
import { queryFilter } from "../../libs/query/query.js";

const { Op } = sequelize;
const router = Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const filter = queryFilter(req.query);
      const data = await Blogs.findAll({
        where: filter.length > 0 ? { [Op.or]: filter } : {},
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      let {
        category,
        title,
        cover,
        read_time_value,
        read_time_unit,
        content,
        author,
      } = req.body;
      const data = await Blogs.create(req.body);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router.route("/author").get(async (req, res, next) => {
  try {
    const data = await Author.findAll({
      include: [{ model: Blogs }],
    });
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.route("/author/:authorId").get(async (req, res, next) => {
  try {
    const data = await Author.findByPk(req.params.authorId, {
      include: [{ model: Blogs }],
    });
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
      const data = await Blogs.findByPk(req.params.id);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Blogs.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });
      res.send(data[1][0]);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const rowsCount = await Blogs.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (rowsCount > 0) {
        res.send("deleted!");
      } else {
        res.send("error");
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
