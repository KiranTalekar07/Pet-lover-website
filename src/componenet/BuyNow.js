import React from 'react'
import Cards2 from './Cards2'

function BuyNow() {
  return (
    <div className='mt-5'>
      <h4 className='text-success' style={{textAlign:"center"}}>Pricing Plan</h4>
      <h1 className='fw-bold' style={{textAlign:"center",fontSize:"50px"}}><span>Choose the</span>&nbsp; <span className='text-danger'>Best Price</span></h1>

      <div className='pricingplan'>
       <Cards2/>
       <Cards2/>
       <Cards2/>
      </div>
    </div>
  )
}

export default BuyNow
