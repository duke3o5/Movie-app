import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieCard = ({Poster, Title, Type, Year, rating, id}) => {

  // console.log(Poster);
  return <div className={"movie-card"}>
    <Link to={`/movie/${id}`}>
      <img src={Poster} alt={Title} className="movie-image"/>
      </Link>
    <h3 className="movie-name">{Title}</h3>
    <p className="movie-year">{Year}</p>
    <p className="movie-type">{Type}</p>
    <p className="movie-rating">{rating}</p>
  </div>;
};


