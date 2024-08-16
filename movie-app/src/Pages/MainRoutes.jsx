import React from "react";
import { Route, Routes } from "react-router-dom";
// import { PrivateRoute } from "../Components/PrivateRoute";
import { Homepage } from "./Homepage";
// import { Login } from "./Login";
import { MovieDetail } from "./MovieDetail";

export const MainRoutes = () => {
  return <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/movie/:id" element={
      // <PrivateRoute>
        <MovieDetail />
      // </PrivateRoute>
    } />

  </Routes>;
};
