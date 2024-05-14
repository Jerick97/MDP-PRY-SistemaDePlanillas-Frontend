import { FaBuildingUser, FaUser } from "react-icons/fa6";
import PropTypes from "prop-types";

function MiniCard({ typeEmployee, totalEmployees, nameCompany }) {
  return (
    <div className="card-mini me-3">
      <div
        className={`text-white card-body background-card-${
          typeEmployee == "empleados" ? "red" : "blue"
        } d-flex justify-content-around align-items-center p-2 border-1 rounded-3`}
      >
        <div className="">
          <span>
            {typeEmployee} {nameCompany}
          </span>
          <div className="d-flex justify-content-evenly align-items-center">
            <div>
              <h2 className="m-0"> {totalEmployees} </h2>
            </div>
            <div>
              {typeEmployee == "empleados" ? (
                <FaBuildingUser size={24} />
              ) : (
                <FaUser size={24} />
              )}
            </div>
          </div>
        </div>
        <div className="">
          <div className="dropdown">
            <button
              className="btn bg-secondary text-white bg-opacity-50 dropdown-toggle w-100"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Exportar
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  PDF
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  XSL
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  JPG
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

MiniCard.propTypes = {
  typeEmployee: PropTypes.string.isRequired,
  totalEmployees: PropTypes.number.isRequired,
  nameCompany: PropTypes.string.isRequired,
};

export default MiniCard;
