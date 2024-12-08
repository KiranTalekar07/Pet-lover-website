import React from 'react'
import { MdOutlineAddHomeWork } from "react-icons/md";
import { TbBoneOff } from "react-icons/tb";
import { LuScissorsSquareDashedBottom } from "react-icons/lu";
import { PiChalkboardTeacherBold } from "react-icons/pi";
function BookforYourPet() {
  return (
    <div>
      <p className='text-success fw-bold mt-5'>Going For a vacation?</p>
      <h1 className='h1 fw-bold '><span>Book For</span>&nbsp;<span style={{color:"orangered"}}>Your Pet</span></h1>
      <p>Lorem ipsum, a well-known placeholder text, has been adapted and used in various creative ways,
         including pet-related content.</p>
    
    <div className='boarding'>
      <div>
      <h2 className='fs-5 px-2'><MdOutlineAddHomeWork style={{color:"green"}}/>&nbsp;
      <span>Pet Boarding</span></h2>
      <p>Dam amet eos at no eos sit lorem,amet rebum ipsum clita stet.</p>
      </div>
      <div>
      <h2 className='fs-5 px-2'><TbBoneOff  style={{color:"green"}}/>&nbsp;
      <span>Pet Feeding</span></h2>
      <p>Dam amet eos at no eos sit lorem,amet rebum ipsum clita stet</p>
      </div>
      <div>
      <h2 className='fs-5 px-2'><LuScissorsSquareDashedBottom   style={{color:"green"}}/>&nbsp;
      <span>Pet Growming</span></h2>
      <p>Dam amet eos at no eos sit lorem,amet rebum ipsum clita stet</p>
      </div>
      <div>
      <h2 className='fs-5 px-2'><PiChalkboardTeacherBold   style={{color:"green"}}/>&nbsp;
      <span>Pet Tranning</span></h2>
      <p>Dam amet eos at no eos sit lorem,amet rebum ipsum clita stet</p>
      </div>
    </div>

    </div>
  )
}

export default BookforYourPet
