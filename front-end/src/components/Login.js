import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import myContext from '../context/MyContext';

export default function Login(props) {
  const {login, setLogin, handleLogin, credentialError, flagError, setFlagError } = useContext(myContext)

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
  };

  useEffect(() => {
    setFlagError(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className='vh-100 vw-100 d-flex align-items-center'>
      <Container className='bg-light border h-75 w-75'>
        <Row className='justify-content-center text-center p-5 border'>
          Tela de Login
        </Row>
        <Form className='m-5'>
          <FormGroup className='m-5'>
          <Label for="text" hidden>login</Label>
          <Input
            id="login"
            name="login"
            placeholder="Digite seu login"
            type="text"
            className='p-3'
            value={ login.login }
            onChange={ handleChange }
          />
          </FormGroup>
          <FormGroup className='m-5'>
            <Label for="senha" hidden>senha</Label>
            <Input
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              type="password"
              className='p-3'
              value={ login.senha }
              onChange={ handleChange }
            />
          </FormGroup>
          { credentialError && <p className='text-danger'>{ flagError }</p> }
          <Container className="d-grid gap-5 col-6 mx-auto my-5 py-5">
            <Button 
              outline 
              size="lg"
              onClick={ handleLogin }>
              Entrar
            </Button>

              <Button
                outline 
                size="lg"
                onClick={ () => navigate('/register') }>
                Cadastrar
              </Button>

          </Container>
        </Form>
      </Container>
    </Container>
  )
}

