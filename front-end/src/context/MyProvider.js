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
  const [modal, setModal] = useState(false);
  const [origem, setOrigem] = useState('');

  const toggle = async () => await setModal(!modal);

  // realizada o cadastro de currículo
  const handleRegister = async () => {
    if (validateCPF(register.cpf)) {
      try {
        if (!editmode) {
          const data = await requestPost("/register", register);
          localStorage.setItem('user', JSON.stringify(data));
          navigate('/report');
          setOrigem('create');
          toggle();
        } else {
          const { id } = JSON.parse(localStorage.getItem('user'));
          const data = await requestPut(`/register/${id}`, register);
          localStorage.setItem('user', JSON.stringify(data));
          navigate('/report');
          setOrigem('update');
          toggle();
        }
      } catch (e) {
        if (e.response.status === StatusCodes.CONFLICT) {
          setCredentialError(true);
          setFlagError(e.response.data.message);
      }
    };
    } else {
      setCredentialError(true);
      setFlagError('CPF inválido');
    }    
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

  const validateRegister = () => {
    const { nome, email, login, senha, cpf } = register;
    return ( nome && email && login && senha && cpf );
  };

  const validateCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g,'');
    if(cpf === '') return false;
    // Elimina CPFs invalidos conhecidos
    if (cpf.length !== 11 ||
      cpf === "00000000000" ||
      cpf === "11111111111" ||
      cpf === "22222222222" ||
      cpf === "33333333333" ||
      cpf === "44444444444" ||
      cpf === "55555555555" ||
      cpf === "66666666666" ||
      cpf === "77777777777" ||
      cpf === "88888888888" ||
      cpf === "99999999999")
        return false;

    // Valida 1o digito
    let add = 0;
    for (let i=0; i < 9; i ++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
      let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
      rev = 0;
    if (rev !== parseInt(cpf.charAt(9)))
      return false;

    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i ++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
      rev = 0;
    if (rev !== parseInt(cpf.charAt(10)))
      return false;
    return true;
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
    logout, 
    modal, 
    setModal,
    toggle,
    origem,
    validateRegister,
    validateCPF,
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