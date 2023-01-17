import React,{useEffect} from 'react'

function HouseMoreDetails({house}) {
    let house_data;
    useEffect(() => {
       
        if(house){
         if(typeof(house) != "undefined"){ 
            house_data =house
          }
        }
    }, []) 
    
  return (
    <div>
             <div className="row">
            <div className="col-sm-8 col-md-9 col-lg-9 text-left">
              <h3 className="card-title" style={{ fontWeight: "bold" }}>
                {house.name}
              </h3>
              <h6 className="text-dark">
                {" "}
                {house.loc_name}, {house.sub_name}
              </h6>
            </div>
          </div>
          
          <div
            className="mb-2"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <div className="card-body">
              <button type="button" className="btn btn-outline-secondary">
               {house.bedrooms}
              </button>
              <p className="card-text">{house.location_details}</p>
              <p className="card-text">{house.description}</p>
              <div className="list-group">
                <a className="list-group-item list-group-item-action ">
                  Water: &nbsp;&nbsp;&nbsp;
                  <span className="text-primary">{house.water}</span>
                </a>
                <a className="list-group-item list-group-item-action">
                  Parking:&nbsp;&nbsp;&nbsp;
                  <span className="text-primary">
                  {house.parking}
                  </span>
                </a>
                <a className="list-group-item list-group-item-action ">
                  Internet: &nbsp;&nbsp;&nbsp;
                  <span className="text-primary">{house.internet}</span>
                </a>
                <a className="list-group-item list-group-item-action ">
                  Electricity: &nbsp;&nbsp;&nbsp;
                  <span className="text-primary">{house.electricity}</span>
                </a>
              </div>
              <br />
              <p style={{ color: "#aaa" }}>REALTOR DETAILS</p>
              Name:{" "}
              <p>
              {house.first_name} , {house.last_name}
              </p>
              Email: <p>{house.email}</p>
              <a href="#" className="btn btn-primary btn-small">
                Contact Now
              </a>
            </div>
          </div>
        </div>
  )
}

export default HouseMoreDetails