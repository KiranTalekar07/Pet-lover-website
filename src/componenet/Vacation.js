import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form  from './Form';
import BookforYourPet from './BookforYourPet';

function Vacation() {
  return (
    <div className='bg-secondary-subtle Container-fluid'>
      <div>
      <Container>
      <Row>
      <Col lg={4} md={4} sm={12}>
     <Form/>
      </Col>
      <br/>
      <Col lg={8} md={6} sm={12} > 
      <BookforYourPet/>
      </Col>
      </Row>
     </Container>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Vacation
