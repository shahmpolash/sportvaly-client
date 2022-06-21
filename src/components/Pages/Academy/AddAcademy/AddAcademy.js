import React from 'react';
import { useForm } from "react-hook-form";

const AddAcademy = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/academis/`;
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
                
                <input className='mb-2' {...register("name")} placeholder='Academy Name' />

                <textarea className='mb-2' {...register("details", { required: true, maxLength: 200 })} placeholder='Academy Details' />

                <textarea className='mb-2' {...register("address", { required: true, maxLength: 200 })} placeholder='Academy Address' />

                <input className='mb-2' type="text" {...register("practice_schedule")} placeholder='Practice Date. Sat - Wed' />

                <input className='mb-2' type="text" {...register("practice_time")} placeholder="Practice Time . 7am - 11am" />
                <input className='mb-2' type="number" {...register("admission_fee")} placeholder="Admission Fee" />
               
                <input className='mb-2' type="number" {...register("monthly_fee")} placeholder="Monthly Fee" />

                <input className='mb-2' type="number" {...register("phone")} placeholder="Phone Number" />

                <input className='mb-2' type="number" {...register("altphone")} placeholder="Another Phone Number" />

                <input className='mb-2' type="text" {...register("thumbnail")} placeholder="Thumbnail URL" />

                <input className='mb-2' type="text" {...register("banner")} placeholder="Banner URL" />

                <input className='mb-2' type="text" {...register("logo")} placeholder="Logo URL" />

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

export default AddAcademy;
