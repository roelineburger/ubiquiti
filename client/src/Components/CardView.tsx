import React from "react";
import { Link } from "react-router-dom";
import "./CardView.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardView = ({ devices }: any) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        {devices.map((device: any) => (
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_25x25.png`}
              alt="product-icon"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {device.product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {device.line.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        ))}
      </Card>
    </>
  );
};

export default CardView;
