import React, { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import Dashboard from "./Dashboard"; 
import Table from "./users/Table";
import Houses from "./houses/Houses"
import Notifications from "./Notifications";
import Subscribers from "./Subscribers/Subscribers";
import Locations from "./Locations/Locations";
import Contact from "./Contact";
import Account from "./users/Account";
import ChangePassword from "./users/ChangePassword"; 
import "./dist/css/bootstrap.min.css"
import User from "./UserDashboard";
import Reports from "./Reports";
function Welcome({details}) { 
  const navigate = useNavigate();
  const [user,setUser] = useState()
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");  
    const token = localStorage.getItem("token"); 
    if(loggedInUser) {
      const foundUser = JSON.parse(loggedInUser); 
      setUser(foundUser) 
    }   
  }, []);
  let imagesrc = ""; 
  let f_name =""
  let role=""
  let user_id=""
  if (user) {
    f_name= user.first_name
    user_id= user.id
    imagesrc =
      "http://localhost:5000/rentals/image?file=" +
      user.image;
   role = user.role
   
  }
  const [display,setDisplay] = useState(<Dashboard />) 
  if(role == "user"){
    let hide = document.querySelector('.flex-column')
    let show = document.querySelector('.user-dashboard')
    hide.style.display = "none"
    show.style.display ="block" 
    let dash = document.querySelector('.dashboard')
    let user = document.querySelector('.user')
    dash.style.display = "none"
    user.style.display ="block" 
  }
  const handleClick=(event)=>{
    event.preventDefault()
    let val = event.target.innerText    
    let el =""
    if(val== 'Dashboard'){
    el=document.getElementById('home')
    setDisplay(<Dashboard />)     
    }else if(val== 'Houses'){
        el=document.getElementById('houses')
        setDisplay(<Houses />)
    }else if(val== 'Users'){
        el=document.getElementById('users')
        setDisplay(<Table />)
    }else if(val== 'Subscribers'){
        el=document.getElementById('subscribers')
        setDisplay(<Subscribers />)
    }else if(val== 'Contact'){
        el=document.getElementById('contact')
        setDisplay(<Contact />)
    }else if(val== 'Notifications '){ 
      console.log("val")
        el=document.getElementById('notifications')       
        setDisplay(<Notifications id={user_id}/>)
    }else if(val=="Locations"){
      el=document.getElementById('locations')
      setDisplay(<Locations />)
    }else if(val=="Reports"){
      setDisplay(<Reports />)
    } 
  }
  const editAccount =(e)=>{
    e.preventDefault()
    setDisplay(<Account user={user}/>)
  }
  const changePassword =(e)=>{
    e.preventDefault()
    setDisplay(<ChangePassword user={user.id}/>)
  }
  const handleLogout = (e) => {
    e.preventDefault()  
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="container-fluid ml-3 p-5">    
       <nav className="navbar navbar-expand-lg navbar-light fixed-top flex-md-nowrap p-0 shadow"  style={{backgroundColor: "#eee"}}>
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#" style={{
          paddingTop: ".75rem",
          paddingBottom: ".75rem",
          fontSize: "25px", 
          color:"#007BFF",
          fontWeight:"600"
      }}>Homestate 
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">   
  <div className="input-group">
                <span
                  className="form-control-feedback"
                  style={{
                    position: "absolute",
                    zIndex: "2",
                    display: "block",
                    width: "45px",
                    height: "45px",
                    lineHeight: "2.375rem",
                    marginTop: "3px",
                    textAlign: "center",
                    pointerEvents: "inherit",
                    color: "#aaa",
                  }}
                >
                  {" "}
                  <i className="fa fa-search fa-lg"></i>{" "}
                </span>
                <input
                  type="text"
                  style={{ borderRadius: "10px", paddingLeft: "2.375rem" }}
                 
                  className="form-control"
                  placeholder="Type here..."
                />
              </div>  
    
      <ul className="navbar-nav pl-4 ml-4">
      <i className="far fa-bell pr-4 pt-3  " style={{fontSize:"25px",position: "relative"}}>
      <span className="badge mr-3 mt-2 badge-danger" style={{position: "absolute",
  top: "-10px",
  right: "-10px",
  padding: "5px 8px",
  borderRadius: "50%", 
  fontSize:"12px" }}>3</span>
        </i>
      {/* <h5 className="pt-3 text-primary">{f_name}</h5> */}
        <li className="nav-item dropdown mr-5">
        <a className="nav-link dropdown-toggle pr-5 pt-3" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src={imagesrc} width="30" height="30" className="rounded-circle"/>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Profile</a>
          <a className="dropdown-item" href="#" onClick={editAccount}>Edit Profile</a>
          <a className="dropdown-item" href="#" onClick={changePassword}>Change Password</a>
          <a className="dropdown-item" href="#" onClick={handleLogout}>Log Out</a>
        </div>
      </li>   
    </ul>
      
  </div>
      
    </nav>
  
    <div>
      
      <div className="row">
        <nav className="d-md-block bg-light sidebar" style={{
          
          position: "fixed",
          top:"0",
          bottom: "0",
          left: "0",
          zIndex: "100",
          padding: "48px 0 0",
          boxShadow: "inset -1px 0 0 rgba(0, 0, 0, .1)"
        }}>
          <div className="sidebar-sticky" style={{ 
             position: "relative",
             top: "0",
             height: "calc(100vh - 48px)",
             paddingTop:".5rem",
             overflowX: "auto",
             overflowY: "auto"
          }}>
            <ul className="nav user-dashboard" style={{display:"none"}}> 
            <li className="nav-item p-1">
              <a className="nav-link active" style={{ color: "#333"}} href="#">
              <i className="fas fa-home pr-2">  <span className="sr-only">Dashboard</span></i>
               <span className="nav-name">Dashboard</span>   
              </a>
            </li>
            </ul>
            <ul className="nav flex-column " style={{display:"block"}}>
            
              <li className="nav-item p-1">
                <a className="nav-link active" style={{ color: "#333"}} href="#" onClick={handleClick}>
                <i className="fas fa-home pr-2">  <span className="sr-only">Dashboard</span></i>
                 <span className="nav-name">Dashboard</span>   
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#" style={{color: "#333"}} onClick={handleClick}>
                <i className="fas fa-house-user pr-2"><span className="sr-only">Houses</span></i>
                <span className="nav-name">Houses</span>   
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#" style={{color: "#333"}} onClick={handleClick}>
                <i className="fas fa-user pr-2"><span className="sr-only">Users</span></i>
                <span className="nav-name">Users </span> 
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#" style={{color: "#333"}} onClick={handleClick}>
                <i className="fas fa-users pr-2"><span className="sr-only">Subscribers</span></i>
                <span className="nav-name">Subscribers </span> 
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#" style={{color: "#333"}} onClick={handleClick}>
                <i className="fas fa-location-arrow pr-2"><span className="sr-only">Locations</span></i>
                <span className="nav-name">Locations </span>   
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#" style={{color: "#333"}} onClick={handleClick}>
                <i className="far fa-bell pr-2"><span className="sr-only">Notifications</span></i> 
                <span className="nav-name">Notifications </span>   
                <span className="badge badge-danger">4</span>
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#" style={{color: "#333"}} onClick={handleClick}>
                <i className="fas fa-comments pr-2"><span className="sr-only">Contact</span></i>
                <span className="nav-name">Contact </span>       
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#" style={{color: "#333"}} onClick={handleClick}>
                <i className="fas fa-file-alt pr-2"><span className="sr-only">Reports</span></i>
                <span className="nav-name">Reports </span>        
                </a>
              </li>
            
            </ul> 
          </div>
        </nav>  
      </div>
      <div className="col-md-9 col-lg-10 mr-4 pt-5 dashboard" style={{marginLeft:"100px",display:"block"}} >
         {display}
     </div> 
   <div className="col-md-9 col-lg-10 mr-4 pt-5 user" style={{marginLeft:"100px",display:"none"}}>
        <User id={user_id}/>
     </div>   
    </div>
     </div>
  )
}

export default Welcome;
