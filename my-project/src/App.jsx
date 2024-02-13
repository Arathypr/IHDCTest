import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Homepage1 from "./components/Homepage1";
import Homepage2 from "./components/Homepage2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage1" element={<Homepage1 />} />
        <Route path="/" element={<Homepage2 />} />
      </Routes>
    </Router>
  );
}

export default App;
