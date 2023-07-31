import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CricketBat = () => {

  const [products, setProducts] = useState([]);


  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


    return (
        <div>
            <div className="title-content">
              <h2 className="title">Cricket Bat</h2>
              <a href="/shop" className="view-all">
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
                          
                        </ul>
                        <a href="/shop" className="title product-name">
                          {product.productName}
                        </a>
                        <span className="price">Tk. {product.productPrice}</span>
                      </div>
                      <div className="content--right">
                        
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