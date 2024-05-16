import {
  Card,
  Stack,
  TextField,
  Button,
  CardHeader,
  CardContent,
  Link,
  Alert,
} from "@mui/material";

import { createPortal } from "react-dom";

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "./UserContext";

const Login = () => {
  console.log("Login component rendering");

  const [state, setState] = useState({
    login: "",
    password: "",
    invalid: false,
  });

  const { elementRef } = useContext(UserContext);

  const navigate = useNavigate();

  const onLogin = () => {
    if (state.login.length == 0 || state.password.length == 0) {
      setState({ ...state, invalid: true });
      return;
    }

    const data = {
      login: state.login,
      password: state.password,
    };

    console.log(state);

    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status == 200) {
          navigate("/account");
        } else {
          setState({ ...state, invalid: true });
        }
      })
      .catch(() => {});
  };

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      <Card sx={{ width: "30vw" }}>
        <CardHeader title="Login" />
        <CardContent>
          <Stack spacing={2}>
            {state.invalid
              ? createPortal(
                  <Alert severity="warning">Invalid login or password.</Alert>,
                  elementRef.current
                )
              : ""}
            <TextField
              hiddenLabel
              id="login"
              label="Login"
              value={state.login}
              onChange={(event) => {
                setState({
                  ...state,
                  login: event.target.value,
                  invalid: false,
                });
              }}
            />
            <TextField
              hiddenLabel
              type="password"
              id="password"
              label="Password"
              value={state.password}
              onChange={(event) => {
                setState({
                  ...state,
                  password: event.target.value,
                  invalid: false,
                });
              }}
            />

            <Button variant="contained" size="large" onClick={onLogin}>
              Login
            </Button>
            <Link
              onClick={(e) => {
                e.preventDefault();
                navigate("/registration");
              }}
              href="#"
            >
              Create account
            </Link>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Login;
