import React from 'react'
import { Button, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

export default function Login(props) {
  return (
    <Container className='vh-100 vw-100 d-flex align-items-center'>
      <Container className='bg-light border h-75 w-75'>
        <Row className='justify-content-center text-center p-5 border'>
          Tela de Login
        </Row>
        <Form className='m-5'>
          <FormGroup className='m-5'>
          <Label for="email" hidden>email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Digite seu email"
            type="email"
            className='p-3'
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
            />
          </FormGroup>
          <Container className="d-grid gap-5 col-6 mx-auto my-5 py-5">
            <Button outline size="lg">
              Entrar
            </Button>

              <Button outline size="lg">
                Cadastrar
              </Button>

          </Container>
        </Form>
      </Container>
    </Container>
  )
}

