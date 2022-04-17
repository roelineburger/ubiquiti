import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Device } from "../../Interfaces";

interface CardViewProps {
  filteredDevices: Device[];
}

const CardView = ({ filteredDevices }: CardViewProps) => {
  return (
    <div className="cards-container">
      <p className="device-total">{filteredDevices.length} devices</p>
      {filteredDevices.map((device, i) => (
        <div className="card" key={device.icon.id + i}>
          <Link to={`/device/${device.icon.id}`}>
            <div className="card-image-container">
              <img
                className="card-image"
                src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_257x257.png`}
                alt="product-icon"
              />
            </div>
            <div className="card-container-content">
              <h1 className="card-container-content-name">
                {device.product.name}
              </h1>
              <p color="text.secondary" className="card-container-content-line">
                {device.line.name}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardView;
