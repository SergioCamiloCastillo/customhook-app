import React, { useState } from "react";

const useCounter = (initialState) => {
  const [counter, setCounter] = useState(initialState);
  const increment = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return [counter, increment, reset];
};

export default useCounter;
