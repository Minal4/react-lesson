import React, { useState } from 'react';
import {
  FormContainer,
  FormTitle,
  InputField,
  NameWrap,
  BtnRegister,
} from './RegisterStyled';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
  const [field, setField] = useState({
    fname: '',
    lname: '',
    password: '',
    cpassword: '',
  });

  const [reg, setReg] = useState([]);
  const [success, setSuccess] = useState(false);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value });
  };
  console.log(field, '#field');

  const handlerClick = (e) => {
    e.preventDefault();
    if (
      !field.fname ||
      !field.lname ||
      !field.password ||
      !field.cpassword ||
      field.password !== field.cpassword
    ) {
      alert('please fill the form');
    } else {
      const newData = { ...field };
      setReg([...reg, newData]);
      setSuccess(true);
      toast('Register Successfully !');
    }
  };

  console.log(reg, '@sdas');

  return (
    <FormContainer>
      <FormTitle>
        <h2>Register</h2>
        <p>Create your accout. It's free and only takes a minute</p>
        {success && <ToastContainer />}
      </FormTitle>
      <form>
        <NameWrap>
          <InputField
            value={field.fname}
            type="text"
            name="fname"
            className={success && field.fname === '' ? 'btn-red' : ''}
            placeholder="First Name"
            onChange={handlerChange}
          />
          {success && !field.fname ? <span>asdasd</span> : ''}
          <InputField
            value={field.lname}
            name="lname"
            onChange={handlerChange}
            className={success && !field.fname ? 'btn-red' : ''}
            type="text"
            placeholder="Last Name"
          />
          {success && !field.lname ? <span>asdasd</span> : ''}
        </NameWrap>
        <InputField
          value={field.password}
          name="password"
          onChange={handlerChange}
          className={success && !field.fname ? 'btn-red' : ''}
          type="password"
          placeholder="Password"
        />
        {success && !field.password ? <span>asdasd</span> : ''}
        <InputField
          value={field.cpassword}
          name="cpassword"
          onChange={handlerChange}
          className={success && !field.fname ? 'btn-red' : ''}
          type="password"
          placeholder="Confirm Password"
        />
        {success && !field.cpassword ? <span>asdasd</span> : ''}

        <BtnRegister onClick={handlerClick} className="btn btn-primary">
          {' '}
          Register Now
        </BtnRegister>
      </form>
    </FormContainer>
  );
};
