import React from 'react'

export default function Brokerage() {
  return (
    <div className="container ">
      <div className="row  p-5 mt-5 text-center border-top" >
      <div className="col-8 p-5">
       <a href="" style={{textDecoration:"none"}}><h3 className='fs-2 mb-4'>Brokerage Calculator</h3></a>
       <ul style={{textAlign:"left",lineHeight:"1.8",fontSize:"12px"}} className='text-muted'>
        <li>Call and trade and RMS  auto-squaree:Additional charges of ₹50 + GST per order</li>
        <li>Digital contract notes will be sent vai e-mail.</li>
        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Couries charges apply.</li>
        <li>For NRI account (non-PIS),0.5% or ₹ 100 per excuted order for equity (whichever is lower).</li>
        <li>for NRI account (PIS) 0.5% or ₹200 per executed order for equity (whichover is lower)</li>
        <li>if the account is in debit balance, any order placed will be changed ₹40 per execued instead or ₹20 per executed order</li>
       </ul>
      </div>
      <div className="col-4 p-5">
      <a href="" style={{textDecoration:"none"}}><h3 className='fs-5<a href="">'>List of Charges</h3></a>
      </div>
    </div>
  </div>
  )
}
