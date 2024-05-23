import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
          {/* Add routes for other components as needed */}
        </Routes>
    </div>
  );
}

export default App;
