import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import TeamPage from './components/pages/TeamPage';
import HomePage from './components/HomePage/HomeHero';
import ScrollToTop from './components/common/ScrollToTop';



function App() {
  return (
    <Router>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team/:teamName" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}
export default App;
