import React from "react";
import styled from "styled-components";
import { MovieList } from "../Components/MovieList";
import { Sidebar } from '../Components/Sidebar'

export const Homepage = () => {
  return (
    <DIV>
      <Sidebar />
      <MovieList />
    </DIV>
  );
};

let DIV= styled.div`
display:flex;
margin: auto;
justify-content: space-evenly;
`;
