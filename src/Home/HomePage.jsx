import React from 'react';
import './css/HomePage.css';
import 'animate.css';
import Hero from '../Home/Hero';
import Features from '../Home/Features';
import About from './About';
import Footer from './Footer';
import Header from './Header';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header/>
      <Hero/>
      <Features/>
      <About/>
      <Footer/>
    </div>
  );
};

export default HomePage;
