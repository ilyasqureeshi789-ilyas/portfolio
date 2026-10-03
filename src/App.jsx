import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Header from "./Components/SubComp/Header";
import Footer from "./Components/SubComp/Footer";

function App() {
  return (
    <Router>  {/* ✅ Router should wrap everything */}
      <div style={{ background: "#0f172a", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <div style={{ flex: "1 0 auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />  {/* ✅ Footer should be inside Router but outside Routes */}
      </div>
    </Router>
  );
}

export default App;