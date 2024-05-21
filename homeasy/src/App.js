import React from 'react';
import './App.css';
import Home from './components/home';
import Collection from './components/collection';
import NavColumn from './components/nav-column';
import Newsletter from './components/letter';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Collection/>
      <NavColumn/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
