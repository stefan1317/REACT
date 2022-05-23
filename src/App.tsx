import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <Menu/>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details" element={<Details/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;