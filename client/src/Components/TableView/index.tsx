import React from "react";
import TableViewItem from "../TableViewItem";
import "./styles.css";
import { Device } from "../../Interfaces";

interface TableViewProps {
  filteredDevices: Device[];
}

const TableView = ({ filteredDevices }: TableViewProps) => {
  return (
    <div>
      <div className="product-table">
        <div className="product-table-header">
          <h3 className="product-table-total">123 devices</h3>
          <h3 className="product-table-line">PRODUCT LINE</h3>
          <h3 className="product-table-name">NAME</h3>
        </div>
        <div>
          <div className="product-table-data">
            {filteredDevices &&
              filteredDevices.map((device, i) => (
                <TableViewItem device={device} key={device.icon.id + i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableView;
