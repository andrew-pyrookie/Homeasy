import React from 'react';
import LandingPage from './LandingPage';
import Collection from './collection';
import NavColumn from './nav-column';
import SellingProducts from './selling';
import SalesBanner from './salesbanner';
import Testimonials from './testimonials';
import Newsletter from './letter';
import Footer from './footer';
import WhyChooseUs from './whychooseus';


function Home() {
  return (
    <div className="App">
      <LandingPage/>
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

export default Home;
