import React from 'react'

function Realtor() {
  return (
    <div className="wrapper">
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
                <a className="nav-link active" href={"/home"} onClick={handleClick} >
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
            <li >
                <a className="nav-link" href={"/icons"}>
                    <i className="nc-icon nc-atom"></i>
                    <p>Icons</p>
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

export default Realtor