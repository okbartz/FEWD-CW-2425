import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Components/Pages/Navigation';
import Home from './Components/Pages/HomeLayout';
import BrowseTalks from './Components/Pages/BrowseTalks';
import InterestedTalks from './Components/Pages/InterestedTalks';
import ScheduledTalks from './Components/Pages/ScheduledTalks';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigation />}>
      <Route path="/" element={<Home />} />
      <Route path="/interested" element={<InterestedTalks />} />
      <Route path="/schedule" element={<ScheduledTalks />} />
      <Route path="/browse" element={<BrowseTalks />} />
      
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
