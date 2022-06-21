import React, { useEffect, useState } from 'react';
import Academy from './Academy';
import './Academis.css';

const Academis = () => {
    const [academis, setAcademis] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/academis')
        .then(res => res.json())
        .then(data => setAcademis(data) );
    }, [])
    return (
        <div className='academis-bg container'>
            <h2 className='text-center'>Cricket Academies </h2>
           <div className='academis'>
           {
                academis.map( academy => 
                    <Academy
                    key={academy._id}
                    academy = {academy}
                    
                    ></Academy>
                )
            }
           </div>
        </div>
    );
};

export default Academis;