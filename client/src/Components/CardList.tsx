import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardList = ({ devices }: any) => {
  console.log(devices[0].icon.id);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://static.ui.com/fingerprint/ui/icons/${devices.icon.id}_51x51.png`}
          alt="product-icon"
        />
        {devices.map((device: any, i: any) => (
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
