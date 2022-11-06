import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../API';
import MyContext from './MyContext';

export default function MyProvider(props) {

  const navigate = useNavigate();

  const [register, setRegister] = useState({
    
  });

  const convertDate = (date) => {
    if (date) {
      const [day, month, year] = date.split('/');
      return `${year}/${month}/${day}`;
    } 
  };

  const handleRegister = async () => {
      const newDate = convertDate(register.dataNascimento);
      setRegister({ ...register, dataNascimento: newDate });
      const data = await registerUser("/user", register);
      localStorage.setItem('token', data.token);
      navigate('/');
  };

  const { children } = props;
  const { Provider } = MyContext;

  const data = {
    register,
    setRegister,
    handleRegister,
  }
  return (
    <Provider
      value={ data }
    >
      {children}  
    </Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;