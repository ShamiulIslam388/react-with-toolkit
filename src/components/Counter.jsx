import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const IncrementHandler = () => {
    dispatch(increment());
  };
  const IncrementByValueHandler = () => {
    dispatch(incrementByAmount(5));
  };
  const DecrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div className="counter-container">
      <div className="counter-text">{count}</div>
      <div className="button-group">
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
        <button onClick={IncrementByValueHandler}>IncrementByValue</button>
      </div>
    </div>
  );
};

export default Counter;
