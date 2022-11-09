import React,{useEffect,useState} from 'react'
import Footer from '../Footer'
import Nav from '../Nav'
import Sidebar from '../Sidebar' 
import axios from "axios"
import image from "../assets/img/faces/face-3.jpg"
function Table() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            const {data: response} = await axios.get('http://localhost:5000/users/list');
            setUsers(response);
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
    
        fetchData();
      }, []);  
  return (
<div class="wrapper"> 
        <div class="main-panel"> 
            <Nav/>
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card strpied-tabled-with-hover">
                                <div class="card-header ">
                                    <h4 class="card-title">User Management</h4>
                                    <p class="card-category"> <div className="col-sm-7">                        
                    <a href="/register" className="btn btn-secondary p-1 m-1"><i className="fa fa-plus-circle text-secondary" aria-hidden="true"></i> Add New User</a>
                     <a href="#" className="btn btn-secondary p-1"><i className="fa fa-download text-secondary" aria-hidden="true"></i> Export to Excel</a></div></p>
                                </div>
                                <div class="card-body table-full-width table-responsive">
                                    <table class="table table-hover table-striped">
                                        <thead>
                                            <th>ID</th> 
                                            <th>Name</th>	
                                             <th>Email</th>						
                                            <th>Date Created</th>
                                             <th>Role</th>
                                        <th>Status</th>
                                          <th>Action</th>
                                        </thead>
                                        <tbody>
                    {(loading)? "Loading":
                    users.data.map((e,index)=>{
                        let abc = e.image
                        let upload =""
                        if(e.image){
                           upload =  abc.slice(2)
                        }
                        let imagesrc = 'http://localhost:5000/'+upload   
                        return(
                            <tr key={index }>
                            <td>{index +1 }</td>
                            <td><a href={"/user/"+e.id}><img src={image} className="avatar" width="30" height="10"alt="Avatar"/> {e.first_name} {e.last_name}</a></td>
                            <td>{e.email}</td>    
                            <td>0{e.date_created}</td>                        
                            <td>{e.role}</td>
                            <td><span className="status text-success"></span> {(e.active)? "Active" : "Inactive"}</td>
                            <td>
                               <a href="#" className="view p-1" title="View" data-toggle="tooltip"><i className="fa fa-eye text-success" aria-hidden="true"></i></a>
                                <a href="#" className="settings p-1" title="Settings" data-toggle="tooltip"><i className="fa fa-pencil text-warning" aria-hidden="true"></i></a>
                                <a href="#" className="delete " title="Delete" data-toggle="tooltip"><i className="fa fa-trash text-danger" aria-hidden="true"></i></a>
                            </td>
                        </tr>
                        )
                    })
                    }
                  
                    
                </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                   
                    </div>
                </div>
            </div>
           <Footer />
        </div>
    </div>
  )
}

export default Table