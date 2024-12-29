import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // Sidebar dan struktur umum
import Home from './components/Home'; // Halaman Home
import Analytics from './components/Analytics'; // Halaman Analytics
import Settings from './components/Settings'; // Halaman Settings

function App() {
  return (
    <Router>
      <Dashboard /> {/* Memuat Dashboard, termasuk sidebar */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
