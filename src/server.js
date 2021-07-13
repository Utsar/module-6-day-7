import express, { response } from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import blogsRouter from "../src/services/blogs/index.js";

const server = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use("/blogs", blogsRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.on("error", (error) =>
  console.log("Server is not running due to an error:", error)
);
