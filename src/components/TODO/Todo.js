import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormContainer, FormTitle, InputField } from '../ElementStyled';
import { FaTrashAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TodoList } from './TodoList';

export const Todo = () => {
  const [data, setData] = useState('');
  const [list, setList] = useState([]);
  // const [count, setCount] = useState(null);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(list)); //store colors
    JSON.parse(localStorage.getItem('items')); //get them back
  }, [list]);
  const handlerChange = (e) => {
    const { value } = e.target;
    setData(value.charAt(0).toUpperCase() + value.slice(1));
  };

  const handlerClick = (e) => {
    e.preventDefault();
    setList([...list, data]);
    setData('');
  };

  const ListWrap = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 10px;
    li {
      text-align: left;
      padding: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    li:nth-child(odd) {
      background-color: #fff;
    }
  `;

  return (
    <div>
      <FormTitle>Todo List</FormTitle>
      <FormContainer>
        <label
          style={{ display: 'block', textAlign: 'left', marginBottom: 10 }}
        >
          Item
        </label>
        <InputField
          type="text"
          onChange={handlerChange}
          value={data}
          placeholder="place an item"
        ></InputField>
        <button onClick={handlerClick} className="btn btn-sm btn-primary">
          Add
        </button>
        <div>
          <ListWrap>
            {list.map((item, index) => {
              return (
                <TodoList
                  setList={setList}
                  list={list}
                  item={item}
                  index={index}
                  // count={count}
                  // setCount={setCount}
                />
              );
            })}
          </ListWrap>
        </div>
      </FormContainer>
    </div>
  );
};
