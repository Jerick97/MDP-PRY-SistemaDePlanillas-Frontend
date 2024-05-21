import PropTypes from "prop-types";
import "./style/SearchInput.css";

const SearchInput = ({ placeholder, maxWidth }) => {
  return (
    <div className="search-input-wrapper" style={{ maxWidth }}>
      <input
        type="text"
        className="form-control search-input"
        placeholder={placeholder}
      />
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
    </div>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  maxWidth: PropTypes.string,
};

SearchInput.defaultProps = {
  maxWidth: "100%",
};

export default SearchInput;
