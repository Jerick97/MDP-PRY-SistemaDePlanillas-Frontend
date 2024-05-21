import PropTypes from "prop-types";
import "./style/ButtonPrimaryIcon.css";

const ButtonPrimaryIcon = ({ onClick, text, icon }) => {
  return (
    <button
      onClick={onClick}
      className="btn-primary-icon-wrapper btn-primary-icon btn-primary-icon-hover"
    >
      <span className="btn-primary-icon-text">{icon}</span>
      {text}
    </button>
  );
};

ButtonPrimaryIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default ButtonPrimaryIcon;
