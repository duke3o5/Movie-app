import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  // console.log(id);


  const movies = useSelector(store => store.movieReducer.movies);
  // console.log(movies);

  useEffect(() => {
    const newdata = movies.find((el) => el.id == id);
    setData(newdata);
  }, [])

  const { Poster, Title, Year, Type, rating } = data;
  return (
    <div>
      <h3 className="movie-id">
        {id}
      </h3>
    {data && <div>
    <img src={Poster} alt='movies' className="movie-image" />
      <h3 className="movie-name">{Title}</h3>
      <p className="movie-year">{Year}</p>
      <p className="movie-type">{Type}</p>
      <p className="movie-rating">{rating}</p>
    </div>}
    </div>
  );
};
