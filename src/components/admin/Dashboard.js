import React, { useEffect, useState } from "react";
import axios from "axios";
// import HouseMoreDetails from "./HouseMoreDetails";
function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [houses, setHouses] = useState([]);
  const [users, setUsers] = useState([]);
  const [realtors, setRealtors] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [realtorReq, setRealtorReq] = useState([]);
  const [house_id, setHouseId] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resusers = await axios.get("http://localhost:5000/users/list");
      const reshouses = await axios.get("http://localhost:5000/rentals/list");
      const ressubscribers = await axios.get(
        "http://localhost:5000/subscribers/list"
      );
      const resrealtor = await axios.get("http://localhost:5000/realtors/list");
      setRealtorReq(resrealtor.data.data);
      setUsers(resusers.data.data);
      setHouses(reshouses.data.data);
      setSubscribers(ressubscribers.data.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  let userscount = 0;
  let realtorscount = 0;
  let housecount = 0;
  let subcount = 0;
  let active_users = 0;
  let vacant = 0;
  let active_realtors = 0;
  if (!loading) {
    userscount = users.length;
    housecount = houses.length;
    subcount = subscribers.length;
    let realtor = users.filter((e) => e.role == "realtor");
    let active = users.filter((e) => e.active == 1);
    let vacant_houses = houses.filter((e) => e.vacant != 0);
    vacant = vacant_houses.length;
    active_users = active.length;
    let realtors_active = realtor.filter((e) => e.active == 1);
    active_realtors = realtors_active.length;
    realtorscount = realtor.length;
  }
  
  const imagePerRow = 4;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreHouses = (event) => {
    event.preventDefault();
    setNext(next + imagePerRow);
  }; 
const approveRealtor = ()=>{
    console.log("approve")
}
const rejectHouse = ()=>{
  console.log("rejecthouse")
}

const approveHouse = (e)=>{
  console.log(e.target)
  let house_id = e.target.id
   let res = axios.put('http://localhost:5000/rental/update/'+house_id)
   console.log(res)
   if(res.data.status == 'success'){
    window.location.reload();
   }
}
const rejectRealtor = ()=>{
    console.log("reject")
}
const viewRealtor = (e)=>{
    e.preventDefault() 
}
const houseDetails =(e,name)=>{
    e.preventDefault()
    let id = e.target.id 
    setHouseId(name) 
    if(!loading){
        let element = document.querySelector("approval")
        element.style.display = "none"
        let el = document.querySelector("details")
        el.style.display = "block"
    }
   
}
let inactive;
if(houses){
inactive = houses.filter(e=>e.reviewed ==0)
}
  
  return (
    <div className="container">
      <h2>Dashboard</h2> 
      <div className="row text-light">
        <div className="col-md-4 col-xl-3 mb-1">
          <div className="card bg-c-blue order-card bg-primary">
            <div className="card-block">
              <h6 className="m-b-20">Users</h6>
              <h2 className="text-right">
                <i className="fa fa-cart-plus f-left"></i>
                <span> {userscount}</span>
              </h2>
              <p className="m-b-0 text-light">
                Active Users<span className="f-right"> {active_users}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3 mb-1">
          <div className="card bg-c-green order-card bg-success">
            <div className="card-block">
              <h6 className="m-b-20">Houses</h6>
              <h2 className="text-right">
                <i className="fa fa-rocket f-left"></i>
                <span> {housecount}</span>
              </h2>
              <p className="m-b-0 text-light">
                Vacant houses<span className="f-right"> {vacant}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3 mb-1">
          <div className="card bg-c-yellow order-card bg-warning">
            <div className="card-block">
              <h6 className="m-b-20">Subscribers</h6>
              <h2 className="text-right">
                <i className="fa fa-refresh f-left"></i>
                <span>{subcount}</span>
              </h2>
              <p className="m-b-0 text-light">
                Subscribers<span className="f-right"> {subcount}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3 mb-1">
          <div className="card bg-c-pink order-card bg-danger ">
            <div className="card-block">
              <h6 className="m-b-20">Realtors</h6>
              <h2 className="text-right">
                <i className="fa fa-credit-card f-left"></i>
                <span> {realtorscount}</span>
              </h2>
              <p className="m-b-0 text-light">
                Active Realtors
                <span className="f-right"> {active_realtors}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 approval">
        <div className="col-md-6 " >
          <div className="card  card-tasks">
            <div className="card-header ">
              <h4 className="card-title">New Realtor Requests</h4>
              <p className="card-category">Please approve</p>
            </div>
            <div className="card-body ">
              <div className="table-full-width">
                <table className="table">
                  <tbody>
                  {(!realtorReq) ? "No requests" : realtorReq.map((e, index) => { 
                        return (
                            <tr key={index}>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span className="form-check-sign"></span>
                                </label>
                              </div>
                            </td>
                            <td>
                             Realtor request from {e.first_name} {e.last_name} <a href="#" onClick={viewRealtor}>more details?</a>
                            </td>
                            <td className="td-actions text-right">
                            <span className="mt-5"
                                style={{ overflow: "auto", whiteSpace: "nowrap" }}
                              >
                              <button
                                type="button"
                                rel="tooltip"
                                title="Approve"
                                className="btn btn-info btn-simple btn-link mr-2"
                                onClick={approveRealtor}
                              >
                                 <i className="fas fa-check text-success"></i>
                              </button>
                              <button
                                type="button"
                                rel="tooltip"
                                title="Reject"
                                className="btn btn-danger btn-simple btn-link"
                                onClick={rejectRealtor}
                              >
                             <i className="fa fa-times text-danger"></i>
                              </button>
                              </span>
                            </td>
                          </tr>
                        )
                      })} 
                  
                  </tbody>
                </table>
              </div>
            </div> 
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="card  card-tasks">
            <div className="card-header ">
              <h4 className="card-title">New Houses </h4>
              <p className="card-category">Please review</p>
            </div>
            <div className="card-body ">
              <div className="table-full-width">
                <table className="table">
                  <tbody>
                  {(!inactive) ? "No requests" : inactive.slice(0, next)?.map((e, index) => {  
                        return (
                            <tr key={index}>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span className="form-check-sign"></span>
                                </label>
                              </div>
                            </td>
                            <td>
                             House posted by realtor {e.first_name} {e.last_name} it's in {e.loc_name} <a href="#" id={e.id} onClick={(event) => houseDetails(event,e)}>more details?</a>
                            </td>
                            <td className="td-actions text-right">
                            <span className="mt-5"
                                style={{ overflow: "auto", whiteSpace: "nowrap" }}
                              >
                              <button
                                type="button"
                                rel="tooltip"
                                title="Approve"
                                className="btn btn-info btn-simple btn-link mr-2"
                                onClick={approveHouse}
                              >
                                 <i id= {e.id} className="fas fa-check text-success"></i>
                              </button>
                              <button
                                type="button"
                                rel="tooltip"
                                title="Reject"
                                className="btn btn-danger btn-simple btn-link"
                                onClick={rejectHouse}
                              >
                             <i className="fa fa-times text-danger"></i>
                              </button>
                              </span>
                            </td>
                          </tr>
                        )
                      })} 
                  
                  </tbody>
                 
                </table>
                {
                (inactive.length > imagePerRow) ?  
                  <div className="btn-box text-center">
                <a href="#" className="btn btn-primary" onClick={handleMoreHouses}>
                  Load More
                </a>
              </div>
               : <div className="btn-box" style={{display:"none"}}>
               <a href="#" className="btn btn-primary" onClick={handleMoreHouses}>
                 Load More
               </a>
             </div>
              }
              </div>
            </div> 
           
          </div>
        </div>
      </div> 
      {/* <div className="details" style={{display:"none"}}>
     <HouseMoreDetails house={house_id}/>
      </div> */}
     
    </div>
  );
}

export default Dashboard;
