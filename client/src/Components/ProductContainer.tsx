import React, { useState, useEffect, useMemo } from "react";
import "./ProductContainer.css";
import Toolbar from "./Toolbar";
import TableView from "./TableView";
import CardView from "./CardView";

const ProductList = ({ devices }: any) => {
  const [view, setView] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProductLines, setSelectedProductLines] = useState<string[]>(
    []
  );

  const switchView = () => {
    if (view === "list") {
      setView("card");
    } else {
      setView("list");
    }
  };

  const filteredDevices = useMemo(() => {
    return devices.filter((device: any) => {
      if (
        selectedProductLines.length > 0 &&
        selectedProductLines.indexOf(device.line.name) === -1
      ) {
        return false;
      }
      return (
        device.product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
    });
  }, [devices, searchTerm, selectedProductLines]);

  return (
    <div>
      <Toolbar
        setSearchTerm={setSearchTerm}
        switchView={switchView}
        searchTerm={searchTerm}
        devices={devices}
        setSelectedProductLines={setSelectedProductLines}
        selectedProductLines={selectedProductLines}
      />
      {view === "list" && (
        <TableView filteredDevices={filteredDevices} devices={devices} />
      )}
      {view === "card" && <CardView devices={devices} />}
    </div>
  );
};

export default ProductList;
