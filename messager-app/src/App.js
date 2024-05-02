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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        // Unauth path {state.user == null}
        path: "login",
        element: <Login />,
      },
      {
        // Unauth path {state.user == null}
        path: "registration",
        element: <Registration />,
      },
      {
        // Auth path {state.user != null}
        path: "account",
        element: <Account />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
  // return (
  //   <div className="App">
  //     <Login />
  //     <Registration />
  //     <Counter />
  //     <Report />
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
