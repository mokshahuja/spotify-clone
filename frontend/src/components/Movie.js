import React from "react";
import "./Movie.css";

const Movie = ({ title, description, imageUrl }) => {
  description =
    description.length > 5
      ? description.substring(0, 17) + "..."
      : description;

  return (
    <div className="song">
      <div className="song__image">
          <img src={imageUrl} alt={title}/>
      </div>
      <div className="song__title"> {title} </div>
      <div className="song__description">{description}</div>
    </div>
  );
};

export default Movie;
