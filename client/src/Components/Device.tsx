import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

const Device = ({ devices }: any) => {
  let { id } = useParams();

  const device = useMemo(() => {
    const oneDevice = devices.find((device: any) => device.icon.id === id);
    return oneDevice;
  }, [devices, id]);

  return (
    <div>
      {device && (
        <>
          <header>{device.product.name}</header>
          <img
            src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_51x51.png`}
          />
          <div>{device.line.name}</div>
          <div>{device.line.id}</div>
          <div>{device.product.name}</div>
          <div>{device.shortnames}</div>
          <div>{device.unifi?.network?.radios?.na?.maxPower}</div>
          <div>
            {device.unifi?.network?.radios?.na?.maxSpeedMegabitsPerSecond}
          </div>
          <div>{device.unifi?.network?.numberOfPorts}</div>
        </>
      )}
    </div>
  );
};

export default Device;
