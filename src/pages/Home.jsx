import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";

import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchInput, setSearchInput] = useState("");

  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch("http://localhost:3000/movies");

    const data = await response.json();

    setMovies(data);

    setLoading(false);
  };

  const changeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  
  const changeCategory = (event) => {
    setCategory(event.target.value);
  };

  const filteredMovies = movies.filter((eachMovie) => {
    const searchMatch = eachMovie.title
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    const categoryMatch = category === "All" || eachMovie.category === category;

    return searchMatch && categoryMatch;
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="home-container">
      <h1 className="home-heading">Choose Your Favourite Movie</h1>

      <SearchBar
        searchInput={searchInput}
        changeSearchInput={changeSearchInput}
        category={category}
        changeCategory={changeCategory}
      />

      {filteredMovies.length === 0 ? (
        <h1>No Movies Found</h1>
      ) : (
        <div className="movies-list">
          {filteredMovies.map((eachMovie) => (
            <MovieCard key={eachMovie.id} movie={eachMovie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
