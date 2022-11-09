import React, { useEffect, useState } from "react";
import "./style4.css";
import $ from "jquery";
import Dashboard from "./Dashboard";
import All from "./houses/All";
import Users from "./users/Users";
import image from "./image.png"
function Welcome() {
  const [display, setdisplay] = useState(<Dashboard />);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
    script.async = true;
    const script2 = document.createElement("script");
    script2.src =
      "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js";
    script2.async = true;
    document.body.appendChild(script);
    document.body.appendChild(script2);
    $(document).ready(function () {
      $("#sidebarCollapse").on("click", function () {
        $("#sidebar").toggleClass("active");
      });
    });
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  }, []);

  const handleClick = (event) => {
    let val = event.target.name;
    if (val == "all") {
      setdisplay(<All />);
    } else if (val == "per_location") {
      console.log("Per Location");
    } else if (val == "per_user") {
      console.log("Per User");
    } else if (val == "users") {
        setdisplay(<Users />);
    }
    console.log();
  };
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Bootstrap Sidebar</h3>
          <strong>BS</strong>
        </div>

        <ul className="list-unstyled components" style={{ color: "#aaa" }}>
          <li className="active p-2">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              role="button"
              name="home"
              onClick={handleClick}
            >
              <i className="fas fa-home"></i>
              Home
            </a>
          </li>
          <li className="p-2">
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fas fa-copy"></i>&nbsp; Houses
            </a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#" role="button" name="all" onClick={handleClick}>
                  All houses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  role="button"
                  name="per_location"
                  onClick={handleClick}
                >
                  Rentals per location
                </a>
              </li>
              <li>
                <a href="#" role="button" name="per_user" onClick={handleClick}>
                  Rentals per user
                </a>
              </li>
            </ul>
          </li>
          <li className="p-2">
            <a href="#" role="button" name="users" onClick={handleClick}>
              <i className="fa fa-users" aria-hidden="true"></i>&nbsp; Users
            </a>
          </li>
          <li className="p-2">
            <a href="#">
              <i className="fas fa-question"></i>
              FAQ
            </a>
          </li>
          <li className="p-2">
            <a href="#">
              <i className="fas fa-paper-plane"></i>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div id="content">       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="btn btn-info">
              <i className="fas fa-align-left"></i> 
            </button>
            <button
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-align-justify"></i>
            </button>

           <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start"> 
		<div class="navbar-nav ml-auto"> 		
			<a href="#" class="nav-item nav-link"><i class="fa fa-bell"></i><span>Notifications</span></a>
			<div class="nav-item dropdown">
				<a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle user-action"><img src={image} class="avatar" alt="Avatar"/> Antonio  <b class="caret"></b></a>
				<div class="dropdown-menu">
					<a href="#" class="dropdown-item"><i class="fa fa-user-o"></i> Profile</a>
					<a href="#" class="dropdown-item"><i class="fa fa-calendar-o"></i> Calendar</a>
					<a href="#" class="dropdown-item"><i class="fa fa-sliders"></i> Settings</a>
					<div class="divider dropdown-divider"></div>
					<a href="#" class="dropdown-item"><i class="material-icons">&#xE8AC;</i> Logout</a>
				</div>
			</div>
		</div>
	</div>
           
            </div>
         
        </nav>
        {display}
      </div>
    </div>
  );
}

export default Welcome;
