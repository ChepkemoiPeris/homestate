import React,{useEffect,useState} from 'react'
import './users.css'
import image from "../image.png" 
import axios from "axios"
function Users() {
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
    <div className="container-xl">
    <div className="table-responsive">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-5">
                        <h2>User <b>Management</b></h2>
                    </div>
                    <div className="col-sm-7">                        
                    <a href="/register" className="btn btn-secondary"><i className="fa fa-plus-circle text-secondary" aria-hidden="true"></i> Add New User</a>
                     <a href="#" className="btn btn-secondary"><i className="fa fa-download text-secondary" aria-hidden="true"></i> Export to Excel</a></div>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>	
                        <th>Email</th>						
                        <th>Date Created</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
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
                          console.log(imagesrc)
                        return(
                            <tr key={index }>
                            <td>{index +1 }</td>
                            <td><a href="#"><img src={image} className="avatar" width="30" height="10"alt="Avatar"/> {e.first_name} {e.last_name}</a></td>
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
            <div className="clearfix">
                <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul className="pagination">
                    <li className="page-item disabled"><a href="#">Previous</a></li>
                    <li className="page-item"><a href="#" className="page-link">1</a></li>
                    <li className="page-item"><a href="#" className="page-link">2</a></li>
                    <li className="page-item active"><a href="#" className="page-link">3</a></li>
                    <li className="page-item"><a href="#" className="page-link">4</a></li>
                    <li className="page-item"><a href="#" className="page-link">5</a></li>
                    <li className="page-item"><a href="#" className="page-link">Next</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default Users