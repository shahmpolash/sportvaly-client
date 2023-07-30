import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateHeightRuns = () => {
    const {id} = useParams();
    const [player, setPlayer] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.BACKEND_URL}/player/${id}`)
          .then((res) => res.json())
          .then((info) => setPlayer(info));
      }, [id]);

      const handleUpdateProfile = (event) => {
        event.preventDefault();
        const heightRuns = event.target.heightRuns.value;
    
       
        const updateProfile = {
            heightRuns
        };
    
        const url = `${process.env.BACKEND_URL}/update-height-runs/${player._id}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateProfile),
        })
          .then((res) => res.json())
          .then((result) => {
            navigate("/update");
          });
      };

    return (
        <div>
            <div className='update-profile'>
                <h2>Update Your Total Matches</h2>
            </div>
            <form onSubmit={handleUpdateProfile}>
                <ul>
                    <li className='single-form-item'>
                        <input type="number" defaultValue={player.heightRuns} name="heightRuns" id="" />
                    </li>
                    <li className='single-form-item'>
                        <input className="btn btn--block btn--radius btn--size-xlarge btn--color-white btn--bg-maya-blue text-center contact-btn" type="submit" value="Update" />
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default UpdateHeightRuns;