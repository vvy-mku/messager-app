import { useContext, useEffect } from "react";

import UserContext from "./UserContext";

import { useNavigate } from "react-router-dom";

const Account = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, []);

  if (!user) {
    return "";
  }

  return (
    <div>
      <h1>User account</h1>
      <p>Login: {user.login}</p>
      <p>Username: {user.name}</p>
    </div>
  );
};

export default Account;
