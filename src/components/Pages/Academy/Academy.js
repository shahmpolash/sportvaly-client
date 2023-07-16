import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Academy.css';

const Academy = ({academy}) => {
    const navigate = useNavigate();

    const {_id} = academy;

    
    return (
        <div className="catagories-wrapper">
              <div className="catagories-wrapper-content">
                
                
                    <div className="single-product-item product-item--style-1 product-item--bg-maya-green" key={academy._id}>
                  <a href="single-product.html" className="image">
                    <img
                      width={126}
                      height={98}
                      className="img-fluid"
                      src={academy.academyProfilePhoto}
                      alt="profile"
                    />
                  </a>
                  <div className="content">
                    <div className="content--left">
                      <ul className="review-star">
                        <li className="items fill">
                          <i className="icon icon-carce-star-full" />
                        </li>
                        <li className="items fill">
                          <i className="icon icon-carce-star-full" />
                        </li>
                        <li className="items fill">
                          <i className="icon icon-carce-star-full" />
                        </li>
                        <li className="items fill">
                          <i className="icon icon-carce-star-full" />
                        </li>
                        <li className="items fill">
                          <i className="icon icon-carce-star-full" />
                        </li>
                      </ul>
                      <a href="single-product.html" className="title">
                        {academy.academyName}
                      </a>
                      <span className="price">$4000.00</span>
                    </div>
                    <div className="content--right">
                      <a
                        href="wishlist.html"
                        aria-label="Wishlist"
                        className="btn btn--size-33-33 btn--center btn--round btn--color-pink-swan btn--bg-white btn--box-shadow"
                      >
                        <i className="icon icon-carce-heart" />
                      </a>
                    </div>
                  </div>
                </div>
               
                
                
              </div>
            </div>
    );
};

export default Academy;