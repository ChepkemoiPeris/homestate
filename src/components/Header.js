import React from 'react' 
 import image1 from './images/herobg3.jpg' 
function Header() {
  return (
    <div>      
    <div className="hero_area">
    <header className="header_section">
      <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-light">
  <a className="navbar-brand" href="#"><i className="bi bi-house-door-fill " style={{fontSize: 30,color:'#3554D1',alignItems:'center'}}></i></a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="collapsibleNavbar">
  
  <ul className="navbar-nav">
  <div className="User_option">
      <li className="nav-item"> 
        <a className="nav-link" href={"#"}> Browse Locations</a>
      </li> 
      <a href={"/register"} type="button" role="button" className="btn btn-outline-primary text-primary login-btn">Login/Sign up</a>       
      </div>
    </ul>  
  </div>  
</nav> 
      </div>
    </header> 
    <section className="slider_section ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 offset-md-1">
            <div className="detail-box">
              <h1>
                <span> Modern</span> <br/>
                Apartments <br/>
                Rent
              </h1>
              <p>
                An easy way to find CLASSY apartments for Rent in Nairobi
              </p>
              <div className="btn-box">
                <a href="" className="">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 offset-md-1">
          <div className='image-div float-right'>
         <img className="bg-image" src={image1} alt="bg image" width="550" height="300"/>
         </div>
         </div>
        </div>
      </div>
    </section> 
  </div>
    </div>
  )
}

export default Header