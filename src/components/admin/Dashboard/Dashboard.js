import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Sidebar from './Sidebar'

function Dashboard() {
     
  return (
    <div>    
<div className="wrapper">
         <div className="main-panel"> 
           <Nav />
           <div className="row text-light p-2">
        <div className="col-md-4 col-xl-3 ">
            <div className="card bg-c-blue order-card bg-primary">
                <div className="card-block">
                    <h6 className="m-b-20">Houses</h6>
                    <h2 className="text-right"><i className="fa fa-cart-plus f-left"></i><span>486</span></h2>
                    <p className="m-b-0 text-light">All houses <span className="f-right">351</span></p>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 col-xl-3 ">
            <div className="card bg-c-green order-card bg-success">
                <div className="card-block">
                    <h6 className="m-b-20">Users</h6>
                    <h2 className="text-right"><i className="nc-icon nc-circle-09  f-left"></i><span>486</span></h2>
                    <p className="m-b-0 text-light">Active users <span className="f-right">351</span></p>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 col-xl-3 ">
            <div className="card bg-c-yellow order-card bg-warning">
                <div className="card-block">
                    <h6 className="m-b-20">Locations</h6>   
                                    
                    <h2 className="text-right"><i className="nc-icon nc-compass-05 f-left"></i><span>486</span></h2>
                    <p className="m-b-0 text-light">Locations with houses <span className="f-right">351</span></p>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 col-xl-3 ">
            <div className="card bg-c-pink order-card bg-danger ">
                <div className="card-block">
                    <h6 className="m-b-20">Orders Received</h6>
                    <h2 className="text-right"><i className="fa fa-credit-card f-left"></i><span>486</span></h2>
                    <p className="m-b-0 text-light">Completed Orders<span className="f-right">351</span></p>
                </div>
            </div>
        </div>
	</div>
             <div className="content">
                 <div className="container-fluid">
                     
                     <div className="row">
                     <div className="col-md-6">
                             <div className="card  card-tasks">
                                 <div className="card-header ">
                                     <h4 className="card-title">New users</h4>
                                     <p className="card-category">Please approve</p>
                                 </div>
                                 <div className="card-body ">
                                     <div className="table-full-width">
                                         <table className="table">
                                             <tbody>
                                                 <tr>
                                                     <td>
                                                         <div className="form-check">
                                                             <label className="form-check-label">
                                                                 <input className="form-check-input" type="checkbox" value=""/>
                                                                 <span className="form-check-sign"></span>
                                                             </label>
                                                         </div>
                                                     </td>
                                                     <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                     <td className="td-actions text-right">
                                                         <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                                             <i className="fa fa-edit"></i>
                                                         </button>
                                                         <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                                             <i className="fa fa-times"></i>
                                                         </button>
                                                     </td>
                                                 </tr>
                                                 <tr>
                                                     <td>
                                                         <div className="form-check">
                                                             <label className="form-check-label">
                                                                 <input className="form-check-input" type="checkbox" value="" checked/>
                                                                 <span className="form-check-sign"></span>
                                                             </label>
                                                         </div>
                                                     </td>
                                                     <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                     <td className="td-actions text-right">
                                                         <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                                             <i className="fa fa-edit"></i>
                                                         </button>
                                                         <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                                             <i className="fa fa-times"></i>
                                                         </button>
                                                     </td>
                                                 </tr>
                                                 <tr>
                                                     <td>
                                                         <div className="form-check">
                                                             <label className="form-check-label">
                                                                 <input className="form-check-input" type="checkbox" value="" checked/>
                                                                 <span className="form-check-sign"></span>
                                                             </label>
                                                         </div>
                                                     </td>
                                                     <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                                     </td>
                                                     <td className="td-actions text-right">
                                                         <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                                             <i className="fa fa-edit"></i>
                                                         </button>
                                                         <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                                             <i className="fa fa-times"></i>
                                                         </button>
                                                     </td>
                                                 </tr>
                                                 <tr>
                                                     <td>
                                                         <div className="form-check">
                                                             <label className="form-check-label">
                                                                 <input className="form-check-input" type="checkbox" checked/>
                                                                 <span className="form-check-sign"></span>
                                                             </label>
                                                         </div>
                                                     </td>
                                                     <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                                     <td className="td-actions text-right">
                                                         <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                                             <i className="fa fa-edit"></i>
                                                         </button>
                                                         <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                                             <i className="fa fa-times"></i>
                                                         </button>
                                                     </td>
                                                 </tr>
                                                 <tr>
                                                     <td>
                                                         <div className="form-check">
                                                             <label className="form-check-label">
                                                                 <input className="form-check-input" type="checkbox" value=""/>
                                                                 <span className="form-check-sign"></span>
                                                             </label>
                                                         </div>
                                                     </td>
                                                     <td>Read "Following makes Medium better"</td>
                                                     <td className="td-actions text-right">
                                                         <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                                             <i className="fa fa-edit"></i>
                                                         </button>
                                                         <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                                             <i className="fa fa-times"></i>
                                                         </button>
                                                     </td>
                                                 </tr>
                                                 <tr>
                                                     <td>
                                                         <div className="form-check">
                                                             <label className="form-check-label">
                                                                 <input className="form-check-input" type="checkbox" value="" disabled/>
                                                                 <span className="form-check-sign"></span>
                                                             </label>
                                                         </div>
                                                     </td>
                                                     <td>Unfollow 5 enemies from twitter</td>
                                                     <td className="td-actions text-right">
                                                         <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                                             <i className="fa fa-edit"></i>
                                                         </button>
                                                         <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                                             <i className="fa fa-times"></i>
                                                         </button>
                                                     </td>
                                                 </tr>
                                             </tbody>
                                         </table>
                                     </div>
                                 </div>
                                 <div className="card-footer ">
                                     <hr/>
                                     <div className="stats">
                                         <i className="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-6">
                             <div className="card  card-tasks">
                                 <div className="card-header ">
                                     <h4 className="card-title">New Houses </h4>
                                     <p className="card-category">Please review</p>
                                 </div>
                                 <div className="card-body ">
                                     <div className="table-full-width">
                                         <table className="table">
                                             <tbody>
                                                 <tr>
                                                     <td>
                                                         <div className="form-check">
                                                             <label className="form-check-label">
                                                                 <input className="form-check-input" type="checkbox" value=""/>
                                                                 <span className="form-check-sign"></span>
                                                             </label>
                                                         </div>
                                                     </td>
                                                     <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                     <td className="td-actions text-right">
                                                         <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                                             <i className="fa fa-edit"></i>
                                                         </button>
                                                         <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                                             <i className="fa fa-times"></i>
                                                         </button>
                                                     </td>
                                                 </tr>
                                                 <tr>
                                                     <td>
                                                         <div className="form-check">
                                                             <label className="form-check-label">
                                                                 <input className="form-check-input" type="checkbox" value="" checked/>
                                                                 <span className="form-check-sign"></span>
                                                             </label>
                                                         </div>
                                                     </td>
                                                     <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                     <td className="td-actions text-right">
                                                         <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                                             <i className="fa fa-edit"></i>
                                                         </button>
                                                         <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                                             <i className="fa fa-times"></i>
                                                         </button>
                                                     </td>
                                                 </tr>
                                                 <tr>
                                                     <td>
                                                         <div className="form-check">
                                                             <label className="form-check-label">
                                                                 <input className="form-check-input" type="checkbox" value="" checked/>
                                                                 <span className="form-check-sign"></span>
                                                             </label>
                                                         </div>
                                                     </td>
                                                     <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                                     </td>
                                                     <td className="td-actions text-right">
                                                         <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                                             <i className="fa fa-edit"></i>
                                                         </button>
                                                         <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                                             <i className="fa fa-times"></i>
                                                         </button>
                                                     </td>
                                                 </tr>
                                                 <tr>
                                                     <td>
                                                         <div className="form-check">
                                                             <label className="form-check-label">
                                                                 <input className="form-check-input" type="checkbox" checked/>
                                                                 <span className="form-check-sign"></span>
                                                             </label>
                                                         </div>
                                                     </td>
                                                     <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                                     <td className="td-actions text-right">
                                                         <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                                             <i className="fa fa-edit"></i>
                                                         </button>
                                                         <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                                             <i className="fa fa-times"></i>
                                                         </button>
                                                     </td>
                                                 </tr>
                                                 <tr>
                                                     <td>
                                                         <div className="form-check">
                                                             <label className="form-check-label">
                                                                 <input className="form-check-input" type="checkbox" value=""/>
                                                                 <span className="form-check-sign"></span>
                                                             </label>
                                                         </div>
                                                     </td>
                                                     <td>Read "Following makes Medium better"</td>
                                                     <td className="td-actions text-right">
                                                         <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                                             <i className="fa fa-edit"></i>
                                                         </button>
                                                         <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                                             <i className="fa fa-times"></i>
                                                         </button>
                                                     </td>
                                                 </tr>
                                                 <tr>
                                                     <td>
                                                         <div className="form-check">
                                                             <label className="form-check-label">
                                                                 <input className="form-check-input" type="checkbox" value="" disabled/>
                                                                 <span className="form-check-sign"></span>
                                                             </label>
                                                         </div>
                                                     </td>
                                                     <td>Unfollow 5 enemies from twitter</td>
                                                     <td className="td-actions text-right">
                                                         <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                                             <i className="fa fa-edit"></i>
                                                         </button>
                                                         <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                                             <i className="fa fa-times"></i>
                                                         </button>
                                                     </td>
                                                 </tr>
                                             </tbody>
                                         </table>
                                     </div>
                                 </div>
                                 <div className="card-footer ">
                                     <hr/>
                                     <div className="stats">
                                         <i className="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
           <Footer />
         </div>
     </div> 
 </div> 
  )
}

export default Dashboard