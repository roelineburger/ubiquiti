import express from "express";
import deviceRouter from "./devices.js";

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`server is listenting on port: ${port}`);
});

app.use("/devices", deviceRouter);
