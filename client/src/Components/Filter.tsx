import React, { useMemo } from "react";
import FilterItem from "./FilterItem";
import "./Filter.css";
import { Device } from "../Interfaces";

interface FilterProps {
  devices: Device[];
  setSelectedProductLines: (newSelectedProductLines: string[]) => void;
  selectedProductLines: string[];
}

const Filter = ({
  devices,
  setSelectedProductLines,
  selectedProductLines,
}: FilterProps) => {
  const productLines = useMemo(() => {
    const result = new Set();
    devices.forEach((device) => {
      result.add(device.line.name);
    });
    return Array.from(result.values()) as string[];
  }, [devices]);

  return (
    <>
      {productLines.map((productLine) => (
        <FilterItem
          key={productLine}
          setSelectedProductLines={setSelectedProductLines}
          productLine={productLine}
          selectedProductLines={selectedProductLines}
        />
      ))}
    </>
  );
};

export default Filter;
