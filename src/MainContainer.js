import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@pages/home/Home';

const MainContainer = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:profileId" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default MainContainer;