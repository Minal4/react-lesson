import React from 'react';
import { FormContainer, FormTitle } from '../ElementStyled';
import { ContactList } from './ContactList';
import './contactStyled.css';

export const Contacts = () => {
  const ContactDetail = [
    {
      name: 'Minal',
      email: 'minal@gmail.com',
      image: 'https://picsum.photos/200/300',
      age: 30,
    },
    {
      name: 'anup',
      email: 'anup@gmail.com',
      image: 'https://picsum.photos/seed/picsum/200/300',
      age: 28,
    },
    {
      name: 'pramod',
      email: 'pramod@gmail.com',
      image: 'https://picsum.photos/200/300?grayscale',
      age: 28,
    },
    {
      name: 'sabin',
      email: 'sabin@gmail.com',
      image: 'https://picsum.photos/200/300/?blur',
      age: 30,
    },
  ];
  return (
    <>
      <FormContainer style={{ backgroundColor: 'transparent' }}>
        <FormTitle> Contact List</FormTitle>
        {ContactDetail.map((item, index) => {
          return <ContactList key={index} contactDetail={item} />;
        })}
      </FormContainer>
    </>
  );
};
