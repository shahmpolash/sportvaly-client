import React from 'react';
import { useForm } from "react-hook-form";


const PlayerProfile = () => {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/players/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=> {
            console.log(result);

        })
    }


    return (
        <div className='mx-auto mt-5'>
            <h2 className='text-center'>Add a Academy</h2>
            <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' {...register("name")} placeholder='Player Name' />

                <input className='mb-2' {...register("details", { required: true, maxLength: 200 })} placeholder='Team or Academy Name' />

                <input className='mb-2' {...register("address", { required: true, maxLength: 200 })} placeholder='Date of Borth' />

                <input className='mb-2' type="text" {...register("practice_schedule")} placeholder='Role: Batsman/Bolwler/Allrounder' />

                <input className='mb-2' type="text" {...register("practice_time")} placeholder="Batting Style" />
                <input className='mb-2' type="text" {...register("admission_fee")} placeholder="Bowling Style" />
               
                <input className='mb-2' type="number" {...register("monthly_fee")} placeholder="Total Matchs" />

                <input className='mb-2' type="number" {...register("phone")} placeholder="Total Runs" />

                <input className='mb-2' type="number" {...register("altphone")} placeholder="Total Wickets" />

                <input className='mb-2' type="text" {...register("thumbnail")} placeholder="Highest Runs" />

                <input className='mb-2' type="text" {...register("banner")} placeholder="Highest Wickets" />

                <input className='mb-2' type="text" {...register("logo")} placeholder="Profile Picture" />

                <input className='mb-2' type="text" {...register("photo1")} placeholder="Photo 1 URL" />

                <input className='mb-2' type="text" {...register("photo2")} placeholder="Photo 2 URL" />

                <input className='mb-2' type="text" {...register("photo3")} placeholder="Photo 3 URL" />

                <input className='mb-2' type="text" {...register("photo4")} placeholder="Photo 4 URL" />

                <input className='mb-2' type="text" {...register("video")} placeholder="Video URL" />

                <input type="submit" value="Add Academy"/>
            </form>

        </div>
    );
};

export default PlayerProfile;
