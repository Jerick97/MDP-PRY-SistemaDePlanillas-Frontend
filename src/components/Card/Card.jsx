import { FaBuildingUser, FaUser } from "react-icons/fa6";
import "./style/Card.css";
import MiniCard from "../MiniCard/MiniCard";
import PropTypes from "prop-types";

function Card({ typeEmployee, totalEmployees, nameCompany }) {
  const customClass =
    typeEmployee == "empleados"
      ? "background-card-red"
      : "background-card-blue";
  return (
    <>
      <div className="card-widget d-none d-md-block me-3">
        <div
          className={`card-content ${customClass} 
        d-flex flex-column justify-content-between p-3`}
          style={{ height: "236px" }}
        >
          <div className="header d-flex justify-content-between align-items-center">
            <span className="text-white">{typeEmployee}</span>
            <div className="dropdown">
              <button
                className="btn bg-secondary text-white bg-opacity-10 dropdown-toggle"
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
          <div className="cart-type-widget ">
            <div className="card-type-emp">
              <div className="text-info text-center">
                {typeEmployee == "empleados" ? (
                  <FaBuildingUser size={28} />
                ) : (
                  <FaUser size={28} />
                )}
              </div>
              <div className="text-info text-center">
                <div>
                  <span>
                    {typeEmployee} {nameCompany}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-widget">
          <h1>{totalEmployees}</h1>
          <span>{typeEmployee} Registrados</span>
        </div>
      </div>
      <div className="d-md-none">
        <MiniCard
          typeEmployee={typeEmployee}
          totalEmployees={totalEmployees}
          nameCompany={nameCompany}
        />
      </div>
    </>
  );
}

Card.propTypes = {
  typeEmployee: PropTypes.string.isRequired,
  totalEmployees: PropTypes.number.isRequired,
  nameCompany: PropTypes.string.isRequired,
};

export default Card;
