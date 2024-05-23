import React from 'react';
import LandingPage from './components/LandingPage';
import Collection from './components/collection';
import NavColumn from './components/nav-column';
import SellingProducts from './components/selling';
import SalesBanner from './components/salesbanner';
import Testimonials from './components/testimonials';
import Newsletter from './components/letter';
import Footer from './components/footer';
import WhyChooseUs from './components/whychooseus';


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
