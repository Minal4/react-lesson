import React, { useState } from 'react';
import styled from 'styled-components';
import { FormContainer, FormTitle, InputField } from '../ElementStyled';
import { FaTrashAlt } from 'react-icons/fa';

export const Todo = () => {
  const [data, setData] = useState('');
  const [list, setList] = useState([]);
  const handlerChange = (e) => {
    const { value } = e.target;
    setData(value.charAt(0).toUpperCase() + value.slice(1));
  };

  const handlerClick = (e) => {
    e.preventDefault();
    setList([...list, data]);
    setData('');
  };

  const handlerDelete = (del) => {
    setList(
      list.filter((item, index) => {
        return index !== del;
      })
    );
  };

  console.log(data);
  console.log(list, '@list');

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
                <li key={index}>
                  {item} <FaTrashAlt onClick={() => handlerDelete(index)} />
                </li>
              );
            })}
          </ListWrap>
        </div>
      </FormContainer>
    </div>
  );
};
