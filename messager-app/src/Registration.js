import {
  Card,
  Stack,
  TextField,
  Button,
  CardHeader,
  CardContent,
  Alert,
  Link,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Registration = () => {
  const [state, setState] = useState({
    login: "",
    name: "",
    password: "",
    confirmPassword: "",
    error: "",
  });

  const navigate = useNavigate();

  const onRegistration = () => {
    if (state.password != state.confirmPassword) {
      setState({ ...state, error: "diff-passwords" });
      return;
    }

    const data = {
      login: state.login,
      password: state.password,
      name: state.name,
    };

    fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          navigate("/account");
        } else {
          setState({ ...state, error: data.error });
        }
      });
  };

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      <Card sx={{ width: "40vw" }}>
        <CardHeader title="Registration" />
        <CardContent>
          <Stack spacing={2}>
            {state.error == "diff-passwords" ? (
              <Alert severity="warning">Invalid password confirmation.</Alert>
            ) : (
              ""
            )}
            {state.error == "bad-name-param" ? (
              <Alert severity="warning">Invalid name.</Alert>
            ) : (
              ""
            )}
            {state.error == "bad-login-param" ? (
              <Alert severity="warning">Invalid Login.</Alert>
            ) : (
              ""
            )}
            {state.error == "bad-password-param" ? (
              <Alert severity="warning">Invalid password.</Alert>
            ) : (
              ""
            )}
            {state.error == "login-is-not-available" ? (
              <Alert severity="warning">Login you typed already exists.</Alert>
            ) : (
              ""
            )}
            <TextField
              hiddenLabel
              id="login"
              defaultValue=""
              label="Login"
              value={state.login}
              onChange={(event) => {
                setState({ ...state, login: event.target.value, error: "" });
              }}
              error={
                state.error == "bad-login-param" ||
                state.error == "login-is-not-available"
              }
            />
            <TextField
              hiddenLabel
              id="name"
              defaultValue=""
              label="Name"
              value={state.name}
              onChange={(event) => {
                setState({ ...state, name: event.target.value, error: "" });
              }}
              error={state.error == "bad-name-param"}
            />
            <TextField
              hiddenLabel
              type="password"
              id="password"
              defaultValue=""
              label="Password"
              value={state.password}
              onChange={(event) => {
                setState({ ...state, password: event.target.value, error: "" });
              }}
              error={
                state.error == "bad-password-param" ||
                state.error == "diff-passwords"
              }
            />
            <TextField
              hiddenLabel
              type="password"
              id="password_confirm"
              defaultValue=""
              label="Confirm password"
              value={state.confirmPassword}
              onChange={(event) => {
                setState({
                  ...state,
                  confirmPassword: event.target.value,
                  error: "",
                });
              }}
              error={
                state.error == "bad-password-param" ||
                state.error == "diff-passwords"
              }
            />
            <Button variant="contained" size="large" onClick={onRegistration}>
              Registration
            </Button>
            <Link
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
              href="#"
            >
              Already have an account
            </Link>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Registration;
