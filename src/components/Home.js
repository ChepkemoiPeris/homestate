import React, { useEffect, useState } from "react";
import axios from "axios";
import image1 from "./images/herobg3.jpg";
import image4 from "./images/s-1.jpg";

import $ from 'jquery'
function Home() {
  const [loading, setLoading] = useState(true);
  const [houses, setHouses] = useState([]);
  const [locations, setLocations] = useState([]); 
  const [AllHouses, setAll] = useState([]);
  const [searchInput, setSearchInput] = useState('');  
  const [locationid, setLocationId] = useState('');  
  const [locationfdval, setLocationfd] = useState('');
  useEffect(() => { 
    const fetchData = async () => {
      setLoading(true); 
       const { data: response } = await axios.get(
          "http://localhost:5000/rentals/list"
        );
        const locs = await axios.get(
          "http://localhost:5000/locations"
        ); 
        setHouses(response.data);
        setAll(houses);  
        setLocations(locs.data.data);  
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
  const handleClick = (event) => {
    event.preventDefault();
    let val = event.target.innerText;
    let bedrooms = "";
    let filtered = [];
    if (val == "Bedsitters") {
      bedrooms = "bedsitter";
      let filtered = AllHouses.filter((e) => e.bedrooms == bedrooms);
      setHouses(filtered);
    } else if (val == "1 bedroom") {
      bedrooms = "one bedroom";
      let filtered = AllHouses.filter((e) => e.bedrooms == bedrooms);
      setHouses(filtered);
    } else if (val == "2 bedrooms") {
      bedrooms = "Two bedroom";
      let filtered = AllHouses.filter((e) => e.bedrooms == bedrooms);
      setHouses(filtered);
    } else if (val == "3 bedrooms") {
      bedrooms = "Three bedroom";
      let filtered = AllHouses.filter((e) => e.bedrooms == bedrooms);
      setHouses(filtered);
    } else {
      bedrooms = "four bedroom";
      let filtered = AllHouses.filter((e) => e.bedrooms == bedrooms);
      setHouses(filtered);
    }
  };  
  let uniqueLocations =[]
    if(!loading){
        uniqueLocations = [...new Set(houses.map((item) => item.loc_name))];
    
    }  
    // uniqueBedrooms = [...new Set(AllHouses.map((item) => item.bedrooms))];
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    const filteredData = AllHouses.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      }) 
      setHouses(filteredData);
       
     
}
const handleLocationClick =()=>{

}  
const handleLocationSearch =(e)=>{
  var val = e.target.value
  let value = val.toLowerCase();
  document.getElementById("myList").style.display="block"; 
  $("#myList li").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
}   

function autocompleteMatch(input) {
  input = input.toLowerCase();
  if (input == '') {
    return [];
  }
  var reg = new RegExp(input)
  return locations.filter(function(term) {
    let name = term.name.toLowerCase(); 
	  if (name.match(reg)) { 
  	  return name;
	  }
  });
}
function showResults(e) {
  let val = e.target.value
  let res = document.getElementById("result");  
  res.innerHTML = '';
  let list = '';
  let terms = autocompleteMatch(val);
  terms.map((term,index)=>{  
    list += '<li><a class="listVal" id='+term.id+'>' + term.name + '</a></li>'; 
  }) 
  res.innerHTML = '<ul id="myList">' + list + '</ul>';    
  document.getElementById("myList").style.listStyle="none";
  document.getElementById("myList").style.color="#fff"; 
  const listItems = document.querySelectorAll('.listVal');
  listItems.forEach(list => {
    list.addEventListener('click', function handleClick(event) {
        console.log(event.target.id); 
        let val = event.target.innerText; 
        setLocationfd(event.target.id)
        setLocationId(val) 
        res.setAttribute('style', 'display: none;');
    });
  });
  
}
const Subscribe = async (e)=>{ 
    e.preventDefault();   
  var all = document.forms.subscribe_form;     
	var fd = new FormData(all);    
	let email = fd.get('email');
	let location = fd.get('location'); 
  let url ="http://localhost:5000/subscribers/create"
  let res = await axios.post(url, {
    email:email,
    location_id:locationfdval
  })  
  console.log(res.data) 
}

  return (
    <div>
      <div className="hero_area">
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="#">
                <i
                  className="bi bi-house-door-fill "
                  style={{
                    fontSize: 30,
                    color: "#3554D1",
                    alignItems: "center",
                  }}
                ></i>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <div className="User_option">
                    <li className="nav-item">
                      <a className="nav-link" href={"#"}>
                        {" "}
                        Browse Locations
                      </a>
                    </li>
                    <a
                      href={"/register"}
                      type="button"
                      role="button"
                      className="btn btn-outline-primary text-primary login-btn"
                    >
                      Login/Sign up
                    </a>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <section className="slider_section ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 offset-md-1">
                <div className="detail-box">
                  <h1>
                    <span> Modern</span> <br />
                    Apartments <br />
                    Rent
                  </h1>
                  <p>
                    An easy way to find CLASSY apartments for Rent in Nairobi
                  </p>
                  <div className="btn-box">
                    <a href="" className="">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 offset-md-1">
                <div className="image-div float-right">
                  <img
                    className="bg-image"
                    src={image1}
                    alt="bg image"
                    width="550"
                    height="300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="find_section ">
        <div className="container">
          <form action="">
            <div className="form-row">
              <div className="input-group">
                <span
                  className="form-control-feedback"
                  style={{
                    position: "absolute",
                    zIndex: "2",
                    display: "block",
                    width: "45px",
                    height: "45px",
                    lineHeight: "2.375rem",
                    marginTop: "15px",
                    textAlign: "center",
                    pointerEvents: "inherit",
                    color: "#aaa",
                  }}
                >
                  {" "}
                  <i className="fa fa-search fa-lg"></i>{" "}
                </span>
                <input
                  type="text"
                  style={{ borderRadius: "10px", paddingLeft: "2.375rem" }}
                  onChange={(e) => searchItems(e.target.value)}
                  className="form-control"
                  placeholder="Search by name or location..."
                />
              </div>
              
            </div>
          </form>
        </div>
      </section>
      <section className="sale_section layout_padding-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="sidebar">
              <div className="py-5 mt-5">
                <h3>Filter by Bedroom</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#000" }}
                      onClick={handleClick}
                    >
                      Bedsitters
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#000" }}
                      onClick={handleClick}
                    >
                      1 bedroom
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#000" }}
                      onClick={handleClick}
                    >
                      2 bedrooms
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#000" }}
                      onClick={handleClick}
                    >
                      3 bedrooms
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#000" }}
                      onClick={handleClick}
                    >
                      4 bedrooms
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Filter by Location</h3>
                <ul className="list-group list-group-flush">
                  {loading ? "Loading" : uniqueLocations.map((e, index) => {
                        return (
                          <li className="list-group-item" key={index}>
                            <a
                              href="#"
                              style={{ textDecoration: "none", color: "#000" }}
                              onClick={handleLocationClick}
                            >
                              {e}
                            </a>
                          </li>
                        );
                      })}
                </ul>
              </div>
            </div>
            <div className="w-75 float-right pl-5">
              <div className="heading_container">
                <h2>House For Rent</h2>
                <p>
                House hunting made easy. Browse houses you want in your location
                </p>
              </div>
              <div className="sale_container">
                <div className="row">
                  {loading
                    ? "Loading..."
                    :(houses.length == 0) ?<h1>No houses to display</h1> : houses.slice(0, next)?.map((e, index) => {
                        let imagesrc = "";
                        if (e.image) {
                          imagesrc =
                            "http://localhost:5000/rentals/image?file=" +
                            e.image;
                        }
                        return (
                          <div className="box" key={index}>
                            <div className="img-box">
                              <img
                                src={imagesrc}
                                alt={e.name}
                                width="191px"
                                height="123px"
                              />
                              <div className="top-right">
                                <button className="text-primary ">
                                  {e.bedrooms}
                                </button>
                              </div>
                            </div>
                            <div className="detail-box">
                              <span>
                                {e.loc_name},{e.sub_name}
                              </span>
                              <h6 style={{fontSize:"13px"}}>{e.name}</h6>
                              <p>{e.description}</p>
                              
                            </div>
                          </div>
                        );
                      })}
                </div>
              </div>
              {
                (houses.length > imagePerRow) ?  
                  <div className="btn-box">
                <a href="#" onClick={handleMoreHouses}>
                  Load More
                </a>
              </div>
               : <div className="btn-box" style={{display:"none"}}>
               <a href="#" onClick={handleMoreHouses}>
                 Load More
               </a>
             </div>
              }
              
            </div>
          </div>
        </div>
      </section>
      <section className="sale_section layout_padding-bottom">
        <div className="container-fluid">
          <div className="heading_container">
            <h2>Explore trending Locations</h2>
          </div>
          <div className="sale_container">
            {loading ? "Loading" : uniqueLocations.map((e, index) => {
                  return (
                    <div className="box" key={index}>
                      <div className="img-box">
                        <img src={image4} alt="" />
                      </div>
                      <div className="detail-box">
                        <h6>{e}</h6>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but
                        </p>
                      </div>
                    </div>
                  );
                })}
          </div>
          <div className="btn-box">
            <a href="">Find More</a>
          </div>
        </div>
      </section>
      <section className="container-fluid footer_section subscribe ">
        <span className="title">
          <span id="displayYear"></span>
          <h2>Stay updated </h2>
          <br />
          Subscribe if you want to be notified of new listings in your location
        </span>

        <form onSubmit={Subscribe} id="subscribe_form" autoComplete="off">
          <div className="form-group row form-sub">
            <div className="col-md-4 mb-5">
              <label htmlFor="email"></label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="col-md-4 mb-5">
              <label htmlFor="location"></label>
              <input
                type="text"
                className="form-control" 
                value={locationid} 
                placeholder="Location"
                onChange={showResults}
                required
              />  
                <div id="result"></div>
              
              
  
             
            </div>

            <div className="col-md-4 mb-5 pt-4">
              <input
                name="subscribe"
                id=""
                className="btn btn-outline-light text-light subscribeBtn"
                type="submit"
                value="Subscribe"
              />
            </div>
          </div>
        </form>
      </section>
      <section className="container-fluid footer_section ">
        <div className="top ">
          <span className="float-left">Homestate.ke</span>
          <span className="float-right">Browse Listings</span>
        </div>
        {/* <hr  className="mt-0 mb-0"/> */}
        <div className="bottom pt-5">
          <span className="float-left">
            &copy; <span id="displayYear">2022</span>&nbsp;
            <a href="#">HomeKE</a>&nbsp; All Rights Reserved
          </span>
          <span className="socials float-right">
            <i className="bi bi-facebook p-2"></i>
            <i className="bi bi-twitter p-2"></i>
            <i className="bi bi-github p-2"></i>
            <i className="bi bi-linkedin p-2"></i>
            <i className="bi bi-instagram p-2"></i>
          </span>
        </div>
      </section>
    </div>
  );
}

export default Home;
