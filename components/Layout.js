import React, { useState } from 'react'; // Import useState
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {

  const openPopupWidget = () => {
    Calendly.initPopupWidget({ url: 'https://calendly.com/akshay-telesourcenow' });
    return false;
  };


  return (
    <div>
      <Navbar />
      <div>
      <button
        onClick={openPopupWidget}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          background: '#2a2292',
          color: 'white',
          animation: 'glowing 1500ms infinite', // Use the defined animation
        }}
      >BOOK A DEMO </button>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
