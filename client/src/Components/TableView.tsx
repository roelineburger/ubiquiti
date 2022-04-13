import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const TableView = ({ filteredDevices }: any) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="products-table">
          <TableHead>
            <TableRow>
              <TableCell>123 devices</TableCell>
              <TableCell align="right">PRODUCT LINE</TableCell>
              <TableCell align="right">NAME</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDevices &&
              filteredDevices.map((device: any, i: any) => (
                <TableRow>
                  <TableCell align="right" key={i}>
                    <img
                      src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_51x51.png`}
                    />
                  </TableCell>
                  <TableCell align="right">{device.line.name}</TableCell>
                  <TableCell align="right">{device.product.name}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableView;
