import React, { useEffect, useState } from 'react';
import { Button, Card, Tab, Tabs } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './AcademyDetails.css';

const AcademyDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [academy, setAcademy] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/academy/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAcademy(data));
    }, []);

    const academyUpdate = id =>{
        navigate(`/update/${id}`);
    }
    return (
        <div className='container'>
            <Card className="bg-dark text-red">
                <Card.Img className='banner-img' src={academy.banner} alt="Card image" />
                <Card.ImgOverlay>
                    <div className='d-flex justify-content-between'>
                        <h1 className='academyname'>{academy.name}</h1>
                        <img className='logo' src={academy.logo} alt="" />
                    </div>
                </Card.ImgOverlay>
            </Card>
            <Tabs
                defaultActiveKey="details"
                transition={false}
                id="noanim-tab-example"
                className="mb-3 d-flex justify-content-center"
            >
                <Tab eventKey="details" title="Details" default>
                    <p className='details'>{academy.details}</p>
                    <h5 className='details'>Practice Date: {academy.practice_schedule}</h5>
                    <h5 className='details'>Practice Time: {academy.practice_time}</h5>
                    <h5 className='details'>Admission Fee: {academy.admission_fee} .Taka</h5>
                    <h5 className='details'>Monthly Fee: {academy.monthly_fee} .Taka</h5>
                    <h5 className='details'>Practice Time: {academy.practice_time}</h5>
                    <div className='d-flex justify-content-center'><Button>{academy.phone}</Button></div>
                </Tab>
                <Tab eventKey="videos" title="Videos">
                    <div className='d-flex justify-content-center'>
                    <iframe width="560" height="315" src={academy.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    
                </Tab>
                <Tab eventKey="photos" title="Photos">
                   <div className='d-flex justify-content-center'>
                   <div className='photos'>
                        <img src={academy.photo1} alt="" />
                        <img src={academy.photo2} alt="" />
                        <img src={academy.photo3} alt="" />
                        <img src={academy.photo4} alt="" />
                    </div>
                   </div>
                    
                </Tab>
                <Tab className='text-center' eventKey="contact" title="Contact">
                    <p>Academy Address: {academy.address}</p>
                    <p>Phone Number: {academy.phone}</p>
                    
                </Tab>
            </Tabs>
            <div className='d-flex justify-content-center mt-5'><Button onClick={() => academyUpdate(id)} className='mx-2'>Update This Academy</Button></div>
        </div>
    );
};

export default AcademyDetails;