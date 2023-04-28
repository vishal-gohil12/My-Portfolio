import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Navbar from "./Componant/Navbar";
import Footer from "./Componant/Footer";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
