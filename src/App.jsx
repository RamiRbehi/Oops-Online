// import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DefectDetail from './pages/DefectDetail';

function App() {

  return (
    <Router>
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/defect/:id" element={<DefectDetail />} />
        </Routes>
      </main>
      <div className="flex justify-center text-white text-sm tracking-wide p-5" style={{ color: 'rgba(0,0,0,01)' }}>
        Project by Rami Ben Taieb © {new Date().getFullYear()}
      </div>
    </div>
  </Router>
  )
}

export default App
