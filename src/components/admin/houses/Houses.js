import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer";
import Welcome from "../Welcome";
import AddHouse from "./AddHouse";
import UploadMoreImages from "./UploadMoreImages";
import Manage from "./Manage";
function Houses() {
  const [loading, setLoading] = useState(true);
  const [houses, setHouses] = useState([]);
  const [house_id,setHouseId] = useState()
  const user = JSON.parse(localStorage.getItem("user"));
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:5000/rentals/list"
        );
        setHouses(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  const imagePerRow = 6;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreHouses = (event) => {
    event.preventDefault();
    setNext(next + imagePerRow);
  };
  const handleClick = (e) => {
    e.preventDefault(); 
    let display =document.getElementById("all")
    let reg = document.getElementById("add")
    display.style.display ="none"
    reg.style.display ="block"
  };

  const handleManage = (e)=>{ 
    let data = houses.data.filter((el)=>el.id == e.target.id)
    setHouseId(data[0]) 
  let manage = document.getElementById("manage")
  let displayed = document.getElementById("all")   
  displayed.style.display ="none"
  manage.style.display ="block"
  }
  return (
    <div>
      <div id="all" className="all" style={{display:"block"}}>
      <div className="row">
        <h4 className="mt-2" style={{ paddingRight: "50px",paddingLeft:"30px" }}>
          Houses{" "}
        </h4>
        <span className="">
          <a
            href={"/houses/add/" + user.id}
            className="btn btn-primary m-1"
            onClick={handleClick}
          >
            <i className="fa fa-plus-circle text-secondary"></i>
            Add House
          </a>
        </span>
      </div>
 
      <div className="card-group">
        {loading ? (
          "Loading..."
        ) : houses.data.length == 0 ? (
          <h1>No houses to display</h1>
        ) : (
          houses.data.slice(0, next)?.map((e, index) => {
             
            let imagesrc = "";
            if (e.image) {
              imagesrc = "http://localhost:5000/rentals/image?file=" + e.image;
            }
            return (
              <div className="col-md-4 col-sm-12 mb-2 d-flex" key={index}>
                <div className="card ">
                  <img
                    src={imagesrc}
                    alt={e.name}
                    style={{
                      width: "100%",
                      height: "15vw",
                      objectFit: "cover",
                    }}
                    className="card-img-top nearby"
                  />
                  <div className="card-img-overlay" style={{ height: "100px" }}>
                    <button
                      className="text-primary float-right"
                      style={{ border: "none", borderRadius: "12px" }}
                    >
                      {e.bedrooms}
                    </button>
                  </div>
                  <div className="card-body ">
                    <h5 className="card-title">{e.name}</h5>
                    <p className="card-text">{e.description}</p>
                    {/* <a
                      role="button"
                      className="btn mr-2 text-primary"
                      id={e.id}
                      onClick={Manage}
                    >
                     <i class="fa fa-cog" aria-hidden="true"></i> Manage
                    </a> */}
                    <button type="button" class="btn btn-outline-primary" id={e.id} onClick={handleManage}><i class="fa fa-cog" aria-hidden="true"></i>Manage</button>
                    {/* <button type="button" className="btn btn-outline-primary" onClick={handleImages} id={e.id}>Add Images</button> */}
                    <p className="card-text">
                      <small className="text-muted">
                        {e.loc_name}, {e.sub_name}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {loading ? (
        "Loading"
      ) : houses.data.length > imagePerRow ? (
        <div className="btn-box text-center">
          <button className="btn btn-primary ">
            <a href="#" className="text-light" onClick={handleMoreHouses}>
              Load More
            </a>
          </button>
        </div>
      ) : (
        <div className="btn-box" style={{ display: "none" }}>
          <button className="btn btn-primary ">
            <a href="#" className="text-light" onClick={handleMoreHouses}>
              Load More
            </a>
          </button>
        </div>
      )}

      <Footer />
      </div>
      <div id="add" style={{display:"none"}}>
        <AddHouse />
      </div> 
      <div id="manage" style={{display:"none"}}>
        <Manage house={house_id}/>
      </div>
    </div>
  );
}

export default Houses;
