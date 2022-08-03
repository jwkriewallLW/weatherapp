import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CatFactPage } from './features/catFact/CatFact';

function App() {
  return (


    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/catfact" element={<CatFactPage />} />
          <Route path="/" element={<Counter/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
