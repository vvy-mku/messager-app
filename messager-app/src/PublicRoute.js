import { useContext, useEffect } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { user, loaded } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loaded && user !== null) {
      navigate("/account");
    }
  }, [user, loaded]);

  if (!loaded) return "";

  return children;
};

export default PublicRoute;
