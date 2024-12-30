import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Components/Pages/Navigation';
import Home from './Components/Pages/HomeLayout';
import BrowseTalks from './Components/Pages/BrowseTalks';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigation />}>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<BrowseTalks />} />
      
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
