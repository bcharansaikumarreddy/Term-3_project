import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = (props) => {
  const { searchInput, changeSearchInput, category, changeCategory } = props;

  return (
    <div className="search-container">
      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="search"
          placeholder="Search Movies..."
          className="search-input"
          value={searchInput}
          onChange={changeSearchInput}
        />
      </div>

      <select
        className="filter-select"
        value={category}
        onChange={changeCategory}
      >
        <option value="All">All Categories</option>

        <option value="Action">Action</option>

        <option value="Sci-Fi">Sci-Fi</option>

        <option value="Drama">Drama</option>

        <option value="Fantasy">Fantasy</option>

        <option value="Romance">Romance</option>

        <option value="Thriller">Thriller</option>

        <option value="Crime">Crime</option>

        <option value="Animation">Animation</option>

        <option value="Adventure">Adventure</option>
      </select>
    </div>
  );
};

export default SearchBar;
