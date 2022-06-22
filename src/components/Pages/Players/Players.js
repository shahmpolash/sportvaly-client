import React, { useEffect, useState } from 'react';
import Player from './Player';
import './Players.css';



const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/players')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, [])
    return (
        <div className='player-bg container '>
            <div className='bg-primary mt-5'>
                <h3 class="page__title text-white p-3">Players</h3>
            </div>
            <div className='players col-md-3 col-sm-6'>

                {
                    players.map(player =>
                        <div className='single'>
                            <Player
                                key={player._id}
                                player={player}
                            ></Player>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Players;