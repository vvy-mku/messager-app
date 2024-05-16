import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

const Auth = ({ children }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  });

  if (!user) return "";

  return <>{children}</>;
};

export default Auth;
