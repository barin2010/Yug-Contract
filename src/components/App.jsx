import { Routes, Route } from 'react-router-dom';

import Carier from 'pages/Carier';
import Home from 'pages/Home';
import LogIn from 'pages/LogIn';
import Vendor from 'pages/Vendor';
import Footer from './Footer/Footer';
import Up from './Up/Up';
import Header from './Header/Header';

import backgroundHomeMobile from '../images/header/Banner.png';
import backgroundHomeMobile2x from '../images/header/Banner@2x.png';
import backgroundHomeDesktop from '../images/header/Banner_Desc.jpg';
import backgroundHomeDesktop2x from '../images/header/Banner_Desc@2x.jpg';

import backgroundCarierMobile from '../images/header/CarierMob.jpg';
import backgroundCarierMobile2x from '../images/header/CarierMob@2x.jpg';
import backgroundCarierDesctop from '../images/header/CarierDesc.jpg';
import backgroundCarierDesctop2x from '../images/header/CarierDesc@2x.jpg';

import backgroundVendorMobile from '../images/header/VendorMob.jpg';
import backgroundVendorMobile2x from '../images/header/VendorMob@2x.jpg';
import backgroundVendorDesctop from '../images/header/VendorDesc.jpg';
import backgroundVendorDesctop2x from '../images/header/VendorDesc@2x.jpg';

const backgrounds = {
  home: {
    mobile: backgroundHomeMobile,
    mobile2x: backgroundHomeMobile2x,
    desktop: backgroundHomeDesktop,
    desktop2x: backgroundHomeDesktop2x,
  },
  carier: {
    mobile: backgroundCarierMobile,
    mobile2x: backgroundCarierMobile2x,
    desktop: backgroundCarierDesctop,
    desktop2x: backgroundCarierDesctop2x,
  },
  vendor: {
    mobile: backgroundVendorMobile,
    mobile2x: backgroundVendorMobile2x,
    desktop: backgroundVendorDesctop,
    desktop2x: backgroundVendorDesctop2x,
  },
};

export const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                backgroundImageMobile={backgrounds.home.mobile}
                backgroundImageMobile2x={backgrounds.home.mobile2x}
                backgroundImageDesktop={backgrounds.home.desktop}
                backgroundImageDesktop2x={backgrounds.home.desktop2x}
                showSwiper={true}
              />
              <Home />
            </>
          }
        />
        <Route
          path="/carier"
          element={
            <>
              <Header
                backgroundImageMobile={backgrounds.carier.mobile}
                backgroundImageMobile2x={backgrounds.carier.mobile2x}
                backgroundImageDesktop={backgrounds.carier.desktop}
                backgroundImageDesktop2x={backgrounds.carier.desktop2x}
                headerTitle="Кар’єра"
              />
              <Carier />
            </>
          }
        />
        <Route
          path="/vendor"
          element={
            <>
              <Header
                backgroundImageMobile={backgrounds.vendor.mobile}
                backgroundImageMobile2x={backgrounds.vendor.mobile2x}
                backgroundImageDesktop={backgrounds.vendor.desktop}
                backgroundImageDesktop2x={backgrounds.vendor.desktop2x}
              />
              <Vendor />
            </>
          }
        />
        <Route path="/login" element={<LogIn />} />
      </Routes>

      <Up />
      <Footer />
    </div>
  );
};
