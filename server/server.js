import express from "express";
import deviceRouter from "./devices.js";
import iconRouter from "./icons.js";
import cors from "cors";

const port = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`server is listenting on port: ${port}`);
});

app.use("/devices", deviceRouter);
app.use("/icons", iconRouter);
