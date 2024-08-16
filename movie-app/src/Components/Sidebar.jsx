import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getMovies } from "../Redux/MovieReducer/action";



export const Sidebar = () => {
  const [serachParams, setSearchParams] = useSearchParams();
  const initialCategory = serachParams.getAll('rating');
  const [name, setName] = useState(initialCategory || []);
  const initialOrder = serachParams.get('order');
  const [order, setorder] = useState(initialOrder || '');

  const dispatch = useDispatch();

  const movies = useSelector(store => store.movieReducer.movies);
  // console.log(movies)




  const handleChange = (e) => {
    let newName = e.target.value;
    setName(newName);
  }

  const handleSort = (e) => {
    setorder(e.target.value);
  }

  useEffect(() => {
    let params = {
      name: name,
    }
    order && (params.order = order);
    setSearchParams(params);
  }, [name, order]);



  const handleSearch = () => {
    // console.log(name)
    dispatch(getMovies(name))
  }



  return (
    <DIV>
      <h3>Search Movie</h3>
      <input type="text" placeholder="Search" onChange={handleChange} />
      {/* <button onClick={handleSearch}>Search</button> */}
      <h3>Sort By Year</h3>
      <div onChange={handleSort}>
        <input type="radio" name="order" value={'asc'} defaultChecked={order === 'asc'} />
        <label>Ascending</label>
        <br />
        <input type="radio" name="order" value={'desc'} defaultChecked={order === 'desc'} />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 25%;
  text-align: left;
  border-right: 1px solid gray;
`;
