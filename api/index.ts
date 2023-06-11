import { Request, Response } from "express";

const express = require("express");
const cors = require("cors");
const data = require("./data");

const app = express();
const port = 3000;

app.use(cors())

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

app.get("/fetch-questionnaire", (req: Request, res: Response) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`api listening on port ${port}`);
});