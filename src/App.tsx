import React from "react";
import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import Liquidity from "pages/Liquidity";
import Swap from "pages/Swap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Dashboard />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/liquidity" element={<Liquidity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
