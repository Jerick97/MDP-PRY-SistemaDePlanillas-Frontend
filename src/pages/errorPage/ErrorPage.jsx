import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="error-page__container d-flex justify-content-center align-items-center flex-column w-full"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to="/" className="btn btn-dark">
        Volver al Inicio
      </Link>
    </div>
  );
}

export default ErrorPage;
