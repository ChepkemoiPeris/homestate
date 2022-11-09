import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer";
import Nav from "../Nav";
import Sidebar from "../Sidebar";
import $ from "jquery";
function Houses() {
  const [loading, setLoading] = useState(true);
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    $(document).ready(function () {
      $("#location").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu li").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });
      $("#sublocation").on("keyup", function () {
        var value1 = $(this).val().toLowerCase();
        $(".dropdown-menu li").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value1) > -1);
        });
      });
      $("#bedrooms").on("keyup", function () {
        var value2 = $(this).val().toLowerCase();
        $(".dropdown-menu li").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value2) > -1);
        });
      });
    });

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
  console.log(houses.data);
  let img = "api/upload";
  return (
    <div class="wrapper"> 
      <div class="main-panel">
        <Nav />
        <div class="content">
          <div class="container-fluid"> 
                  <div className="row"> 
                  <h4 className="mt-2" style={{paddingRight:'100px'}}>Houses </h4>    
                  <span className="">  
                             
                  <a href="/register" className="btn btn-primary m-1">
                      <i
                        className="fa fa-plus-circle text-secondary" 
                      ></i>
                      Add House
                    </a>
                    <a href="#" role ="button" className="btn btn-primary btn-small">
                      <i
                        className="fa fa-download text-secondary"
                        aria-hidden="true"
                      ></i>
                      Export to Excel
                    </a>   </span> 
                    {/* <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <input class="form-control" id="myInput" type="text" placeholder="Search.."/>
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">JavaScript</a></li>
      <li><a href="#">jQuery</a></li>
      <li><a href="#">Bootstrap</a></li>
      <li><a href="#">Angular</a></li>
    </ul>
  </div> */}
                   
                   
                  </div>
                   
                    <div className="row">
                      {loading
                        ? "Loading..."
                        : houses.data.map((e, index) => {
                            return (
                              <div className="col-md-4">
                                <div
                                  className="card"
                                  style={{ width: "18rem" }}
                                >
                                  <img
                                    src="https://i.imgur.com/ZTkt4I5.jpg"
                                    className="card-img-top"
                                    alt="..."
                                  />
                                  <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                      {e.bedrooms}
                                    </h6>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                      Kitale
                                    </h6>
                                    <p className="card-text">{e.description}</p>
                                    <a href="#" className="btn mr-2">
                                      <i className="fas fa-link"></i> More
                                      details
                                    </a>
                                    <a href="#" className="btn ">
                                      <i className="fas fa-link"></i> Realtor
                                    </a>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                    </div>
                 
                 
             
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Houses;
