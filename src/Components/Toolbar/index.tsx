import React from "react";
import "./styles.css";
import FilterPopUp from "../FilterPopUp";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import GridViewIcon from "@mui/icons-material/GridView";
import { Device } from "../../Interfaces";

interface ToolbarProps {
  setSearchTerm: (newSearchTerm: string) => void;
  searchTerm: string;
  switchView: () => void;
  devices: Device[];
  setSelectedProductLines: (newSelectedProductLines: string[]) => void;
  selectedProductLines: string[];
}

const Toolbar = ({
  setSearchTerm,
  searchTerm,
  switchView,
  devices,
  setSelectedProductLines,
  selectedProductLines,
}: ToolbarProps) => {
  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="toolbar">
      <div className="search">
        <div className="search-inner">
          <div className="search-icon" data-testid="toolbar">
            <SearchIcon data-testid="search-icon" />
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            data-testid="input-box"
          />
          <div className="search-clear">
            <CloseIcon onClick={clearSearch} />
          </div>
        </div>
      </div>
      <div className="toolbar-toggle">
        <FormatListBulletedIcon
          className="toolbar-list-icon"
          onClick={switchView}
        />
        <GridViewIcon
          className="toolbar-grid-icon"
          onClick={switchView}
          data-testid="grid-icon"
        />
        <FilterPopUp
          devices={devices}
          setSelectedProductLines={setSelectedProductLines}
          selectedProductLines={selectedProductLines}
        />
      </div>
    </div>
  );
};

export default Toolbar;
