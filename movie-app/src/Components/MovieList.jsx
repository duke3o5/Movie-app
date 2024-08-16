import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getMovies } from "../Redux/MovieReducer/action";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const [sortedMovies, setSortedMovies] = useState([]);

  const movies = useSelector(store => store.movieReducer.movies);
  
  // Extract sorting order from query parameters
  const sortOrder = searchParams.get('order');
  const name= searchParams.get('name');
  // console.log(name)

  // Function to sort movies
  const sortMovies = (movies, order) => {
    return [...movies].sort((a, b) => {
      const yearA = parseInt(a.Year.split('–')[0], 10);
      const yearB = parseInt(b.Year.split('–')[0], 10);
      
      if (order === 'asc') {
        return yearA - yearB;
      } else if (order === 'desc') {
        return yearB - yearA;
      } else {
        return 0; // No sorting if order is not specified
      }
    });
  };

  useEffect(() => {
    const obj = {
      params: {
        rating: searchParams.getAll('rating'),
        _sort: 'Year', // Always sort by year
        _order: sortOrder,
        name: name
      }
    };

    dispatch(getMovies(obj));
  }, [location.search]);

  useEffect(() => {
    if (movies) {
      setSortedMovies(sortMovies(movies, sortOrder));
    }
  }, [movies, sortOrder]);

  return (
    <DIV data-testid="movie-list">
      {sortedMovies?.map((el) => (
        <MovieCard key={Math.random()} {...el} />
      ))}
    </DIV>
  );
};

const DIV = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  gap: 20px;

  img {
    width: 70%;
  }
`;
