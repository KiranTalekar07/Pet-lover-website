import React from 'react'
import Button from 'react-bootstrap/Button';
import { MdOutlineAddHomeWork } from "react-icons/md";
function Cards(props) {
    console.log(props);
  return (
    <>
    <div className='card '>
    <MdOutlineAddHomeWork className='mt-4 mb-3' style={{color:"green", alignSelf:"center",height:"40px",width:"40px"}}/><br></br>
     <h3>{props.title}</h3>
     <p>Diem amet eos at no eos sit. 
        Iorem,amet rebum ipsum clita st ,diam
        sea est magna diam eos,rebum sit
        vero stet ipsum Justo</p>
       <Button variant='light' className='text-danger fw-bold'>Read More</Button>
    </div>
    </>
  )
}

export default Cards
