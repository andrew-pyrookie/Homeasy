import React from 'react';
import './App.css';
import Home from './components/home';
import Collection from './components/collection';
import NavColumn from './components/nav-column';
import SellingProducts from './components/selling';
import SalesBanner from './components/salesbanner';
import Testimonials from './components/testimonials';
import Newsletter from './components/letter';
import Footer from './components/footer';
import WhyChooseUs from './components/whychooseus';


function App() {
  return (
    <div className="App">
      <Home/>
      <Collection/>
      <NavColumn/>
      <SellingProducts/>
      <SalesBanner/>
      <Testimonials/>
      <WhyChooseUs/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
