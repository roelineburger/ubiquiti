import React from "react";
import "./FilterItem.css";

interface FilterItemProps {
  productLine: string;
  setSelectedProductLines: (newSelectedProductLines: string[]) => void;
  selectedProductLines: string[];
}

const FilterItem = ({
  selectedProductLines,
  productLine,
  setSelectedProductLines,
}: FilterItemProps) => {
  const isSelected = selectedProductLines.indexOf(productLine) > -1;
  const onChange = () => {
    if (isSelected) {
      const newSelectedProductLines = selectedProductLines.filter(
        (p) => p !== productLine
      );
      setSelectedProductLines(newSelectedProductLines);
    } else {
      const newSelectedProductLines = selectedProductLines.concat([
        productLine,
      ]);
      setSelectedProductLines(newSelectedProductLines);
    }
  };
  return (
    <div className="filter-item">
      <input type="checkbox" checked={isSelected} onChange={onChange} />
      {productLine}
    </div>
  );
};

export default FilterItem;
