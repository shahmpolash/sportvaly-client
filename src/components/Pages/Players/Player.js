import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Player.css';


const Player = ({ player }) => {
    const navigate = useNavigate();

    const { _id } = player;

    const playerDetails = id => {
        navigate(`/player/${id}`);
    }

    return (
        <div>
            <div class="container">
                <div class="row text-left no_padding">
                    <div>
                        <div class="card text-center">
                            <div className='d-flex justify-content-center'><img  src={player.profile_picture} alt="image" class="card-img-top" /></div>
                                <div class="card-body card-bg p-2">
                                    <h4 class="card-title">{player.name}</h4>
                                    <h5 class="card-title">Total Matches {player.total_matchs}</h5>
                                    <Button onClick={() => playerDetails(_id)} className='mx-2'>View Profile</Button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Player;