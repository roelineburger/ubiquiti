import React, { useState, useMemo } from "react";
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
    <div className="main">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <div className="searchIcon">
          <SearchIcon />
          <CloseIcon id="clearBtn" />
        </div>
        <FormatListBulletedIcon onClick={switchView} />
        <GridViewIcon onClick={switchView} />
        <h3>
          <Filter
            devices={devices}
            setSelectedProductLines={setSelectedProductLines}
            selectedProductLines={selectedProductLines}
          />
        </h3>
      </div>
    </div>
  );
};

export default Toolbar;
