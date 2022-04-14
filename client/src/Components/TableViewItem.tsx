import React from "react";
import "./TableViewItem.css";
import { Link } from "react-router-dom";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TableViewItem = ({ device }: any) => {
  return (
    <Link to={`/device/${device.icon.id}`}>
      <div className="tableview">
        <div className="tableview-device">
          <img
            className="tableview-device-img"
            src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_51x51.png`}
          />
        </div>
        <div className="tableview-device-line">{device.line.name}</div>
        <div className="tableview-device-name">{device.product.name}</div>
      </div>
    </Link>
  );
};

export default TableViewItem;
