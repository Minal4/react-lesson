import React, { useState } from 'react';
import {
  FormTitle,
  InputField,
  NameWrap,
  BtnRegister,
  FormContainer,
} from '../ElementStyled';
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
  const [err, setErr] = useState(field);
  const [success, setSuccess] = useState(false);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value });
    validate(e);
  };
  const validate = (e) => {
    let { name, value } = e.target;
    let errMsg = '';
    switch (name) {
      case 'fname':
        errMsg = field['fname'] === '' ? 'Please fill the form' : '';
        break;
      case 'lname':
        errMsg = field['lname'] === '' ? 'Please fill the form' : '';
        break;
      case 'password':
        errMsg =
          field['password'] === ''
            ? 'Please fill the form'
            : field['cpassword'].length < 5
            ? 'Password should be atleast 5 character'
            : '';
        break;
      case 'cpassword':
        errMsg =
          field['password'] && value !== field['cpassword'] && value
            ? 'Password do not match'
            : field['cpassword'].length < 5
            ? 'Password should be atleast 5 character'
            : 'ss';
        break;
      default:
    }
    setErr((pre) => {
      return {
        ...pre,
        [name]: errMsg,
      };
    });
  };
  console.log(field, '#field');

  const handlerClick = (e) => {
    e.preventDefault();

    const newData = { ...field };
    setReg([...reg, newData]);
    setSuccess(true);
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
          <div className="input-group">
            <InputField
              value={field.fname}
              type="text"
              name="fname"
              className={success && field.fname === '' ? 'btn-red' : ''}
              placeholder="First Name"
              onChange={handlerChange}
            />
            <span className="text-danger">{err.fname}</span>
          </div>
          <div className="input-group">
            <InputField
              value={field.lname}
              name="lname"
              onChange={handlerChange}
              className={success && !field.fname ? 'btn-red' : ''}
              type="text"
              placeholder="Last Name"
            />
            <span className="text-danger">{err.lname}</span>
          </div>
        </NameWrap>
        <div className="input-group">
          <InputField
            value={field.password}
            name="password"
            onChange={handlerChange}
            className={success && !field.fname ? 'btn-red' : ''}
            type="password"
            placeholder="Password"
          />
          <span className="text-danger">{err.password}</span>
        </div>
        <div className="input-group">
          <InputField
            value={field.cpassword}
            name="cpassword"
            onChange={handlerChange}
            className={success && !field.fname ? 'btn-red' : ''}
            type="password"
            placeholder="Confirm Password"
          />
          <span className="text-danger">{err.cpassword}</span>
        </div>

        <BtnRegister onClick={handlerClick} className="btn btn-primary">
          {' '}
          Register Now
        </BtnRegister>
      </form>
    </FormContainer>
  );
};
