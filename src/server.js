import express from "express";
import { sequelize } from "./db/index.js";
import cors from "cors";
import blogsRouter from "../src/services/blogs/index.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use("/blogs", blogsRouter);

db.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port ${port}`));

    app.on("error", (error) =>
      console.log("Server is not running due to an error:", error)
    );
  })
  .catch((e) => {
    console.log(e);
  });
