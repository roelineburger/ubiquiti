import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Toolbar from "./Components/Toolbar";
import { Routes, Route } from "react-router-dom";
//import DetailsContainer from "./Containers/DetailsContainer";
import ProductList from "./Components/ProductList";
import CardList from "./Components/CardList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Toolbar />
      <Routes>
        <Route path="/list" element={<ProductList />} />
        <Route path="/card" element={<CardList />} />
      </Routes>
    </div>
  );
};

export default App;
