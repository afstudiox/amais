import React, { useContext } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import myContext from '../context/MyContext';

export default function Register(props) {
  const { register, setRegister, handleRegister } = useContext(myContext);
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRegister({ ...register, [name]: value });
  };

  return (
    <Container className='vh-100 vw-100'>
      <Container className='bg-light border'>
        <Row className='justify-content-center text-center p-5 border'>
          Tela de Cadastro
        </Row>

        <Form className='m-5'>

          <Row>
            <Col md={6}>
            <FormGroup>
              <Label for='name'>Nome</Label>
              <Input 
                type='text' 
                id='nome' 
                placeholder='Digite seu nome completo'
                value={ register.nome }
                name='nome' 
                onChange= { handleChange } />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input 
                type='email' 
                name='email' 
                id='email' 
                placeholder='Digite seu melhor email'
                value={ register.email }
                onChange= { handleChange }  />
            </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
            <FormGroup>
              <Label for='login'>Login</Label>
              <Input 
                type='text' 
                name='login' 
                id='login' 
                placeholder='Digite um login' 
                value={ register.login }
                onChange= { handleChange } />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
              <Label for='senha'>Senha</Label>
              <Input 
                type='password' 
                name='senha' 
                id='senha' 
                placeholder='Digite uma senha'
                value={ register.senha }
                onChange= { handleChange }  />
            </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
            <FormGroup>
              <Label for='cpf'>CPF</Label>
              <Input 
                type='text' 
                name='cpf' 
                id='cpf' 
                placeholder='Somente os números'
                value={ register.cpf}
                onChange= { handleChange }  />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
              <Label for='nascimento'>Data de Nascimento</Label>
              <Input 
                type='text' 
                name='nascimento' 
                id='nascimento' 
                placeholder='Digite no formato ( Dia/Mês/Ano )'
                value={ register.nascimento}
                onChange= { handleChange } />
            </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
            <FormGroup>
              <Label for='sexo'>Sexo</Label>
              <Input 
                type='text' 
                name='sexo' 
                id='sexo' 
                placeholder='Digite seu sexo'
                value={ register.sexo}
                onChange= { handleChange }  />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
              <Label for='estadoCivil'>Estado Civil</Label>
              <Input 
                type='text' 
                name='estadoCivil' 
                id='estadoCivil' 
                placeholder='Digite seu estado Civil'
                value={ register.estadoCivil}
                onChange= { handleChange }  />
            </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
            <FormGroup>
              <Label for='escolaridade'>Escolaridade</Label>
              <Input 
                type='text' 
                name='escolaridade' 
                id='escolaridade' 
                placeholder='Digite seu ultimo nivel de estudos'
                value={ register.escolaridade}
                onChange= { handleChange }  />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
              <Label for='pretensaoSalarial'>Pretensão Salarial</Label>
              <Input 
                type='text' 
                name='pretensaoSalarial' 
                id='pretensaoSalarial' 
                placeholder='Pretensão Salarial'
                value={ register.pretensaoSalarial}
                onChange= { handleChange }  />
            </FormGroup>
            </Col>
          </Row>

          <Row>
            <FormGroup>
              <Label for='cursos'>Cursos</Label>
              <Input 
                type='text' 
                name='cursos' 
                id='cursos' 
                placeholder='Digite seus cursos separados por virgulas'
                value={ register.cursos}
                onChange= { handleChange }  />
            </FormGroup>
          </Row>

          <Row>
            <FormGroup>
              <Label for='expProfissional'>Experiências Profissionais</Label>
              <Input 
                type='text' 
                name='expProfissional' 
                id='expProfissional' 
                placeholder='Digite suas experiências profissionais separadas por virgulas'
                value={ register.experienciaProfissional}
                onChange= { handleChange }  />
            </FormGroup>
          </Row>

          <Container className="d-flex justify-content-center">
            <Button 
              outline 
              size='lg' 
              className="mt-5"
              onClick={ handleRegister }>
              Cadastrar
            </Button>
            </Container>
          
        </Form>
      </Container>
    </Container>
  )
}