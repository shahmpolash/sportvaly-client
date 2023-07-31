import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Districts.css';

const Districts = () => {
  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/districts`)
      .then((res) => res.json())
      .then((info) => setDistricts(info));
  }, []);
  return (
    <div>
        <div className="heading-academy">
            <h1>Find Your Best Academy from Your District</h1>
        </div>
      <div className="district-all-cards">
        
        <div className="district-cards">
        <>
        {
            districts.map(district =>
                <div className="district-single">
              <div className="district-card-one">
                <Link class="btn" to={`/academies/${district._id}`}>
                  <img src="https://i.ibb.co/mG64sk9/academy-cri.png" alt="" />
                </Link>
              </div>
              <p>{district.districtName}</p>
            </div>
                )
        }
            
            
            </>
        
        </div>
      </div>
    </div>
  );
};

export default Districts;
