import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './PlayerDetails.css';

const PlayerDetails = () => {

    const { id } = useParams();
    const [player, setPlayer] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/player/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPlayer(data));
    }, []);
    return (
        <div className='container'>
            <Card className="text-center player-details">
                <Card.Header className='d-flex justify-content-center'> <img src={player.profile_picture} alt="" /> </Card.Header>
                <Card.Body>
                    <Card.Title>{player.name}</Card.Title>
                    <Button variant="primary">{player.role}</Button>
                </Card.Body>
            </Card>
            <div>
                <h2 className='text-center'>Playr History</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>As a Batsman</Accordion.Header>
                        <Accordion.Body>
                            <Table striped bordered hover variant="dark">
                               
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Total Matches</td>
                                        <td>{player.total_matchs}</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Total Runs</td>
                                        <td>{player.total_runs}</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Height Runs</td>
                                        <td>{player.highest_runs}</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Total 50s</td>
                                        <td>{player.fifty}</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Total 100s</td>
                                        <td>{player.hundred}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>As a Bowler</Accordion.Header>
                        <Accordion.Body>
                        <Table striped bordered hover variant="dark">
                               
                               <tbody>
                                   <tr>
                                       <td>1</td>
                                       <td>Total Matches</td>
                                       <td>{player.total_matchs}</td>
                                       
                                   </tr>
                                   <tr>
                                       <td>2</td>
                                       <td>Total Wickets</td>
                                       <td>{player.total_wickets}</td>
                                       
                                   </tr>
                                   <tr>
                                       <td>3</td>
                                       <td>Height Wickets</td>
                                       <td>{player.height_wickets}</td>
                                   </tr>
                                   <tr>
                                       <td>4</td>
                                       <td>Total 5s</td>
                                       <td>{player.five}</td>
                                   </tr>
                                   
                               </tbody>
                           </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default PlayerDetails;