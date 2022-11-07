import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestGet, requestPost } from '../API';
import MyContext from './MyContext';

export default function MyProvider(props) {

  const navigate = useNavigate();

  const [register, setRegister] = useState({});
  const [login, setLogin] = useState({});
  const [resumes, setResumes] = useState([]);

  // realizada o cadastro de currículo
  const handleRegister = async () => {
    await requestPost("/register", register);
    navigate('/report');
  };

  //realiza o login
  const handleLogin = async () => {
    const data = await requestPost("/login", login);
    console.log(data);
    navigate('/report');
  };

  //carrega os currículos
  const loadResumes = async () => {
    const data = await requestGet("/resumes");
    setResumes(data);
  };
  

  const { children } = props;
  const { Provider } = MyContext;

  const data = {
    register,
    setRegister,
    handleRegister,
    login,
    setLogin,
    handleLogin,
    resumes, 
    setResumes,
    loadResumes,
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