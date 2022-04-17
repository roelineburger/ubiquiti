import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DeviceList from "./Components/DeviceList";
import DeviceDetails from "./Components/DeviceDetails";
import { Device } from "./Interfaces";

const App = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    const getDevices = async () => {
      const query = await fetch(
        "https://static.ui.com/fingerprint/ui/public.json"
      );
      const json = await query.json();
      setDevices(json.devices);
    };
    getDevices();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DeviceList devices={devices} />} />
          <Route
            path="/device/:id"
            element={<DeviceDetails devices={devices} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
