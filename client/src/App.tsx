import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductContainer from "./Components/ProductContainer";
import Device from "./Components/Device";

const App = () => {
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
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductContainer devices={devices} />} />
          <Route path="/device/:id" element={<Device devices={devices} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
