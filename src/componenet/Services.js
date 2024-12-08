import React from 'react'
import Cards from './Cards'

function Services() {
  return (
   <div  className='bg-secondary-subtle Container-fluid '>
       
      <h5 className=' text-success fw-bold mt-5 ' style={{textAlign:"center"}}>Our Services</h5>
      <h1 style={{textAlign:"center"}} className='fw-bold'><span className='text-danger '>Premium</span>&nbsp;<span>Pet Services</span></h1>
      <div className='Cardcomp'>
      <Cards title="Pet Bording"/>
      <Cards title="Pet Feeding"/>
      <Cards title="Pet Growming"/>
      <Cards title="Pet Tranning"/>
      <Cards title="Pet Exercise"/>
      <Cards title="Pet Treatment"/>


      </div>
    </div>
    
  )
}

export default Services
