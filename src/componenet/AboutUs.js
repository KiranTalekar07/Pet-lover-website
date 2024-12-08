import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaCheckDouble } from "react-icons/fa6";
import img1 from './img/about-1.jpg';
import img2 from './img/about-2.jpg';
import img3 from './img/about-3.jpg';

function AboutUs() {
  return (
    <div >
     <div>
        <Container>
            <Row>
              <Col lg={6} md={6} sm={12} className='ml-5'>
              <h4 className='text-success  mt-5'>About Us</h4>
              <h1 className='About  fw-bold'><span className='text-danger'>Boarding</span> &nbsp;& &nbsp;<br></br>
              <span className='text-success'>Daycare</span></h1>
              <p className='fw-bold'>Amet stet amet ut. Sit no vero vero no dolor. Sed erat ut sea.
                Just clita ut stet kasd at diam sit arat vero sit.
              </p>
              <p >Dolers lorem lorem ipsum Sadip sea amet diam dolore sed et. Sit
                rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit 
                dolor sed sit et sed ipsum et kasd
                ut. 
              </p>
              <h5 > <FaCheckDouble className='text-success ' />&nbsp;<span className='fw-bold fs-5'>Best In Industry</span></h5>
              <h5 > <FaCheckDouble className='text-success' />&nbsp;<span className='fw-bold'>Emergency Services</span></h5>
              <h5> <FaCheckDouble className='text-success' />&nbsp;<span className='fw-bold'>24/7 Customer Support</span></h5><br></br>
              <Button variant="danger">Learn More</Button>
              </Col> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Col lg={4} md={4} sm={12} className='mt-5 '>
              <img src={img1} alt='' style={{width:"100%",height:"50%"}} />
              <img src={img2} alt='' style={{width:"50%",height:"50%"}} />
              <img src={img3} alt='' style={{width:"50%",height:"50%"}} />
              </Col> 
            </Row>
        </Container>
     </div>
    </div>
  )
}

export default AboutUs
