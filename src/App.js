import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/pages/Homepage';
import TeamPage from './components/pages/TeamPage';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team/:teamName" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}
export default App;
