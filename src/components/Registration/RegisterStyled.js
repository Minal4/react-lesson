import styled from 'styled-components';
export const FormContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  background-color: #f2f5f8;
  padding: 30px;
`;

export const FormTitle = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const InputField = styled.input`
  border: 1px solid #e6e6e6;
  padding: 5px;
  width: 100%;
  background-color: #fff;
  margin-bottom: 15px;
`;

export const NameWrap = styled.div`
  display: flex;
  > input {
    width: 95%;
  }
  > input:not(:last-child) {
    margin-right: 15px;
  }
`;

export const BtnRegister = styled.button`
  width: 100%;
  margin-top: 20px;
`;
