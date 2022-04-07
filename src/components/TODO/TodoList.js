import React, { useState } from 'react';
import { FaTrashAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const TodoList = ({ item, setList, list, index }) => {
  const [count, setCount] = useState(null);

  const handlerDelete = (del) => {
    setList(
      list.filter((item, index) => {
        return index !== del;
      })
    );
  };

  // TODO
  const handleDecrement = (e) => {
    e.preventDefault();
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  return (
    <div>
      <li>
        {item} <FaTrashAlt onClick={() => handlerDelete(index)} />
        <div className="counter d-flex align-item-center">
          {' '}
          <span onClick={handleDecrement} className="decrement">
            <FaChevronLeft />
          </span>
          <p style={{ margin: 0 }}>{count}</p>
          <span onClick={handleIncrement} className="increment">
            <FaChevronRight />
          </span>
        </div>
      </li>
    </div>
  );
};
