import { useEffect, useState } from "react";

import { useParams, Link, Navigate } from "react-router-dom";

import "./MovieDetails.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const [redirect, setRedirect] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const response = await fetch(`http://localhost:3000/movies/${id}`);

    const data = await response.json();

    setMovie(data);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  if (redirect) {
    return <Navigate to="/login" />;
  }

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <img src={movie.image} alt={movie.title} className="details-image" />

        <div className="details-content">
          <h1>{movie.title}</h1>

          <p>
            Category:
            {movie.category}
          </p>

          <p>
            Rating:
            {movie.rating}
          </p>

          <p>Experience the best movie booking platform.</p>

          {user ? (
            <Link to={`/seats/${movie.id}`}>
              <button className="book-btn">Book Now</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="book-btn">Login To Book</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
