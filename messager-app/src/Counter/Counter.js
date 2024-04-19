//import React from "react";

import { useState } from "react";

import Button from "@mui/material/Button";

import style from "./Counter.module.css";

const Counter = () => {
  const [state, setState] = useState({
    counter: 0,
  });

  return (
    <div>
      <h1>Counter: {state.counter}</h1>
      <Button
        variant="contained"
        onClick={function () {
          setState({ counter: state.counter + 1 });
        }}
      >
        Increase
      </Button>
    </div>
  );
};

export default Counter;
