import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="user-event-section">
          <div className="col pos-relative">
            <div className="user-event-area">
              <div className="user-event user-event--left">
                <Link
                  area-label="event link icon"
                  to='/'
                  className="event-btn-link"
                >
                  <i className="icon icon-carce-home" />
                </Link>
                <Link
                  area-label="cart icon"
                  to='/shop'
                  className="event-btn-link"
                >
                  <img className='dash-icon' src="https://i.ibb.co/4tYRXDK/shopping-cart.png" alt="" />
                </Link>
              </div>
              <div className="user-event user-event--center">
                <Link
                  area-label="cart icon"
                  to='/dashboard'
                  className="event-btn-link"
                >
                  <img className='dash-icon' src="https://i.ibb.co/Yc7VBRJ/dashboard.png" alt="" />
                </Link>
              </div>
              
              <div className="user-event user-event--right">
              <Link
                  area-label="cart icon"
                  to='/videos'
                  className="event-btn-link"
                >
                  <img className='dash-icon' src="https://i.ibb.co/kXS8nT7/videos.png" alt="" />
                </Link>
                <Link
                  area-label="cart icon"
                  to='/players'
                  className="event-btn-link"
                >
                  <img className='dash-icon' src="https://i.ibb.co/89hWxYj/cricket-player.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-section" />
        </div>
    );
};

export default Footer;