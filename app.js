import express from "express";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const port = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
