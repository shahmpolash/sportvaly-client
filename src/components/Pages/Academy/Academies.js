import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Academis.css";

const Academies = () => {
  const [academies, setAcademies] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/academies`)
      .then((res) => res.json())
      .then((info) => setAcademies(info));
  }, []);

  return (
    <div>
      <div className="title-content">
        <h2 className="title">Academies</h2>
        <div><a href="/academy-list"><p>View All</p></a></div>
      </div>

      <div className="academy-cards-all-cards">
        <div className="academy-cards">
          <>
            {academies.slice(0, 6).map((academy) => (
              <div className="academy-cards-single">
                <div className="academy">
                  <Link class="btn" to={`/academy/${academy._id}`}>
                    <img src={academy.academyProfilePhoto} alt="" />
                  </Link>
                </div>
                <div className="text">
                  <p>{academy.academyName}</p>
                </div>
              </div>
            )).reverse()}
          </>
        </div>
      </div>

      
    </div>
  );
};

export default Academies;
