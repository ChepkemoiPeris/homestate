import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./nav";
import image1 from "./images/herobg3.jpg";
import image4 from "./images/s-1.jpg";
import hero from "./images/herobg4.jpg";
import about from "./images/about-img.jpg";

function BrowseLocations() {
    const [loading, setLoading] = useState(true);
    const [houses, setHouses] = useState([]);
    useEffect(() => { 
        const fetchData = async () => {
          setLoading(true); 
           const { data: response } = await axios.get(
              "http://localhost:5000/rentals/list"
            ); 
            setHouses(response.data); 
            setLoading(false);  
        };
        fetchData();    
      }, []);
    let uniqueLocations =[]
    if(!loading){
        uniqueLocations = [...new Set(houses.map((item) => item.loc_name))]; 
    } 
    const imagePerRow = 6;
    const [next, setNext] = useState(imagePerRow);
    let images = [image1,image4,hero,about]
    const randomImage = images[Math.floor(Math.random() * images.length)];
      return (
    <div className="container">
      <Nav/>
        <div className="card-group">
              {loading ? (
                "Loading..."
              ) : uniqueLocations.length == 0 ? (
                <h1>No houses to display</h1>
              ) : (
                uniqueLocations.slice(0, next)?.map((e, index) => {
                   let house_count= houses.filter(x => x.loc_name === e).length 
                   
                   return (
                    <div className="col-md-3 col-sm-12 m-4 d-flex" key={index}> 
                      <div className="card ">
                        <img
                          src={randomImage}
                          alt={e.name}
                          style={{
                            width: "100%",
                            height: "15vw",
                            objectFit: "cover"
                          }}
                          className="card-img-top nearby"
                        />
                        
                        <div className="card-body ">
                          <h5 className="card-title">{e}</h5>
                          <p className="card-text">Browse houses listed for {e}</p>                          
                          <a
                            href={"/location/" + e}
                            role="button"
                            className="btn mr-2 text-primary"
                          >
                          Browse
                          </a> 
                          <p className="card-text">
                            <small className="text-muted"> 
                             {house_count} Houses listed
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
  )
}

export default BrowseLocations