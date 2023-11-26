import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MusicPlayer from "./pages/musicplayer";
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/ai" element={<MusicPlayer />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default App;
