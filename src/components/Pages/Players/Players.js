import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Players.css';

const Players = () => {
   
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/players`)
      .then((res) => res.json())
      .then((info) => setPlayers(info));
  }, []);
   
    return (
        <div className='player-bg container '>
            <div className="title-content">
              <h2 className="title">Players</h2>
              <div><a href="/players"><p>View All</p></a></div>
            </div>
            <div className="catagories-wrapper">
              <div className="catagories-wrapper-content">
                {
                  players.slice(0, 6).map(player=> 
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
                    
                    ).reverse()
                }
                
                
                
              </div>
            </div>
        </div>
    );
};

export default Players;