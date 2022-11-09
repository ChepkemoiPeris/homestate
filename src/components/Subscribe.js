import React from 'react' 
function Subscribe() {
  return ( 
    <section className="container-fluid footer_section subscribe ">
    <div>
      <div className='title'>
        <span id="displayYear"></span><h2>Stay updated </h2><br/>
         Subscribe if you want to be notified of new listings in your location
        </div>
       
       <form>
       <div className="form-group row form-sub"> 
          <div className='col-md-4 mb-5'>
          <label htmlFor="email"></label>
          <input type="email"
            className="form-control" name="" id="email" placeholder="Your email"/>           
           </div>
          <div className='col-md-4 mb-5'>
          <label htmlFor="location"></label>
          <input type="text"
            className="form-control" name="location" id="location" placeholder="Location"/>           
           </div> 
           <div className='col-md-4 mt-4'>  
           <input name="subscribe" id="" className="btn btn-outline-light text-light subscribeBtn" type="button" value="Subscribe"/>     
        </div>
        </div>
        </form>
      
    </div>
  </section>
  )
}

export default Subscribe