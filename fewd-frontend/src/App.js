import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import Home from './Components/HomeLayout';
import BrowseTalks from './Components/BrowseTalks';


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
