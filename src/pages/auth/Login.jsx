import MicrosoftLogin from "react-microsoft-login";
import "./Login.css";
import logo from "../../assets/images/logo_top_header_shadow.png";
import { useState } from "react";

export const Login = () => {
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [validateForm, setValidateForm] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validación de campo de email
    if (!email) {
      setEmailError("El email es obligatorio");
      return;
    } else if (!isValidEmail(email)) {
      setEmailError("Ingresa un email válido");
      return;
    }

    // Validación de límite de caracteres en el campo de contraseña
    if (!password) {
      setPasswordError("La contraseña es obligatoria");
      return;
    } else if (password.length > 8) {
      setPasswordError("La contraseña debe tener máximo 8 caracteres");
      return;
    }

    // Si todas las validaciones pasan, realizar la llamada al backend para iniciar sesión
    setValidateForm(true);

    console.log("Iniciar sesión:", email, password);
    try {
      const data = { email, password };
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(response);
    } catch (error) {
      // Manejar errores de autenticación
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <section className="background-radial-gradient overflow-hidden d-flex align-items-center justify-content-center ">
      <div className="overlay"></div>
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 d-flex justify-content-center  align-items-center mb-5">
          <div className="col-lg-8 py-4 d-flex align-items-center justify-content-center flex-column position-relative ">
            <img src={logo} alt="logo mdp" className="logo mb-4" />
            <p className="mb-2 fs-2 title">Sistema de Planillas de MDP</p>
            <p className="mb-4 fs-5 subtitle text-center">
              Un entorno donde valoramos y potenciamos el talento de nuestros
              colaboradores
            </p>
          </div>

          <div className="col-lg-4 mb-lg-0 position-relative text-center text-md-end d-flex justify-content-center align-items-center">
            <div className="form-login bg-glass">
              <div className="px-4 mt-5 px-md-5">
                <form onSubmit={handleSubmit} autoComplete="off">
                  <h2 className="text-white fs-3 text-center mb-4">Login</h2>
                  <div className="mb-4">
                    <MicrosoftLogin
                      clientId={"f8c7976f-3e93-482d-88a3-62a1133cbbc3"}
                      authCallback={authHandler}
                    >
                      <button className="microsoft-login-btn">
                        Iniciar Sesión con Microsoft
                      </button>
                    </MicrosoftLogin>
                  </div>

                  <div className="form-outline mb-4">
                    <label
                      htmlFor="email"
                      className="form-login__label d-block form-label-sm text-start"
                    >
                      Email:
                    </label>
                    {emailError && (
                      <div className="invalid-feedback">{emailError}</div>
                    )}
                    <div className="input-group">
                      <input
                        type="email"
                        id="email"
                        className={`form-control rounded-white bg-opacity-50 ${
                          emailError && "is-invalid"
                        }`}
                        placeholder="Ingrese Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-person-fill"></i>
                      </span>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label
                      htmlFor="password"
                      className="form-login__label d-block form-label-sm text-start"
                    >
                      Contraseña:
                    </label>
                    {passwordError && (
                      <div className="invalid-feedback">{passwordError}</div>
                    )}
                    <div className="input-group">
                      <input
                        type="password"
                        id="password"
                        className={`form-control rounded-white bg-opacity-50 ${
                          passwordError && "is-invalid"
                        }`}
                        placeholder="Ingrese contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-eye-slash-fill"></i>
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn buttton-auth btn-block mb-4"
                  >
                    Iniciar Sesión
                  </button>
                  {validateForm && (
                    <div className="alert alert-success mt-3" role="alert">
                      Autenticación exitosa! Ingresando ...
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
