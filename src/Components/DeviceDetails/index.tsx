import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";
import "./styles.css";
import { Device } from "../../Interfaces";

import { Link } from "react-router-dom";

interface DeviceProps {
  devices: Device[];
}

const DeviceDetails = ({ devices }: DeviceProps) => {
  let { id } = useParams();

  const device = useMemo(() => {
    const oneDevice = devices.find((device) => device.icon.id === id);
    return oneDevice;
  }, [devices, id]);

  return (
    <div>
      {device && (
        <div>
          <div className="device">
            <Link to="/">
              <ArrowBackIcon className="back-icon" />
            </Link>
            <header className="device-header">{device.product.name}</header>
          </div>
          <div className="device-container">
            <img
              alt="device"
              className="device-image"
              src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_257x257.png`}
            />
            <div className="device-content">
              {device.line.name !== "Unknown" && (
                <div className="device-row">
                  <div className="device-feature-name">Product line</div>
                  <div className="device-feature-info">{device.line.name}</div>
                </div>
              )}
              {device.line.id !== "unknown" && (
                <div className="device-row">
                  <div className="device-feature-name">ID</div>
                  <div className="device-feature-info">{device.line.id}</div>
                </div>
              )}
              <div className="device-row">
                <div className="device-feature-name">Name</div>

                <div className="device-feature-info">{device.product.name}</div>
              </div>
              {device.shortnames && (
                <div className="device-row">
                  <div className="device-feature-name">Short name</div>
                  <div className="device-feature-info">{device.shortnames}</div>
                </div>
              )}
              {device.unifi?.network?.radios?.na?.maxPower && (
                <div className="device-row">
                  <div className="device-feature-name">Max power</div>
                  <div className="device-feature-info">
                    {device.unifi?.network?.radios?.na?.maxPower}
                  </div>
                </div>
              )}
              {device.unifi?.network?.radios?.na?.maxSpeedMegabitsPerSecond && (
                <div className="device-row">
                  <div className="device-feature-name">Speed</div>
                  <div className="device-feature-info">
                    {
                      device.unifi?.network?.radios?.na
                        ?.maxSpeedMegabitsPerSecond
                    }
                  </div>
                </div>
              )}
              {device.unifi?.network?.numberOfPorts && (
                <div className="device-row">
                  <div className="device-feature-name">Number of ports</div>
                  <div className="device-feature-info">
                    {device.unifi?.network?.numberOfPorts}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceDetails;
