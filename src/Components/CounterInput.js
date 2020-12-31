import React from 'react';
import { useSelector } from "react-redux";

const CounterInput = () => {
  const counter = useSelector((state) => state.counter);

  return <>Counter Value: {counter}</>;
};

export default CounterInput;
