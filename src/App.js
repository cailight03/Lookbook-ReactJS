import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import DigitalSupport from './components/pages/DigitalSupport';
import ConsumerCare from './components/pages/ConsumerCare';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<DigitalSupport />} />
        <Route path="/consumer-care" element={<ConsumerCare />} />
      </Routes>
    </Router>
  );
}
export default App;
