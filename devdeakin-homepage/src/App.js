import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import SubscribeBar from './components/SubscribeBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedArticles />
      <FeaturedTutorials />
      <SubscribeBar />
      <Footer />
    </>
  );
}

export default App;
