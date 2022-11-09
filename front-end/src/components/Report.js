import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import myContext from '../context/MyContext';

export default function Report(props, args) {
  const { resumes, loadResumes, loadResume, setEditmode, logout, modal, toggle } = useContext(myContext);
  const [login, setLogin] = useState('');

  const mediaSalario = (array) => {
    const media = resumes.reduce((acc, curr) => acc + curr.pretensaoSalarial, 0) / resumes.length
    return media.toFixed(0)
  };

  const readLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('user'));
    setLogin(data.login)
  };

  const colorize = (value) => {
    if (value.pretensaoSalarial < mediaSalario(resumes)) {
      return 'text-success'
    } else {
      return 'text-primary'
    }
  };

  useEffect(() => {
    loadResumes();
    readLocalStorage();
    setEditmode(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  
  return (
    <Container className='vh-100 vw-100 d-flex align-items-center'>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Container className='bg-light border h-75 w-75'>
        <Row className='justify-content-center text-center p-5 border'>
         <Col>
            Realatório de Currículos
         </Col>
        </Row>
        <Row className='justify-content-center  text-center p-3 border'>
          <Col>
            { login }
          </Col>
          <Col>
            <Button 
              outline 
              size="sm"
              onClick={ loadResume }> 
              Editar currículo
            </Button>
          </Col>
          <Col>
            <Button 
              outline 
              size="sm"
              onClick={ logout }> 
              Sair
            </Button>
          </Col>
        </Row>
            <Container className='justify-content-center text-center p-3'>
            <Row className='justify-content-center text-center p-2'>
              <Col>Nome do Candidato</Col>
              <Col>Login do Candidato</Col>
              <Col>Pretensão Salarial</Col>
            </Row>
            {
              resumes.map((resume, index) => (
                <Row 
                  key={ index }
                  className={`justify-content-center text-center p-2`}>
                  <Col>{ resume.nome }</Col>
                  <Col>{ resume.login }</Col>
                  <Col className={`${colorize(resume)}`}>{ `R$ ${resume.pretensaoSalarial}` }</Col>
                </Row>
              ))
            }
            </Container>
          <Row className='justify-content-center  text-center p-3 border'>
            <Col>Média da Pretensão Salarial</Col>
            <Col>{ `R$ ${ mediaSalario(resumes) }` }</Col>
          </Row>
      </Container>
    </Container>
  )
}