import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Academy.css';

const Academy = ({academy}) => {
    const navigate = useNavigate();

    const { _id} = academy;

    const academyDetail = id =>{
        navigate(`/academy/${id}`);
    }

    return (
        <div className='mx-2 mb-2'>
            <div class="container">
                <div class="row text-left no_padding">
                    <div>
                        <div class="card text-center">
                            <div className='d-flex justify-content-center'><img  src={academy.thumbnail} alt="image" class="card-img-top" /></div>
                                <div class="card-body card-bg p-2">
                                    <h4 class="card-title">{academy.name}</h4>
                                    <Button onClick={() => academyDetail(_id)} className='mx-2'>Academy Details</Button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
    );
};

export default Academy;