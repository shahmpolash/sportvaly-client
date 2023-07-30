import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const AddProfile = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [players, setPlayers] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:5000/players`)
        .then((res) => res.json())
        .then((info) => setPlayers(info));
    }, []);

    const handlePlayerProfile = (event) => {
        event.preventDefault();
        const playerName = event.target.playerName.value;
        const updated = event.target.updated.value;
        const playerEmail = event.target.playerEmail.value;
        const dateOfBirth = event.target.dateOfBirth.value;
        const playerProfileImg = event.target.playerProfileImg.value;
        const playerRole = event.target.playerRole.value;
        const teamName = event.target.teamName.value;
        const totalMatches = event.target.totalMatches.value;
        const totalRuns = event.target.totalRuns.value;
        const totalWickets = event.target.totalWickets.value;
        const heightRuns = event.target.heightRuns.value;
        const heightWickets = event.target.heightWickets.value;
        const aboutPlayer = event.target.aboutPlayer.value;
        
        
    
        const newPlayer = {playerName, updated, playerEmail, dateOfBirth, playerProfileImg, playerRole, teamName, totalMatches, totalRuns, totalWickets, heightRuns ,heightWickets, aboutPlayer};

        const url = `http://localhost:5000/add-player`;
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newPlayer),
        })
          .then((res) => res.json())
          .then((result) => {
            navigate("/dashboard");
          });
      };


      
  return (
    <div>
      {
        players.filter(player=> player.playerEmail === user?.email).length === 0 &&
        <form onSubmit={handlePlayerProfile}>
    <ul>
      <li class="single-form-item">
        <input required type="text" name="playerName" placeholder="Your Name" maxlength="30" oninput="checkCharacterLimit()" />
      </li>
      <li class="single-form-item">
        <input hidden type="text" name="updated" value="No" />
      </li>
      <li class="single-form-item">
        <input hidden type="email" name="playerEmail" value={user?.email} placeholder="Your Name" />
      </li>
      <li class="single-form-item">
        <input hidden type="text" name="profileStatus" value='Pending' />
      </li>
      <li class="single-form-item">
        <input required type="text" name="playerProfileImg" placeholder="Profile Image" />
      </li>
      <li class="single-form-item">
        <input required type="date" name="dateOfBirth" placeholder="Date of Birth" />
      </li>
      <li class="single-form-item">
      <select required name="playerRole">
      <option value='Batsman'>Batsman</option>
      <option value='Bowler'>Bowler</option>
      <option value='Allrounder'>Allrounder</option>
     </select>
     </li>
      <li class="single-form-item">
        <input required type="text" name="teamName" placeholder="Your Team or Academy Name" maxlength="30" oninput="checkCharacterLimit()" />
      </li>
      <li class="single-form-item">
        <input required type="number" name="totalMatches" placeholder="Total Matches You Have Played" max="1000" oninput="checkNumberLimit()" />
      </li>
      <li class="single-form-item">
        <input required type="number" name="totalRuns" placeholder="Total Runs" max="10000" oninput="checkNumberLimit()" />
      </li>
      <li class="single-form-item">
        <input required type="number" name="totalWickets" placeholder="Total Wickets" max="1000" oninput="checkNumberLimit()" />
      </li>
      <li class="single-form-item">
        <input required type="number" name="heightRuns" placeholder="Height Runs" max="300" oninput="checkNumberLimit()" />
      </li>
      <li class="single-form-item">
      <input required type="number" name="heightWickets" placeholder="Height Wickets" max="9" />
      </li>
      <li class="single-form-item">
        <textarea required type="text" name="aboutPlayer" placeholder="Write About You" maxlength="100" oninput="checkCharacterLimit()" />
      </li>
      <li class="single-form-item">
        <input className="btn btn--block btn--radius btn--size-xlarge btn--color-white btn--bg-maya-blue text-center contact-btn" type="submit" value="Create your profile" />
      </li>
    </ul>
  </form>
      }

{
        players.filter(player=> player.playerEmail === user?.email).length === 1 &&
        <ul><li class="single-form-item">
        <input className="btn btn--block btn--radius btn--size-xlarge btn--color-white btn--bg-maya-blue text-center contact-btn" type="submit" value="You already have an account" />
      </li></ul>
      }
    </div>
    
  );
};

export default AddProfile;
