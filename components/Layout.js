import React from 'react';
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
        <button onClick={openPopupWidget}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#4f26b5',
          padding: '10px 10px',
          cursor: 'pointer',
        }}  
        >BOOK A DEMO</button>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
