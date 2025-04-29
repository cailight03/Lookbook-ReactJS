import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/pages/HomePage';
import DigitalSupport from './components/pages/DigitalSupport';
import ConsumerCare from './components/pages/ConsumerCare';
import RAA from './components/pages/RAA';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/digital-support" element={<DigitalSupport />} />
        <Route path="/consumer-care" element={<ConsumerCare />} />
        <Route path="/RAA" element={<RAA />} />
      </Routes>
    </Router>
  );
}
export default App;
