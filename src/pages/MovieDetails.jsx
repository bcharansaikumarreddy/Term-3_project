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

  const bookMovie = () => {
    if (!user) {
      alert("Please login first");

      setRedirect(true);
    }
  };

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

          <p>Experience the best movie booking platform built using ReactJS.</p>

          {user ? (
            <Link to={`/seats/${movie.id}`}>
              <button className="book-btn">Book Now</button>
            </Link>
          ) : (
            <button className="book-btn" onClick={bookMovie}>
              Login To Book
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
