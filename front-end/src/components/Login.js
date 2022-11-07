import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import myContext from '../context/MyContext';

export default function Login(props) {
  const {login, setLogin, handleLogin } = useContext(myContext)

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
  };

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
            <Label for="password" hidden>password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Digite sua senha"
              type="password"
              className='p-3'
              value={ login.senha }
              onChange={ handleChange }
            />
          </FormGroup>
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

