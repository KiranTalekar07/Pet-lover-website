import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PiCatBold } from "react-icons/pi";
import { MdContactEmergency } from "react-icons/md";
import { PiHandHeartLight } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";
import img1 from './img/feature.jpg'
function SpecialCare() {
  return (
    <div>
      <div>
        <Container>
          <Row className='mt-5'>
            <Col lg={5} md={5} sm={12} className=''>
            <img src={img1} alt='' style={{width:"100%",height:"100%"}} />
            </Col>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Col lg={6} md={6} sm={12}>
            <h3 className='text-success fw-bold mt-5'>Why Choose Us?</h3>&nbsp;
            <h1 className='fw-bold care' ><span className='text-danger'>Special Care</span> &nbsp;<span>On Pets</span></h1>&nbsp;
            <p>Dolers lorem lorem ipsum Sadip sea amet diam dolore sed et. Sit
                rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit 
                dolor sed sit et sed ipsum et kasd
                ut.</p>&nbsp;
                <div className='specialcarepets'>
                <div>
                 <h2 className='fs-5 px-2 fw-dark'><PiCatBold style={{color:"green" , height:"40px", width:"40px"}}/>&nbsp;
                    <span>Best In Industry</span></h2>
                </div>   
                <div>
                 <h2 className='fs-5 px-2 fw-dark'><MdContactEmergency style={{color:"green" , height:"40px", width:"40px"}}/>&nbsp;&nbsp;
                    <span>Emergency Services</span></h2>
                </div> 
                <div>
                 <h2 className='fs-5 px-2 fw-dark'><PiHandHeartLight  style={{color:"green" , height:"40px", width:"40px"}}/>&nbsp;&nbsp;
                    <span>Special Care</span></h2>
                </div>
                <div>
                 <h2 className='fs-5 px-2 fw-dark'><MdSupportAgent style={{color:"green" , height:"40px", width:"40px"}}/>&nbsp;
                    <span>Customer Support</span></h2>
                </div>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default SpecialCare
