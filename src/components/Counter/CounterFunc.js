import React, { useState } from 'react';

export const CounterFunc = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="d-flex">
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      CounterFunc {count}{' '}
      <button
        className="btn btn-danger"
        onClick={() => setCount(count <= 0 ? 0 : count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};
