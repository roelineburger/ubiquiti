import React, { useState, useEffect, useMemo } from "react";
import Toolbar from "./Toolbar";
import { Link } from "react-router-dom";
import TableView from "./TableView";
import CardView from "./CardView";

const ProductList = ({ devices }: any) => {
  console.log(devices.length);
  const [view, setView] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");

  const switchView = () => {
    if (view === "list") {
      setView("card");
    } else {
      setView("list");
    }
  };

  const filteredDevices = useMemo(() => {
    return devices.filter((device: any) => {
      return (
        device.line.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
        device.product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
    });
  }, [devices, searchTerm]);
  return (
    <div>
      <Toolbar
        setSearchTerm={setSearchTerm}
        switchView={switchView}
        searchTerm={searchTerm}
      />
      {view === "list" && <TableView filteredDevices={filteredDevices} />}
      {view === "card" && <CardView devices={devices} />}
    </div>
  );
};

export default ProductList;
