import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.sass';



function App() {
  useEffect(() => {
    document.body.classList.add('has-navbar-fixed-top');
  }, []);

  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
