import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Glpi from './Glpi';
import './App.css';

function App() {
  const sections = [
    {
      name: 'Glpi',
      address: '/glpi',
    },
  ];

  return (
    <Router>
      <Navbar sections={sections} />
      <Routes>
        <Route path="/glpi" element={<Glpi />} />
      </Routes>
    </Router>
  );
}

export default App;
