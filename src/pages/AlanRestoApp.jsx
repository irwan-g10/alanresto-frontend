import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Navbar from '../component/layout/Navbar/Navbar';
import Footer from '../component/layout/footer/Footer';

function AlanRestoApp() {


  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default AlanRestoApp
