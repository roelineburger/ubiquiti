import React, { useMemo } from "react";
import FilterItem from "./FilterItem";

const Filter = ({
  devices,
  setSelectedProductLines,
  selectedProductLines,
}: any) => {
  const productLines = useMemo(() => {
    const result = new Set();
    devices.forEach((device: any) => {
      result.add(device.line.name);
    });
    return Array.from(result.values());
  }, [devices]);

  return (
    <>
      {productLines.map((productLine: any) => (
        <FilterItem
          setSelectedProductLines={setSelectedProductLines}
          productLine={productLine}
          selectedProductLines={selectedProductLines}
        />
      ))}
    </>
  );
};

export default Filter;
