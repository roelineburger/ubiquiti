import React from "react";
import TableViewItem from "./TableViewItem";
import { Link } from "react-router-dom";
import "./TableView.css";

const TableView = ({ filteredDevices }: any) => {
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
              filteredDevices.map((device: any, i: any) => (
                <TableViewItem device={device} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableView;
