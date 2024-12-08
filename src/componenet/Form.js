import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Formm() {
  return (
    
    <div style={{backgroundColor:"orange"}}>
    <div style={{width:"80%",margin:"0 auto"}}>
      <Form className='py-4'>
      <Form.Control type="text" placeholder="Your Name" className='my-4'/>
      <Form.Control type="email" placeholder="Your Email" className='my-4'/>      
      <Form.Control type="date" placeholder="Reservation Date" className='my-4'/>
      <Form.Control type="time" placeholder="Reservation Time" className='my-4'/>

      <Form.Select aria-label="Default select example">
      <option> Select Services</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      
     <Button varient="dark" type='submit' style={{width:"100%"}} className='my-4'>
      Book Now
     </Button>
      </Form>
    </div>
    </div>
  )
}

export default Formm
