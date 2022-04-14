import React from "react";
import { Link } from "react-router-dom";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TableViewItem = ({ device }: any) => {
  return (
    <Link to={`/device/${device.icon.id}`}>
      <TableRow>
        <TableCell align="right">
          <img
            src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_51x51.png`}
          />
        </TableCell>
        <TableCell align="right">{device.line.name}</TableCell>
        <TableCell align="right">{device.product.name}</TableCell>
      </TableRow>
    </Link>
  );
};

export default TableViewItem;
