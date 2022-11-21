import React,{useEffect,useState} from "react";
import Footer from "../Footer";
import UploadMoreImages from "./UploadMoreImages";
import axios from 'axios'
function Manage({ house }) { 
    const [Images,setImages] = useState([])
    const [Loading,setLoading] = useState(true)
  let imagesrc = "";
  let house_data = [];
  let images =[]
  if(house) {
    house_data = house;
    imagesrc = "http://localhost:5000/rentals/image?file=" + house_data.image;  
    images = Images 
  }
  useEffect(() => {
    let url = "http://localhost:5000/rental/images/"+house_data.id 
    const fetchData = async()=>{
     let res= await axios.get(url)
     setImages(res.data.data)
    } 
    fetchData()
}, [])
 

  const handleImages = (e) =>{  
    let add = document.getElementById("AddImages")
    let displayed = document.getElementById("content")  
      displayed.style.display ="none"
      add.style.display ="block"
  }
  const handleEdit = (e) =>{   
    console.log("edit") 
  }
 const handleRemove=(e)=>{
    console.log("delete")
  }
  const DisplayMore = ()=>{
    let display = document.getElementById("more_images")  
    display.style.display ="block" 
  }
  return (
    <div className="container">
      <div className="content" id="content" style={{display:"block"}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <span style={{ display: "inline-block" }}>
                    <h4 className="card-title">Manage House</h4>
                  </span>
                  <span
                    style={{ display: "flex" }}
                    className="float-right pt-1"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm m-1"
                      onClick={handleImages}
                    >
                      Add Images
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm m-1"
                      onClick={handleEdit}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm m-1"
                      onClick={handleRemove}
                    >
                      Remove
                    </button>
                  </span>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-10 pl-1">
                        <div className="form-group" style={{ display: "flex" }}>
                          <label htmlFor="name">Name: </label>&nbsp;&nbsp;&nbsp;&nbsp;    
                          <input
                            type="email"
                            id="name"
                            name="name"
                            className="form-control ml-4"
                            placeholder="Name"
                            value={house_data.name}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-10 pl-1">
                        <div className="form-group" style={{ display: "flex" }}>
                          <label htmlFor="user">Realtor:</label> &nbsp;&nbsp;
                          <input
                            type="text"
                            id="user"
                            name="user"
                            className="form-control ml-4"
                            placeholder="Realtor"
                            value={house_data.email}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-10 pl-1">
                        <div className="form-group" style={{ display: "flex" }}>
                          <label>Location:</label>
                          <input
                            type="text"
                            className="form-control ml-4"
                            placeholder="Location"
                            value={house_data.loc_name}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-10 pl-1">
                        <div className="form-group" style={{ display: "flex" }}>
                          <label>Ward:</label>
                          <input
                            type="text"
                            className="form-control ml-5"
                            placeholder="Sub name"
                            value={house_data.sub_name}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-10 pl-1">
                        <div className="form-group" style={{ display: "flex" }}>
                          <label htmlFor="bedrooms">Bedrooms:</label>
                          <select
                            className="form-control ml-3"
                            name="bedrooms"
                            id="bedrooms"
                            value={house_data.bedrooms}
                          >
                            <option value="bedsitter">Bedsitter</option>
                            <option value="one bedroom">One bedroom</option>
                            <option value="Two bedroom">Two bedroom</option>
                            <option value="Three bedroom ">Three bedroom</option>
                            <option value="four bedroom">Four bedroom</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-10 pl-1">
                        <div className="form-group" style={{ display: "flex" }}>
                          <label htmlFor="parking">Parking:</label>&nbsp;&nbsp;
                          <select
                            className="form-control ml-4"
                            name="parking"
                            id="parking"
                            value={house_data.parking}
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option> 
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-10 pl-1">
                        <div className="form-group" style={{ display: "flex" }}>
                          <label htmlFor="water">water:</label>
                          <input
                            type="text"
                            className="form-control ml-5"
                            id="water"
                            name="water"
                            placeholder="Water"
                            value={house_data.water}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-10 pl-1">
                        <div className="form-group" style={{ display: "flex" }}>
                          <label htmlFor="internet">Internet:</label>&nbsp;&nbsp;
                          <input
                            type="text"
                            className="form-control ml-4"
                            id="internet"
                            name="internet"
                            placeholder="Internet"
                            value={house_data.internet}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-10 pl-1">
                        <div className="form-group" style={{ display: "flex" }}>
                          <label htmlFor="electricity">Electricity:</label>
                          <input
                            type="text"
                            className="form-control ml-4"
                            name="electricity"
                            id="electricity"
                            value={house_data.electricity}
                            placeholder="Home Address"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info btn-fill pull-right"
                      style={{display:"none"}}
                    >
                      Update Profile
                    </button>
                    <div className="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-user">
                <div className="card-image">
                  <img
                    className="w-100"
                    src={imagesrc}
                    title="cover iamge"
                    alt="..."
                    height={300}
                  />
                  <span>
                    <i>Cover image<button
                      type="submit"
                      className="btn btn-sm btn-secondary btn-fill float-right"
                    >
                      Change Image
                    </button></i>
                  </span>
                </div>
                <div className="card-body">
                  <div className="author"> 
                      <h5 className="title text-primary">
                        Rent:{" "}
                        <span className="text-dark">Ksh {house_data.rent}</span>
                      </h5>
                    
                      <h5 className="title text-primary">Deposit: <span className="text-dark">Ksh {house_data.deposit}</span></h5>
                    
                  </div>
                  <p className="description text-center">
                    {house_data.location_details} <br/>
                    {house_data.description}
                  </p>
                  <button className="btn btn-small btn-outline-primary mt-4" onClick={DisplayMore}>View More Images</button>
                </div>
                <hr />
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
        <div className="more_images" id="more_images" style={{display:"none"}}>
        <h5 className="text-primary text-center">
        <strong>More Images</strong>
      </h5>
        <div class="row">
          {images && house_data ? images.map((e,index)=>{             
            let image1 = "http://localhost:5000/rentals/image?file=" + e.image;  
           return( 
           <div class="col-lg-3 col-md-4 col-xs-6 thumb" key={index}>
                {/* <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title=""
                   data-image={image1}
                   data-target="#image-gallery" > */}
                    <img class="img-thumbnail"
                         src={image1}
                         alt="Another alt text"
                         height={100}
                         width={150}
                         />
                {/* </a> */}
            </div>
          )}):"No Images"}  
            </div>
        </div>        
      <Footer />
      </div> 
      <div id="AddImages" style={{display:"none"}}>
      <UploadMoreImages id={house_data.id}/>
      </div>
    </div>
  );
}

export default Manage;
