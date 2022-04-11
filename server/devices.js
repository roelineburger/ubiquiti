import express from "express";
const router = express.Router();
import fetch from "node-fetch";

const getDevices = async () => {
  const query = await fetch("https://static.ui.com/fingerprint/ui/public.json");
  const json = await query.json();
  return json;
};

router.get("/", async (_, res) => {
  console.log("hello");
  const device = await getDevices();
  res.json(device);
});

export default router;
