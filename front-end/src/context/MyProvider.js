import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestGet, requestGetOne, requestPost, requestPut } from '../API';
import MyContext from './MyContext';

const { StatusCodes } = require('http-status-codes');

export default function MyProvider(props) {

  const navigate = useNavigate();

  const [register, setRegister] = useState({});
  const [login, setLogin] = useState({});
  const [resumes, setResumes] = useState([]);
  const [credentialError, setCredentialError] = useState(false);
  const [flagError, setFlagError] = useState('');
  const [editmode, setEditmode] = useState(false);

  // realizada o cadastro de currículo
  const handleRegister = async () => {
    try {
      if (!editmode) {
        const data = await requestPost("/register", register);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/report');
      } else {
        const { id } = JSON.parse(localStorage.getItem('user'));
        const data = await requestPut(`/register/${id}`, register);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/report');
      }
    } catch (e) {
      if (e.response.status === StatusCodes.CONFLICT) {
        setCredentialError(true);
        setFlagError(e.response.data.message);
    }
  };
};

  //realiza o login
  const handleLogin = async () => {
    try {
      const data = await requestPost("/login", login);
      localStorage.setItem('user', JSON.stringify(data));
      if (data.login === login.login) {
        navigate('/report');
      }
    } catch (e) {
      if (e.response.status === StatusCodes.UNAUTHORIZED) {
        setCredentialError(true);
        setFlagError(e.response.data.message);
      }
    }
  };

  //carrega os currículos
  const loadResumes = async () => {
    const data = await requestGet("/resumes");
    setResumes(data);
  };

  const loadResume = async () => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    const data = await requestGetOne("/resumes", id);
    setRegister(data);
    setEditmode(true);
    navigate('/register');
  };

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/');
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
    credentialError,
    setCredentialError,
    flagError,
    setFlagError,
    loadResume,
    editmode,
    setEditmode,
    logout
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