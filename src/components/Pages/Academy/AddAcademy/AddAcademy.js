import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAcademy = () => {
  const navigate = useNavigate();
  const [districts, setDristricts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.BACKEND_URL}/districts`)
      .then((res) => res.json())
      .then((info) => setDristricts(info));
  }, []);

  const handleAcademy = (event) => {
    event.preventDefault();
    const district = event.target.district.value;
    const academyName = event.target.academyName.value;
    const academyCoverPhoto = event.target.academyCoverPhoto.value;
    const academyProfilePhoto = event.target.academyProfilePhoto.value;
    const academyAddress = event.target.academyAddress.value;
    const academyPhoneNumber = event.target.academyPhoneNumber.value;
    const practiceDate = event.target.practiceDate.value;
    const practiceTime = event.target.practiceTime.value;
    const academyPhotoOne = event.target.academyPhotoOne.value;
    const academyPhotoTwo = event.target.academyPhotoTwo.value;
    const academyPhotoThree = event.target.academyPhotoThree.value;
    const academyPhotoFour = event.target.academyPhotoFour.value;

    const newAcademy = {
      district,
      academyName,
      academyCoverPhoto,
      academyProfilePhoto,
      academyAddress,
      academyPhoneNumber,
      practiceDate,
      practiceTime,
      academyPhotoOne,
      academyPhotoTwo,
      academyPhotoThree,
      academyPhotoFour,
    };

    const url = `${process.env.BACKEND_URL}/academy`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAcademy),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/");
      });
  };

  return (
    <div>
      <form onSubmit={handleAcademy}>
        <ul>
        <select name="district">
          {districts.map((district) => (
            <option value={district.districtName}>
              {district.districtName}
            </option>
          ))}
        </select>

        <li class="single-form-item">
          <input
            type="text"
            name="academyName"
            placeholder="Academy Name"
          ></input>{" "}
          <br />
        </li>

        <li class="single-form-item">
          <input
            type="text"
            name="academyCoverPhoto"
            placeholder="Academy Cover Photo"
          ></input>{" "}
          <br />
        </li>

        <li class="single-form-item">
          <input
            type="text"
            name="academyProfilePhoto"
            placeholder="Academy Profile Picture"
          ></input>{" "}
          <br />
        </li>

        <li class="single-form-item">
          <input
            type="text"
            name="academyAddress"
            placeholder="Academy Address"
          ></input>{" "}
          <br />
        </li>
        <li class="single-form-item">
          <input
            type="text"
            name="academyPhoneNumber"
            placeholder="Academy Phone Number"
          ></input>{" "}
          <br />
        </li>

        <li class="single-form-item">
          <input
            type="text"
            name="practiceDate"
            placeholder="Practice Date Sat - Wed"
          ></input>{" "}
          <br />
        </li>
        <li class="single-form-item">
          <input
            type="text"
            name="practiceTime"
            placeholder="Practice Time: 8am - 11am"
          ></input>{" "}
          <br />
        </li>

        <li class="single-form-item">
          <input
            type="text"
            name="academyPhotoOne"
            placeholder="Photo One"
          ></input>{" "}
          <br />
        </li>
        <li class="single-form-item">
          <input
            type="text"
            name="academyPhotoTwo"
            placeholder="Photo Two"
          ></input>{" "}
          <br />
        </li>

        <li class="single-form-item">
          <input
            type="text"
            name="academyPhotoThree"
            placeholder="Photo Three"
          ></input>{" "}
          <br />
        </li>

        <li class="single-form-item">
          <input
            type="text"
            name="academyPhotoFour"
            placeholder="Photo Four"
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

export default AddAcademy;
