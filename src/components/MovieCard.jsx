import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <div className="movie-content">
        <h2 className="movie-title">{movie.title}</h2>
        <p>Category: {movie.category}</p>
        <p>Rating: {movie.rating}</p>
        <Link to={`/movie/${movie.id}`}>
          <button className="movie-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;

