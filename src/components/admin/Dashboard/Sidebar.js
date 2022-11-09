import React,{useState} from 'react'
import sidebarimg from './assets/img/sidebar-5.jpg' 
function Sidebar() { 
 const handleClick=(event)=>{
    event.preventDefault()
    let val = event.target.innerText
    let el =""
    if(val== 'DASHBOARD'){
    el=document.getElementById('home')     
    }else if(val== 'HOUSES'){
        el=document.getElementById('houses')
    }else if(val== 'USERS'){
        el=document.getElementById('users')
    }else if(val== 'SUBSCRIBERS'){
        el=document.getElementById('subscribers')
    }else if(val== 'CONTACT'){
        el=document.getElementById('contact')
    }else {
        el=document.getElementById('contacts')
    } 
    // el.className="nav-item active"
    // el.classList.toggle("active");
//    let element =document.getElementsByTagName('li');
    // console.log(element);
    var header = document.getElementById("myLists");
    var list = header.getElementsByClassName("nav-item");    
    for (var i = 0; i < list.length; i++) {
      list[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");   
     current[0].className = current[0].className.replace("active", "");
     this.className += " active";
    //   el.className="active"
      });
    }
    
 }
  return (
    <div className='admin'>
    <div className="sidebar " data-image={sidebarimg} data-color="blue">  
    {/* Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red" */}

       
    <div className="sidebar-wrapper">
        <div className="logo">
            <a href={"/home"} className="simple-text">
                Home state
            </a>
        </div>
        <ul className="nav" id="myLists">
            <li className="nav-item active" id="home">
                <a className="nav-link active" href={"/home"} onClick={handleClick} >
                    <i className="nc-icon nc-chart-pie-35"></i>
                    <p>Dashboard</p>
                </a>
            </li>
            {/* <li className="nav-item active">
                <a className="nav-link" href={"/user"}>
                    <i className="nc-icon nc-circle-09"></i>
                    <p>User Profile</p>
                </a>
            </li> */}
            <li className="nav-item" id="houses">
                <a className="nav-link" href={"/houses"} onClick={handleClick} >
                <i className="nc-icon nc-bank"></i>
                    <p>Houses</p>
                </a>
            </li>
            <li className="nav-item" id="users">
                <a className="nav-link" href={"/users"} onClick={handleClick} >
                <i className="nc-icon nc-circle-09"></i>
                    <p>Users</p>
                </a>
            </li>
            <li className="nav-item" id="subscribers">
                <a className="nav-link" href={"/typography"} onClick={handleClick} >
                    <i className="nc-icon nc-email-85"></i>
                    <p>Subscribers</p>
                </a>
            </li>
            <li className="nav-item" id="contact">
                <a className="nav-link" href={"/typography"} onClick={handleClick} >
                    <i className="nc-icon nc-send"></i>
                    <p>Contact</p>
                </a>
            </li>
            {/* <li>
                <a className="nav-link" href={"/typography"}>
                    <i className="nc-icon nc-paper-2"></i>
                    <p>Typography</p>
                </a>
            </li> */}
            {/* <li >
                <a className="nav-link" href={"/icons"}>
                    <i className="nc-icon nc-atom"></i>
                    <p>Icons</p>
                </a>
            </li> */}
              <li className="nav-item" id="notifications">
                <a className="nav-link" href={"/locations"} onClick={handleClick}>
                    <i className="nc-icon nc-atom"></i>
                    <p>Locations</p>
                </a>
            </li>
            <li className="nav-item" id="notifications">
                <a className="nav-link" href={"/notifications"} onClick={handleClick}>
                    <i className="nc-icon nc-bell-55"></i>
                    <p>Notifications</p>
                </a>
            </li>
             
        </ul>
    </div>
</div>
</div>
  )
}

export default Sidebar