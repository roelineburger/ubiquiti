import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardList = () => {
  const [devices, setDevices] = useState<any[]>([]);
  const [icons, setIcons] = useState<any[]>([]);

  useEffect(() => {
    const getDevices = async () => {
      const query = await fetch("http://localhost:4000/devices");
      const json = await query.json();
      setDevices(json.devices);
    };
    getDevices();
  }, []);

  useEffect(() => {
    const getIcons = async () => {
      const query = await fetch("http://localhost:4000/icons");
      const json = await query.json();
      setIcons(json.devices);
      console.log("loop");
    };
    getIcons();
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=" https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png
          "
          alt="product-icon"
        />
        {devices.map((device, i) => (
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {device.product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {device.line.name}
            </Typography>
          </CardContent>
        ))}
      </CardActionArea>
    </Card>
  );
};

export default CardList;
