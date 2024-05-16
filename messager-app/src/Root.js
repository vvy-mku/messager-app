import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { CircularProgress, Divider } from "@mui/material";

import UserContext from "./UserContext";

import BannerPlacement from "./BannerPlacement";

const Root = () => {
  const [state, setState] = useState({
    user: null,
    loaded: false,
  });

  const elementRef = useRef(null);

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

  const data = {
    user: state.user,
    loaded: state.loaded,
    message: "hello world",
    change: (my) => setState({ ...state, message: my }),
    elementRef,
  };

  return (
    <UserContext.Provider value={data}>
      <div>
        <BannerPlacement />
        <Divider />
        <div>
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Root;
