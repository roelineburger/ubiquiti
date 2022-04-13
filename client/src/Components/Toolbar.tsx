import React, { useState, useEffect, useMemo } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import GridViewIcon from "@mui/icons-material/GridView";
import CardList from "./CardList";
import ProductList from "./ProductList";

const Toolbar = () => {
  const [view, setView] = useState("list");
  const [devices, setDevices] = useState<any[]>([]);
  const [icons, setIcons] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getDevices = async () => {
      const query = await fetch("http://localhost:4000/devices");
      const json = await query.json();
      setDevices(json.devices);
    };
    getDevices();
  }, []);

  const switchView = () => {
    if (view === "list") {
      setView("card");
    } else {
      setView("list");
    }
  };

  const filteredDevices = useMemo(() => {
    return devices.filter((device) => {
      return (
        device.line.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
        device.product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
    });
  }, [devices, searchTerm]);

  return (
    <div className="main">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <div className="searchIcon">
          <SearchIcon />
          <CloseIcon id="clearBtn" />
        </div>
        <h3>Filter</h3>
        <FormatListBulletedIcon onClick={switchView} />
        {view === "card" && <CardList devices={filteredDevices} />}
        <GridViewIcon onClick={switchView} />
        {view === "list" && <ProductList devices={filteredDevices} />}
      </div>
    </div>
  );
};

export default Toolbar;
