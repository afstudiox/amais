import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import myContext from '../context/MyContext';

export default function Report(props) {
  const { resumes, loadResumes } = useContext(myContext);

  const mediaSalario = (array) => {
    const media = resumes.reduce((acc, curr) => acc + curr.pretensaoSalarial, 0) / resumes.length
    return media.toFixed(0)
  };


  useEffect(() => {
    loadResumes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Container className='vh-100 vw-100 d-flex align-items-center'>
      <Container className='bg-light border h-75 w-75'>
        <Row className='justify-content-center text-center p-5 border'>
          Realatório de Currículos
        </Row>
          {
            resumes.map((resume, index) => (
              <Row key={ index }>
                <Col>{ resume.nome }</Col>
                <Col>{ `R$ ${resume.pretensaoSalarial}` }</Col>
              </Row>
            ))
          }
          <Row>
            <Col>Média da Pretensão Salarial</Col>
            <Col>{ `R$ ${ mediaSalario(resumes) }` }</Col>
          </Row>
      </Container>
    </Container>
  )
}