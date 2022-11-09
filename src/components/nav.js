import React from 'react' 
function Nav() {
  return (
    <section className='nav-bar'>
  <nav className="navbar navbar-expand-md bg-light navbar-light">
  <a className="navbar-brand" href="#"><i className="bi bi-house-door-fill " style={{fontSize: 30,color:'#3554D1',alignItems:'center'}}></i></a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="collapsibleNavbar">
  <ul className="navbar-nav">
  <div className="User_option ">
      <li className="nav-item">
        <a className="nav-link" href="#"> Browse Locations</a>
      </li>
      <button type="submit" className="btn btn-outline-primary text-primary">Login/Sign up</button>
      </div>
    </ul>   
  </div>  
</nav>
   </section>
  )
}

export default Nav
