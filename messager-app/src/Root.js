import Login from "./Login";

import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { CircularProgress } from "@mui/material";

import UserContext from "./UserContext";

const Root = () => {
  const [state, setState] = useState({
    user: null,
    loaded: false,
  });

  useEffect(() => {
    fetch("/api/auth/login")
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setState({ user: null, loaded: true });
        } else {
          setState({ user: data, loaded: true });
        }
      });
  }, []);

  if (state.loaded == false) {
    return <CircularProgress />;
  }

  console.log("User:");
  console.log(state.user);

  return (
    <div>
      <header>
        <Link to="login">Login</Link>
        {" | "}
        <Link to="registration">Registration</Link>
      </header>
      <div>
        <UserContext.Provider value={state.user}>
          <Outlet />
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default Root;
