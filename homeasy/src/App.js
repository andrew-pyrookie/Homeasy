// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/shop';
import AboutUs from './components/About';
import ContactUs from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          {/* Add routes for other components as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
