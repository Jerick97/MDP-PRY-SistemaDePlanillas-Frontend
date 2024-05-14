import { useEffect } from "react";
import PropTypes from "prop-types";

function Theme({ isDarkMode, setIsDarkMode }) {
  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setIsDarkMode(isChecked);
    toggleDarkMode(isChecked);
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    setIsDarkMode(storedDarkMode ? JSON.parse(storedDarkMode) : false);
    toggleDarkMode(isDarkMode);
  }, [isDarkMode, setIsDarkMode]);

  // Función para alternar el modo oscuro
  const toggleDarkMode = (isChecked) => {
    const body = document.body;
    if (isChecked) {
      body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <div className="form-check form-switch mode-toggle">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        onChange={handleChange}
        checked={isDarkMode}
      />
    </div>
  );
}

Theme.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};

export default Theme;
