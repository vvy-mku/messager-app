import Login from "./Login";

import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <header>
        <Link to="login">Login</Link>
        {" | "}
        <Link to="registration">Registration</Link>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
