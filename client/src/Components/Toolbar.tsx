import React, { useRef, useState } from "react";
import SearchBar from "material-ui-search-bar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import CardList from "./CardList";
import ProductList from "./ProductList";

const Toolbar = ({ devices }) => {
  const [view, setView] = useState("list");
  const [searchField, setSearchField] = useState("");

  const switchView = () => {
    console.log("click");
    if (view === "list") {
      console.log("card");
      setView("card");
    } else {
      setView("list");
      console.log("list");
    }
  };

  const filteredDevices = devices.filter((devices) => {
    return devices.product.name;
  });

  const startSearch = (e: any) => {
    console.log("search");
  };

  return (
    <div className="main">
      <div className="search">
        <SearchBar onChange={startSearch} style={{ maxWidth: 400 }} />
        <FormatListBulletedIcon onClick={switchView} />
        {view === "card" && <CardList />}
        <GridViewIcon onClick={switchView} />
        {view === "list" && <ProductList />}
        <h3>Filter</h3>
      </div>
    </div>
  );
};

export default Toolbar;
