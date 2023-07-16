import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Update.css';

const Update = () => {
    const [players, setPlayers] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/players`)
          .then((res) => res.json())
          .then((info) => setPlayers(info));
      }, []);
    return (
        <div>
            <div className='update-profile'>
                <h2>Update Your Cricket Profile</h2>
            </div>
            {
                players.filter(player=> player.playerEmail === user?.email).length === 1 &&
                <ul>
                    <li>
                        {
                            players.map(p=> p.playerEmail === user?.email &&
                            <a href={`/total-matches/${p._id}`} className="btn btn--block btn--radius btn--size-xlarge btn--color-white btn--bg-maya-blue text-center contact-btn">Update Your Total Matches</a>
                        )}
                    </li>
                    <li>
                        {
                            players.map(p=> p.playerEmail === user?.email &&
                            <a href={`/total-runs/${p._id}`} className="btn btn--block btn--radius btn--size-xlarge btn--color-white btn--bg-maya-blue text-center contact-btn">Update Your Total Runs</a>
                        )}
                    </li>
                    <li>
                        {
                            players.map(p=> p.playerEmail === user?.email &&
                            <a href={`/total-wkts/${p._id}`} className="btn btn--block btn--radius btn--size-xlarge btn--color-white btn--bg-maya-blue text-center contact-btn">Update Your Total Wikts</a>
                        )}
                    </li>
                    <li>
                        {
                            players.map(p=> p.playerEmail === user?.email &&
                            <a href={`/height-runs/${p._id}`} className="btn btn--block btn--radius btn--size-xlarge btn--color-white btn--bg-maya-blue text-center contact-btn">Update Your Height Runs</a>
                        )}
                    </li>
                    <li>
                        {
                            players.map(p=> p.playerEmail === user?.email &&
                            <a href={`/height-wkts/${p._id}`} className="btn btn--block btn--radius btn--size-xlarge btn--color-white btn--bg-maya-blue text-center contact-btn">Update Your Height Wikts</a>
                        )}
                    </li>
                </ul>
            }
        </div>
    );
};

export default Update;