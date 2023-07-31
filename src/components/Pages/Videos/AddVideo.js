import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddVideo = () => {
    const navigate = useNavigate();

    const handleAddVideo = (event) => {
        event.preventDefault();
        const videoType = event.target.videoType.value;
        const videoURL = event.target.videoURL.value;
        const videoBanner = event.target.videoBanner.value;
        const videoTitle = event.target.videoTitle.value;
       
        const addVideo = {
            videoType,
            videoURL,
            videoBanner,
            videoTitle,
        };
    
        const url = `${process.env.REACT_APP_BACKEND_URL}/add-video`;
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addVideo),
        })
          .then((res) => res.json())
          .then((result) => {
            navigate("/");
          });
      };
    return (
        <div>
            <form onSubmit={handleAddVideo}>
        <ul>
        <select name="videoType">
            <option value='Information'>Information</option>  
            <option value='Training'>Training</option>  
        </select>
        <li class="single-form-item">
          <input
            type="text"
            name="videoURL"
            placeholder="Video URL"
          ></input>{" "}
          <br />
        </li>
        <li class="single-form-item">
          <input
            type="text"
            name="videoBanner"
            placeholder="Video Banner URL"
          ></input>{" "}
          <br />
        </li>
        <li class="single-form-item">
          <input
            type="text"
            name="videoTitle"
            placeholder="Video Title"
          ></input>{" "}
          <br />
        </li>

        

        <input
          className="btn btn--block btn--radius btn--size-xlarge btn--color-white btn--bg-maya-blue text-center contact-btn"
          type="submit"
          value="Add Academy"
        ></input>
        </ul>
        
      </form>
        </div>
    );
};

export default AddVideo;