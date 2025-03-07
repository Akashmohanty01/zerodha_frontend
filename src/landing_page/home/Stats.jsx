import React from 'react'

export default function Stats() {
  return (
    <div className='container p-3'>
   <div className="row">
  <div className="col-6 p-5">
<h1 className='fs-2 mb-5'>Trust with confidence</h1>
<h2 className='fs-4'>Customer-first always</h2>
<p className='text-muted'> That's ehy 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores 
  worth of equity investment </p>
<h2 className='fs-4'>NO spam or gimmicks</h2>
<p className='text-muted'>No gimmicks, spam,"gamification", or annoying push notification. 
  High quality apps that you use at your pace, the way you like</p>
  
  <h2 className='fs-4'>The Zerodha universe</h2>
  <p className='text-muted'> Not jus an app, but a whole ecosystem. Our investment in 30+ fintech startups offer you
    tailored services specific to your needs.
  </p>
  <h2 className='fs-4'>Do better with money</h2>
  <p className='text-muted'>With initiatives like Nudge and kill Switch, we dont just facilitate transactions, but actively help you do better with your money</p>
  </div>
  <div className="col-6 p-5">
    <img src="media/images/ecosystem.png"  style={{width:"90%"}} />
    <div className='text-center'>
      <a href="" className='mx-5'style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
      <a href="" style={{textDecoration:"none"}}>Try kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
    </div>
  </div>
   </div>
</div>
  )
}
