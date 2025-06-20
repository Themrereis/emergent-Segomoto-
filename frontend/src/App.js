import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SegoMoto from "./pages/SegoMoto";
import SegoPhone from "./pages/SegoPhone";
import SegoCar from "./pages/SegoCar";
import SegoInsaat from "./pages/SegoInsaat";
import BecerikHolding from "./pages/BecerikHolding";
import BecerikliEticaret from "./pages/BecerikliEticaret";
import BecerikSigorta from "./pages/BecerikSigorta";
import BecerikliMedikal from "./pages/BecerikliMedikal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sego-moto" element={<SegoMoto />} />
          <Route path="/sego-phone" element={<SegoPhone />} />
          <Route path="/sego-car" element={<SegoCar />} />
          <Route path="/sego-insaat" element={<SegoInsaat />} />
          <Route path="/becerik-holding" element={<BecerikHolding />} />
          <Route path="/eticaret" element={<BecerikliEticaret />} />
          <Route path="/becerik-sigorta" element={<BecerikSigorta />} />
          <Route path="/becerikli-medikal" element={<BecerikliMedikal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
