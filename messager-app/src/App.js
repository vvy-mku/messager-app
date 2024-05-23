import logo from "./logo.svg";
import "./App.css";

import Counter from "./Counter/Counter";
import Report from "./Report/Report";

import Login from "./Login";
import Registration from "./Registration";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Root from "./Root";
import Account from "./Account";

import Auth from "./Auth";
import PublicRoute from "./PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        // Unauth path {state.user == null}
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        // Unauth path {state.user == null}
        path: "registration",
        element: (
          <PublicRoute>
            <Registration />
          </PublicRoute>
        ),
      },
      {
        path: "auth/",
        element: <Auth />,
        children: [
          {
            path: "account",
            element: <Account />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
