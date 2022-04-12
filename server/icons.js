import express from "express";
const router = express.Router();
import fetch from "node-fetch";

const getIcons = async () => {
  const query = await fetch(
    " https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png"
  );
  const json = await query.json();
  return json;
};

router.get("/", async (_, res) => {
  const icon = await getIcons();
  res.json(icon);
});

export default router;
