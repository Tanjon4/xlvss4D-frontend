import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Produits from "./pages/Produits";
import React from "react";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Produits />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;