import React, { useEffect } from 'react';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation } from 'react-router-dom';

const pageTitles = {
  '/About': 'About',
  '/Portfolio': 'Portfolio',
  '/Contact': 'Contact',
  '/': 'Home',
};

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname] || '404';
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
