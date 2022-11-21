import React, { useEffect, useState } from "react";
import image1 from "../images/herobg3.jpg";
import image4 from "../images/s-1.jpg";
import hero from "../images/herobg4.jpg";
import about from "../images/about-img.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../nav";
function HouseDetails() {
  const [loading, setLoading] = useState(true);
  const [houses, setHouses] = useState([]);
  const [Allhouses, setAllhouses] = useState([]);
  const params = useParams();
  let house_id = params.id; 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let url = "http://localhost:5000/rental/" + house_id;
      const { data: response } = await axios.get(url);
      const { data: res } = await axios.get(
        "http://localhost:5000/rentals/list"
      );
      setAllhouses(res.data);
      setHouses(response.data[0]);
      setLoading(false);
    };
    fetchData(houses);
  }, []);
  const imagePerRow = 6;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreHouses = (event) => {
    event.preventDefault();
    setNext(next + imagePerRow);
  };
  let NearbyHouses = [] 
  if(!loading){
    NearbyHouses = Allhouses.filter(e => e.loc_name == houses.loc_name &&  e.id  != houses.id) 
  }  
    
  return (
    <div className="container"> 
      <div className="row">
        <div className="m-5">
          <div className="row">
            <div className="col-sm-8 col-md-9 col-lg-9 text-left">
              <h3 className="card-title" style={{ fontWeight: "bold" }}>
                {houses.name}
              </h3>
              <h6 className="text-dark">
                {" "}
                {houses.loc_name}, {houses.sub_name}
              </h6>
            </div>
          </div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
            </ol>
            <div
              className="carousel-inner"
              style={{ width: "100% important", height: "500px important" }}
            >
              <div className="carousel-item active">
                <img
                  src={image1}
                  className="d-block  "
                  alt="..."
                  width={800}
                  height={400}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image4}
                  className="d-block  "
                  alt="..."
                  width={800}
                  height={400}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image1}
                  className="d-block  "
                  alt="..."
                  width={800}
                  height={400}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={about}
                  className="d-block  "
                  alt="..."
                  width={800}
                  height={400}
                />
              </div>
            </div>
            <a
              className="carousel-control-prev text-dark"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <i
                className="fa fa-chevron-left"
                style={{ fontSize: "40px", color: "black" }}
                aria-hidden="true"
              ></i>
              {/* <span className="carousel-control-prev-icon " style={{ fontSize: "30px",color:"black"}}  aria-hidden="true"></span> */}
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next text-dark"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              {/* <span className="carousel-control-next-icon text-dark" aria-hidden="true"></span> */}
              <i
                className="fa fa-chevron-right"
                style={{ fontSize: "40px", color: "black", fontWeight: "bold" }}
                aria-hidden="true"
              ></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div
            className="mb-2"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <div className="card-body">
              <button type="button" className="btn btn-outline-secondary">
                {houses.bedrooms}
              </button>
              <p className="card-text">{houses.location_details}</p>
              <p className="card-text">{houses.description}</p>
              <div className="list-group">
                <a className="list-group-item list-group-item-action ">
                  Water: &nbsp;&nbsp;&nbsp;
                  <span className="text-primary">{houses.water}</span>
                </a>
                <a className="list-group-item list-group-item-action">
                  Parking:&nbsp;&nbsp;&nbsp;
                  <span className="text-primary">
                    {houses.parking ? "Yes" : "No parking"}
                  </span>
                </a>
                <a className="list-group-item list-group-item-action ">
                  Internet: &nbsp;&nbsp;&nbsp;
                  <span className="text-primary">{houses.internet}</span>
                </a>
                <a className="list-group-item list-group-item-action ">
                  Electricity: &nbsp;&nbsp;&nbsp;
                  <span className="text-primary">Kplc meter token</span>
                </a>
              </div>
              <br />
              <p style={{ color: "#aaa" }}>REALTOR DETAILS</p>
              Name:{" "}
              <p>
                {houses.first_name} {houses.last_name}
              </p>
              Email: <p>{houses.email}</p>
              <a href="#" className="btn btn-primary btn-small">
                Contact Now
              </a>
            </div>
          </div>
          <div className="pt-5">
            <h3 className="text-primary text-center">
              <strong>Other Listings nearby</strong>
            </h3>

            <div className="card-group">
              {loading ? (
                "Loading..."
              ) : NearbyHouses.length == 0 ? (
                <h1>No houses to display</h1>
              ) : (
                NearbyHouses.slice(0, next)?.map((e, index) => {
                  let imagesrc = "";
                  if (e.image) {
                    imagesrc =
                      "http://localhost:5000/rentals/image?file=" + e.image;
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
                            objectFit: "cover"
                          }}
                          className="card-img-top nearby"
                        />
                        <div className="card-img-overlay"  style={{ height: "100px"}}>
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
                          <a
                            href={"/house/details/" + e.id}
                            role="button"
                            className="btn mr-2 text-primary"
                          >
                          More details
                          </a> 
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
          </div>
          {NearbyHouses.length > imagePerRow ? (
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
        </div>
      </div>
    </div>
  );
}

export default HouseDetails;
