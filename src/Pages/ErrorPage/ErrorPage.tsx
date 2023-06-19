import { Link, useRouteError  } from "react-router-dom";
import "../page.css";

 function ErrorPage() {
  const error: any  = useRouteError();
  console.error(error);

  return (
    <div className="page" id="error-page" style={{height:'100vh'}}>
      <h1 >Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'>
        <span>Home</span>
      </Link>
    </div>
  );
}

export default ErrorPage;