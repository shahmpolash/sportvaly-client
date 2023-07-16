import React from 'react';
import banner from '../images/banner-img.jpg';
import './Banner.css';
import Academies from '../components/Pages/Academy/Academies';
import Players from '../components/Pages/Players/Players';
import Products from '../components/Pages/Products/Products';

const AcademyBanner = () => {
    return (
        <div>
            <main className="main-wrapper">
        <div className="catagories-section section-gap-top-50">
          <div className="container">
            <Academies></Academies>
            <Players></Players>
            <Products></Products>
          </div>
        </div>
      </main>
        </div>
    );
};

export default AcademyBanner;