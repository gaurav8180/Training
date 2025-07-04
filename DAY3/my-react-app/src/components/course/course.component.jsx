import React, { useState } from "react";

const Course = ({ coursedetails }) => {
  const [currLikes, setCurrLikes] = useState(coursedetails.likes);

  const incrementLikes = () => {
    console.log("U clicked !");
    setCurrLikes(currLikes + 1);
  };

  console.log("Within Render - Course");
  let ratings = [];
  for (let index = 0; index < coursedetails.rating; index++) {
    ratings.push(
      <i
        className="fa-solid fa-star"
        key={index}
        style={{ color: "orange" }}
      ></i>
    );
  }

  return (
    <div className="col-md-3 my-1">
      <div className="card">
        <img
          src={coursedetails.imageUrl}
          className="card-img-top"
          alt={coursedetails.title}
          height="175px"
        />
        <div className="card-body">
          <h5 className="card-title">{coursedetails.title}</h5>
          <p className="card-text">{ratings}</p>
          <p className="card-text">₹.{coursedetails.price}</p>

          <button className="btn btn-primary" onClick={incrementLikes}>
            {currLikes}
            <i className="fa-solid fa-thumbs-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
