import React, { useState } from "react";
import Filter from "./Filter";
import CloseIcon from "@material-ui/icons/Close";
import { Device } from "../Interfaces";
import "./FilterPopUp.css";

interface FilterPopUpProps {
  devices: Device[];
  setSelectedProductLines: (newSelectedProductLines: string[]) => void;
  selectedProductLines: string[];
}

const FilterPopUp = ({
  devices,
  setSelectedProductLines,
  selectedProductLines,
}: FilterPopUpProps) => {
  const [filter, setFilter] = useState(false);

  const showFilter = () => {
    setFilter(true);
  };

  const closePopup = () => {
    setFilter(false);
  };

  return (
    <div>
      <h3 className="toolbar-filter-text" onClick={showFilter}>
        Filter
      </h3>
      <div
        className="toolbar-filter-popup"
        style={{ display: filter ? "block" : "none" }}
      >
        <h3 className="toolbar-filter-popup-filter">
          Filter{" "}
          <CloseIcon className="toolbar-filter-popup-x" onClick={closePopup} />
        </h3>
        <h3 className="toolbar-filter-popup-productline">Product line</h3>
        <Filter
          devices={devices}
          setSelectedProductLines={setSelectedProductLines}
          selectedProductLines={selectedProductLines}
        />
      </div>
    </div>
  );
};

export default FilterPopUp;
