import React from "react";

const FilterItem = ({
  selectedProductLines,
  productLine,
  setSelectedProductLines,
}: any) => {
  const isSelected = selectedProductLines.indexOf(productLine) > -1;
  const onChange = () => {
    if (isSelected) {
      const newSelectedProductLines = selectedProductLines.filter(
        (p: any) => p !== productLine
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
    <div>
      <input type="checkbox" checked={isSelected} onChange={onChange} />
      {productLine}
    </div>
  );
};

export default FilterItem;
