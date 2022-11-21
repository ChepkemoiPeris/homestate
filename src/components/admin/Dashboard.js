import React,{useEffect,useState} from 'react'
import axios from 'axios'

function Dashboard() {
    const [loading,setLoading] = useState(true)
    const [houses, setHouses] = useState([])
    const [users, setUsers] = useState([])
    const [realtors, setRealtors] = useState([])
    const [subscribers, setSubscribers] = useState([])
    useEffect(() => {
        const fetchData = async()=>{
            setLoading(true)
            const resusers = await axios.get('http://localhost:5000/users/list')
            const reshouses = await axios.get('http://localhost:5000/rentals/list')
            const ressubscribers = await axios.get('http://localhost:5000/subscribers/list') 
            setUsers(resusers.data.data)
            setHouses(reshouses.data.data)
            setSubscribers(ressubscribers.data.data)
            setLoading(false)
        }
        fetchData()
    }, [])
     
    let userscount =  0
    let realtorscount =  0
    let housecount =  0
     let subcount =  0
     let active_users = 0
     let vacant = 0
     let active_realtors =0
    if(!loading){
      userscount = users.length 
      housecount = houses.length
      subcount = subscribers.length
      let realtor = users.filter((e)=>e.role == "realtor")
      let active = users.filter((e)=>e.active == 1)
      let vacant_houses = houses.filter((e)=>e.vacant != 0)
      vacant = vacant_houses.length
      active_users= active.length
      let realtors_active = realtor.filter((e)=>e.active==1) 
      active_realtors = realtors_active.length
      realtorscount = realtor.length 
    }
   
  return (
    <div className="container">
        <h2>Dashboard</h2>
        {/* <h5>Welcome Peris, Here is the summary </h5> */}
    <div className="row text-light">
        <div className="col-md-4 col-xl-3 mb-1">
            <div className="card bg-c-blue order-card bg-primary">
                <div className="card-block">
                    <h6 className="m-b-20">Users</h6>
                    <h2 className="text-right"><i className="fa fa-cart-plus f-left"></i><span> {userscount}</span></h2>
                    <p className="m-b-0 text-light">Active Users<span className="f-right"> {active_users}</span></p>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 col-xl-3 mb-1">
            <div className="card bg-c-green order-card bg-success">
                <div className="card-block">
                    <h6 className="m-b-20">Houses</h6>
                    <h2 className="text-right"><i className="fa fa-rocket f-left"></i><span> {housecount}</span></h2>
                    <p className="m-b-0 text-light">Vacant houses<span className="f-right"> {vacant}</span></p>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 col-xl-3 mb-1">
            <div className="card bg-c-yellow order-card bg-warning">
                <div className="card-block">
                    <h6 className="m-b-20">Subscribers</h6>
                    <h2 className="text-right"><i className="fa fa-refresh f-left"></i><span>{subcount}</span></h2>
                    <p className="m-b-0 text-light">Subscribers<span className="f-right"> {subcount}</span></p>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 col-xl-3 mb-1">
            <div className="card bg-c-pink order-card bg-danger ">
                <div className="card-block">
                    <h6 className="m-b-20">Realtors</h6>
                    <h2 className="text-right"><i className="fa fa-credit-card f-left"></i><span> {realtorscount}</span></h2>
                    <p className="m-b-0 text-light">Active Realtors<span className="f-right"> {active_realtors}</span></p>
                </div>
            </div>
        </div>
	</div>
    <div className="row mt-3">
                     <div className="col-md-6">
                             <div className="card  card-tasks">
                                 <div className="card-header ">
                                     <h4 className="card-title">New Realtors</h4>
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
                                                                 <input className="form-check-input" type="checkbox" value="" />
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
                                                                 <input className="form-check-input" type="checkbox" value="" />
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
                                                                 <input className="form-check-input" type="checkbox" />
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
                                                                 <input className="form-check-input" type="checkbox" value="" />
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
                                                                 <input className="form-check-input" type="checkbox" value="" />
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
                                                                 <input className="form-check-input" type="checkbox" />
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
  )
}

export default Dashboard