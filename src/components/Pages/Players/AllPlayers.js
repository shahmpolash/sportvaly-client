import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Players.css";
import HomeBanner from "../Home/HomeBanner";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch(`${process.env.BACKEND_URL}/players`)
      .then((res) => res.json())
      .then((info) => setPlayers(info));
  }, []);

  return (
    <div className="player-bg container ">
      <div className="players-banner">
        <h2>All Players</h2>
      </div>
      <HomeBanner></HomeBanner>
      <div className="catagories-wrapper">
        <div className="catagories-wrapper-content">
          {players
            .map((player) => (
              <div className="single-product-item product-item--style-1 product-item--bg-maya-blue playerPic">
                <Link to={`/player/${player._id}`} className="image">
                  <img
                    className="img-fluid"
                    src={player.playerProfileImg}
                    alt="player"
                  />
                </Link>

                <div className="playerName">
                  <p>{player.playerName}</p>
                </div>
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default AllPlayers;
