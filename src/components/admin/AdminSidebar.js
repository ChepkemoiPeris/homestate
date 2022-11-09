import React,{useEffect} from "react";
import "./style4.css"
import $ from "jquery";
function AdminSidebar() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
    script.async = true;
    const script2 = document.createElement('script');
    script2.src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js";
    script2.async = true;
    document.body.appendChild(script);
    document.body.appendChild(script2); 
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  })
  return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    }
  }, []);
  return (
    <div className="wrapper"> 
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Bootstrap Sidebar</h3>
                <strong>BS</strong>
            </div>

            <ul className="list-unstyled components" style={{color:"#aaa"}}>
                <li className="active p-2">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"  >
                        <i className="fas fa-home"></i>
                        Home
                    </a>
                    {/* <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul> */}
                </li>
                <li className="p-2">                     
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        <i className="fas fa-copy"></i>&nbsp;
                        Houses
                    </a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="/all">All houses</a>
                        </li>
                        <li>
                            <a href="#">Rentals per location</a>
                        </li>
                        <li>
                            <a href="#">Rentals per location</a>
                        </li>
                       
                    </ul>
                </li>
                <li className="p-2">
                    <a href="#">
                    <i className="fa fa-users" aria-hidden="true"></i>&nbsp;
                        Users
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
                        <span>Toggle Sidebar</span>
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>             

             </div>
    </div>
  );
}

export default AdminSidebar;
