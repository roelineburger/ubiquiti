import React, { useState, useMemo } from "react";
import "./Toolbar.css";
import Filter from "./Filter";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import GridViewIcon from "@mui/icons-material/GridView";

const Toolbar = ({
  setSearchTerm,
  searchTerm,
  switchView,
  devices,
  setSelectedProductLines,
  selectedProductLines,
}: any) => {
  return (
    <div className="toolbar">
      <div className="search">
        <div className="toolbar-searchIcon">
          {" "}
          <SearchIcon />
        </div>

        <input
          className="toolbar-search"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <div className="toolbar-clearBtn">
          <CloseIcon />
        </div>
        <FormatListBulletedIcon
          className="toolbar-list-icon"
          onClick={switchView}
        />
        <GridViewIcon className="toolbar-grid-icon" onClick={switchView} />
        <h3 className="toolbar-filter-text">
          Filter
          {/* <Filter
            devices={devices}
            setSelectedProductLines={setSelectedProductLines}
            selectedProductLines={selectedProductLines}
          /> */}
        </h3>
      </div>
    </div>
  );
};

export default Toolbar;
