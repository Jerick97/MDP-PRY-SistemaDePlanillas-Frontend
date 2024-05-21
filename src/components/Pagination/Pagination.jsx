import PropTypes from "prop-types";
import "./style/Pagination.css";
const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <ul className="pagination pagination-md">
      {[...Array(totalPages)].map((_, index) => (
        <li
          key={index}
          className={`page-item custom-pagination ${
            currentPage === index + 1 ? "active" : ""
          }`}
        >
          <button
            className={`page-link custom-pagination-btn ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default Pagination;
