import React from 'react'

function Footer() {
  return (
    <section className="container-fluid footer_section ">
    <div className="top ">
     <span className='float-left'>Homestate.ke</span> 
     <span className='float-right'>Browse Listings</span>      
    </div>    
    {/* <hr  className="mt-0 mb-0"/> */}
    <div className="bottom pt-5">        
      <span className='float-left'>
        &copy; <span id="displayYear">2022</span>&nbsp;<a href="#">HomeKE</a>&nbsp; All Rights Reserved  
      </span>
      <span className='socials float-right'>
        <i className="bi bi-facebook p-2"></i> 
        <i className="bi bi-twitter p-2"></i>
        <i className="bi bi-github p-2"></i>
        <i className="bi bi-linkedin p-2"></i>
        <i className="bi bi-instagram p-2"></i>
        
        </span>
    </div>
  </section>
  )
}

export default Footer