import "../assets/css/BaseTemplate.css";
import { useEffect, useState } from "react";
import { ItemsMenuData } from "../components/data/ItemsMenuData";
import LogoMdp from "../assets/images/mdpLogo.jpg";
import Avatar from "../assets/images/Avatar1.jpg";
import { Outlet, NavLink } from "react-router-dom";

function MainLayout() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className={sidebar ? "p-0" : "p-0 close"}>
        <div className={sidebar ? "logo-name pt-3 px-3" : "logo-name p-3"}>
          <div className="logo-image">
            <img src={LogoMdp} alt="logo mdp" />
          </div>
          <span
            className={`${sidebar ? "logo_name" : "d-none"}`}
            style={{ whiteSpace: "nowrap" }}
          >
            Planillas MDP
          </span>
        </div>
        <div className="menu-items">
          <ul className="p-0 nav-links">
            {ItemsMenuData.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.href}>
                    <i className={item.iconClass + " m-3"}></i>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <ul className="logout-mode">
            <li className="mode d-flex align-items-center justify-content-between">
              {sidebar ? (
                <div className={`${isMobile ? "hidden" : "d-none d-md-block"}`}>
                  <i className="fa-regular fa-sun"></i>
                  <span className="link-name mx-1">
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </span>
                </div>
              ) : (
                <span>&nbsp;</span>
              )}
              <div className="form-check form-switch mode-toggle">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <section className="dashboard">
        <div className="top bg-main">
          <i
            className="fa-solid fa-bars fa-2xl text-white"
            onClick={showSidebar}
          ></i>
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Busca aquí ..." />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <a
              className="navbar-brand text-white mx-1 header-username"
              href="#"
            >
              Jhon Doe
            </a>
            <div className="navbar-nav me-lg-3 mx-lg-4">
              <div className="flex-shrink-0 dropdown">
                <a
                  href="#"
                  className="d-block link-body-emphasis text-decoration-none dropdown-toggle remove-dropdown-arrow"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={Avatar}
                    alt="mdo"
                    className="rounded-circle header-image-user"
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-end text-small shadow position-absolute mt-3 header-option custom-dropdown-menu">
                  <li className="dropdown-item bg-transparent">
                    <div className="d-flex align-items-center">
                      <img
                        src={Avatar}
                        alt="jhon doe"
                        className="rounded-2 header-image-user"
                      />
                      <div className="ms-3 text-white">
                        <h5 className="mb-1 fs-sm-5 fs-6">Jhon Doe</h5>
                        <p className="email-text text-secondary fs-6">
                          jhondoe@correo.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-bell-fill"></i> Actividad Reciente
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-gear-fill"></i> Ajustes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-person-fill"></i> Perfil
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-door-open-fill"></i> Cerrar Sesión
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="dash-content">
          <div className="overview"></div>
          <div className="activity"></div>
        </div>
        <Outlet />
      </section>
    </>
  );
}

export default MainLayout;
