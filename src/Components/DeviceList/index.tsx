import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import "./styles.css";
import Toolbar from "../Toolbar";
import TableView from "../TableView";
import CardView from "../CardView";
import { Device } from "../../Interfaces";
import useFilteredDevices from "./useFilteredDevices";

interface DeviceListProps {
  devices: Device[];
}

const DeviceList = ({ devices }: DeviceListProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState(() => {
    const initialView = searchParams.get("view");
    if (initialView === "list" || initialView === "card") {
      return initialView;
    }
    return "list";
  });

  const [searchTerm, setSearchTerm] = useState(() => {
    return searchParams.get("query") || "";
  });

  useEffect(() => {
    setSearchParams({ view, query: searchTerm });
  }, [view, setSearchParams, searchTerm]);

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

  const filteredDevices = useFilteredDevices({
    devices,
    selectedProductLines,
    searchTerm,
  });

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
      {view === "list" && <TableView filteredDevices={filteredDevices} />}
      {view === "card" && <CardView filteredDevices={filteredDevices} />}
    </div>
  );
};

export default DeviceList;
