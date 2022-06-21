import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MyProfile = ({record}) => {
    const navigate = useNavigate();

    const { _id} = record;

    const playerDetails = id =>{
        navigate(`/player/${id}`);
    }
    return (
        <div>
                    <div className='d-flex justify-content-center'>
                    <img className='profile-image' src={record.profile_picture} alt="" />
                    </div>
                    <div className='d-flex justify-content-center'>{record.name}</div>
                    <div>
                    <table class="table table-striped table-dark">
                    
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">As a Batsman</th>
                            <th scope="col">As a Bowler</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Total Matchs - {record.total_matchs} </td>
                            <td>Total Matchs - {record.total_matchs}</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Total Runs - {record.total_runs}</td>
                            <td>Total Wickets - {record.total_wickets}</td>
                            
                        </tr>
                        
                    </tbody>
                </table>
                    </div>
                    <Button onClick={() => playerDetails(_id)} className='mx-2'>More Details</Button>
                </div>
    );
};

export default MyProfile;