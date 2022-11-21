import React from 'react' 
import Footer from '../Footer' 
function Account({user}) {  
    let imagesrc = ""; 
    if (user) {
      imagesrc =
        "http://localhost:5000/rentals/image?file=" +
        user.image;
    }
  return ( 
    <div className="wrapper"> 
   <div className="main-panel">  
       <div className="content">
           <div className="container-fluid">
               <div className="row">
                   <div className="col-md-8">
                       <div className="card">
                           <div className="card-header">
                               <h4 className="card-title">Edit Profile</h4>
                           </div>
                           <div className="card-body">
                               <form>
                                   <div className="row"> 
                                       <div className="col-md-4 pl-1">
                                           <div className="form-group">
                                               <label htmlFor="exampleInputEmail1">Email address</label>
                                               <input type="email" className="form-control" placeholder="Email" value={user.email}/>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="row">
                                       <div className="col-md-6 pr-1">
                                           <div className="form-group">
                                               <label>First Name</label>
                                               <input type="text" className="form-control" placeholder="Company" value={user.first_name}/>
                                           </div>
                                       </div>
                                       <div className="col-md-6 pl-1">
                                           <div className="form-group">
                                               <label>Last Name</label>
                                               <input type="text" className="form-control" placeholder="Last Name" value={user.last_name}/>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="row">
                                       <div className="col-md-12">
                                           <div className="form-group">
                                               <label>Phone number</label>
                                               <input type="text" className="form-control" placeholder="Home Address" value={user.phone}/>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="row">
                                       <div className="col-md-4 pr-1">
                                        <div className="form-group">
                                          <label htmlFor="role">Role</label>
                                          <select className="form-control" name="role" id="role" value={user.role}> 
                                          <option value={user.role}>{user.role}</option>
                                            <option value="realtor">Realtor</option>
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                          </select>
                                        </div>
                                           
                                       </div>
                                       <div className="col-md-4 px-1">
                                            
                                           <div className="form-group">
                                          <label htmlFor="active">Active</label>
                                          <select className="form-control" name="active" id="active">
                                           {user.active == 1 ? <option value={user.active}>Yes</option>:<option value={user.active}>No</option>} 
                                            <option value='1'>Yes</option>
                                            <option value='0'>No</option> 
                                          </select>
                                        </div>
                                                
                                       </div>
                                       <div className="col-md-4 pl-1">
                                           <div className="form-group">
                                               <label>Verified</label>
                                               <select className="form-control" name="active" id="active">
                                            {/* <option value="">Select Role</option> */}
                                            <option>Yes</option>
                                            <option>No</option> 
                                          </select> 
                                           </div>
                                       </div>
                                   </div>
                                   

                                   <button type="submit" className="btn btn-info btn-fill pull-right">Update Profile</button> 
                                   <div className="clearfix"></div>
                               </form>
                           </div>
                       </div>
                   </div>
                   <div className="col-md-4">
                       <div className="card card-user">
                           <div className="card-image">
                               <img className="w-100" src={imagesrc} alt="..." height={300}/>
                           </div>
                           <div className="card-body">
                               <div className="author">
                                   <a href="#"> 
                                       <h5 className="title">{user.first_name} {user.last_name}</h5>
                                   </a>
                                   <p className="description">
                                      {user.email}
                                   </p>
                               </div>
                               <p className="description text-center">
                               <button type="submit" className="btn btn-info btn-fill pull-right">Change password</button> 
                               </p>
                           </div>
                           <hr/>
                           <div className="button-container mr-auto ml-auto">
                               <button href="#" className="btn btn-simple btn-link btn-icon">
                                   <i className="fa fa-facebook-square"></i>
                               </button>
                               <button href="#" className="btn btn-simple btn-link btn-icon">
                                   <i className="fa fa-twitter"></i>
                               </button>
                               <button href="#" className="btn btn-simple btn-link btn-icon">
                                   <i className="fa fa-google-plus-square"></i>
                               </button>
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

export default Account