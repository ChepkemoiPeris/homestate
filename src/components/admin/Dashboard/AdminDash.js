import React,{useEffect,useState} from "react";
import Dashboard from "./Dashboard"; 
import "./assets/css/bootstrap.min.css"  
import "./assets/css/light-bootstrap-dashboard.css?v=2.0.0"   
import sidebarimg from './assets/img/sidebar-5.jpg'   
import Table from "./Users/Table";
import Houses from "./Houses/Houses"
import Notifications from "./Notifications";
import Subscribers from "./Subscribers/Subscribers";
import Locations from "./Locations/Locations";
import Contact from "./Contact";
function AdminDash() {
    const [dispay,setDisplay] = useState(<Dashboard />)
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./assets/js/core/jquery.3.2.1.min.js";
    script.async = true;
    const script2 = document.createElement("script");
    script2.src =
      "./assets/js/core/popper.min.js";
    script2.async = true;
    const script3 = document.createElement("script");
    script3.src =
      "./assets/js/core/bootstrap.min.js";
    script3.async = true;
    const script4 = document.createElement("script");
    script4.src =
      "./assets/js/plugins/bootstrap-switch.js";
    script4.async = true;
    const script5 = document.createElement("script");
    script5.src =
      "./assets/js/plugins/chartist.min.js";
    script5.async = true;
    const script6 = document.createElement("script");
    script6.src =
      "./assets/js/plugins/bootstrap-notify.js";
    script6.async = true;
    const script7 = document.createElement("script");
    script7.src =
      "./assets/js/plugins/bootstrap-notify.js";
    script7.async = true;

    document.body.appendChild(script);
    document.body.appendChild(script2);
    document.body.appendChild(script3);
    document.body.appendChild(script4);
    document.body.appendChild(script5); 
    document.body.appendChild(script6); 
    document.body.appendChild(script7); 
    // $(document).ready(function () {
    //     demo.initDashboardPageCharts();
    //     demo.showNotification();
    // });
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
      document.body.removeChild(script4);
      document.body.removeChild(script5);
      document.body.removeChild(script6);
      document.body.removeChild(script7);
    };
  }, []); 
  const handleClick=(event)=>{
    event.preventDefault()
    let val = event.target.innerText   
    let el =""
    if(val== 'DASHBOARD'){
    el=document.getElementById('home')
    setDisplay(<Dashboard />)     
    }else if(val== 'HOUSES'){
        el=document.getElementById('houses')
        setDisplay(<Houses />)
    }else if(val== 'USERS'){
        el=document.getElementById('users')
        setDisplay(<Table />)
    }else if(val== 'SUBSCRIBERS'){
        el=document.getElementById('subscribers')
        setDisplay(<Subscribers />)
    }else if(val== 'CONTACT'){
        el=document.getElementById('contact')
        setDisplay(<Contact />)
    }else if(val=="NOTIFICATIONS"){
        el=document.getElementById('notifications')       
        setDisplay(<Notifications />)
    }else{
      el=document.getElementById('locations')
      setDisplay(<Locations />)
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
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    } 
    this.className += " active";
    //   var current = document.getElementsByClassName("active");  
    //  current[0].className = current[0].className.replace("active", "");
    //  this.className += " active";
    //   el.className="active"
      });
    }
    
 }
  return ( 
  <div className="wrapper admin"> 
     <div className="sidebar" data-image={sidebarimg} data-color="blue">  
     {/* Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red" */}

       
    <div className="sidebar-wrapper">
        <div className="logo">
            <a href={"/home"} className="simple-text">
                Home state
            </a>
        </div>
        <ul className="nav" id="myLists">
            <li className="nav-item active" id="home">
                <a className="nav-link " href={"/home"} onClick={handleClick} >
                    <i className="nc-icon nc-chart-pie-35"></i>
                    <p>Dashboard</p>
                </a>
            </li>            
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
            {/* <li >
                <a className="nav-link" href={"/icons"}>
                    <i className="nc-icon nc-atom"></i>
                    <p>Icons</p>
                </a>
            </li> */}
            <li className="nav-item" id="locations">
                <a className="nav-link" href={"/location"} onClick={handleClick}>
                    <i className="nc-icon nc-atom"></i>
                    <p>Location</p>
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
{dispay}
     </div>  
  );
}

export default AdminDash;

 