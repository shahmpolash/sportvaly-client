import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CricketBat = () => {

  const [products, setProducts] = useState([]);


  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


    return (
        <div>
            <div className="title-content">
              <h2 className="title">New Arrival</h2>
              <a href="shop.html" className="view-all">
                View All
              </a>
            </div>
            <div className="catagories-wrapper">
              <div className="catagories-wrapper-content">
                {
                  products.map(product =>  product.productCategory === 'Bat' &&
                    
                    <div className="single-product-item product-item--style-1 product-item--bg-gold">
                    <Link to={`/product/${product._id}`} className="image">
                      <img
                        width={146}
                        height={111}
                        className="img-fluid"
                        src={product.productImage}
                        alt="product"
                      />
                    </Link>
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
                          {product.productName}
                        </a>
                        <span className="price">Tk. {product.productPrice}</span>
                      </div>
                      <div className="content--right">
                        <a
                          href="wishlist.html"
                          aria-label="Wishlist"
                          className="btn btn--size-33-33 btn--center btn--round btn--color-radical-red btn--bg-white btn--box-shadow"
                        >
                          <i className="icon icon-carce-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                    
                    )
                }
             
              </div>
            </div>
        </div>
    );
};

export default CricketBat;