import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import UserContext from "./UserContext";

const Auth = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  });

  if (!user) return "";

  return <Outlet />;
};

export default Auth;
