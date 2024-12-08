import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './img/carousel-1.jpg';
import img2 from './img/carousel-2.jpg';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={img1} alt="" style={{width:"100%", height:"auto"}}/>
        <Carousel.Caption>
          <h3>Best Pet Services</h3>
          <h2 className='fw-bolder spa'>PET SPA AND GROOMING</h2>
          <p className='pet-desc'>Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor</p>
          <span className='d-flex justify-content-center gap-3'>
          <Button variant="danger p-2">Book Now</Button>
           <Button variant="success p-2">Learn More</Button>
           </span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={img2} alt="" style={{width:"100%", height:"auto"}}/>
        <Carousel.Caption>
          <h3>Best Pet Services</h3>
          <h2 className='fw-bolder spa'>PET SPA AND GROOMING</h2>
          <p className='pet-desc'>Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor</p>
          <span className='d-flex justify-content-center gap-3'>
          <Button variant="danger p-2">Book Now</Button>
           <Button variant="success p-2">Learn More</Button>
           </span>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default IndividualIntervalsExample;