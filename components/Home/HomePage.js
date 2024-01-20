import React from 'react'
import About from './About'
import Services from './Services'
import Products from './Products'
import Business from './Business'
import CustomerStories from './CustomerStories'
import Banner from './Banner'
export const HomePage = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Products />
      <Business />
      <CustomerStories />
    </>
  )
}
