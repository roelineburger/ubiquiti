import React, { useState, useEffect } from "react";

const ListContainer = () => {
  const [devices, setDevices] = useState<any[]>([]);

  useEffect(() => {
    const getDevices = async () => {
      const query = await fetch("http://localhost:4000/devices");
      const json = await query.json();
      setDevices(json.devices);
    };
    getDevices();
  }, []);
  return (
    <div>
      {" "}
      {devices.map((device, i) => (
        <div key={i}>{device.product.name}</div>
      ))}
    </div>
  );
};

export default ListContainer;
