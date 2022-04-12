import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const ProductList = () => {
  const [devices, setDevices] = useState<any[]>([]);

  useEffect(() => {
    const getDevices = async () => {
      const query = await fetch("http://localhost:4000/devices");
      const json = await query.json();
      setDevices(json.devices);
    };
    getDevices();
  }, []);

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
            {devices.map((device, i) => (
              <TableRow>
                <TableCell align="right" key={i}>
                  {device.icon.resolutions[0]}
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

export default ProductList;
