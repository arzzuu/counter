
import { React, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    if (counter < 10) {
      setCounter((count) => count + 1);
    }
  };

  const decrease = () => {
    if (counter > -10) {
      setCounter((count) => count - 1);
    }
  };
  return (
    <div className="counter">
      <h1>Счётчик</h1>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>
          +
        </button>
        <span className="counter__output">{counter}</span>
        <button className="control__btn" onClick={decrease}>
          -
        </button>
      </div>
    </div>
  );
}
