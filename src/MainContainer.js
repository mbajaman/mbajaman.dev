import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Work from './sections/work/Work';
import About from './sections/about/About';

const MainContainer = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default MainContainer;