import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProfile = () => {
    const {id} = useParams();
    const [player, setPlayer] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.BACKEND_URL}/player/${id}`)
          .then((res) => res.json())
          .then((info) => setPlayer(info));
      }, []);

      const handleEditProfile = (event) => {
        event.preventDefault();
        const playerName = event.target.playerName.value;
        const dateOfBirth = event.target.dateOfBirth.value;
        const playerProfileImg = event.target.playerProfileImg.value;
        const playerRole = event.target.playerRole.value;
        const teamName = event.target.teamName.value;
        const aboutPlayer = event.target.aboutPlayer.value;
    
       
        const updateProfile = {playerName, dateOfBirth, playerProfileImg, playerRole, teamName, aboutPlayer};
    
        const url = `${process.env.BACKEND_URL}/edit-profile/${player._id}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateProfile),
        })
          .then((res) => res.json())
          .then((result) => {
            navigate("/dashboard");
          });
      };

    return (
        <div>
            <div className='update-profile'>
                <h2>Update Your Total Runs</h2>
            </div>
            <form onSubmit={handleEditProfile}>
                <ul>
                    <li className='single-form-item'>
                        <input type="text" defaultValue={player.playerName} name="playerName" id="" />
                    </li>
                    <li className='single-form-item'>
                        <input type="text" defaultValue={player.dateOfBirth} name="dateOfBirth" id="" />
                    </li>
                    <li className='single-form-item'>
                        <input type="text" defaultValue={player.playerProfileImg} name="playerProfileImg" id="" />
                    </li>
                    <li className='single-form-item'>
                        <input type="text" defaultValue={player.playerRole} name="playerRole" id="" />
                    </li>
                    <li className='single-form-item'>
                        <input type="text" defaultValue={player.teamName} name="teamName" id="" />
                    </li>
                    <li className='single-form-item'>
                        <textarea type="text" defaultValue={player.aboutPlayer} name="aboutPlayer" id="" />
                    </li>
                    <li className='single-form-item'>
                        <input className="btn btn--block btn--radius btn--size-xlarge btn--color-white btn--bg-maya-blue text-center contact-btn" type="submit" value="Update Profile Now" />
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default EditProfile;