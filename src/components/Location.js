import React,{useEffect,useState} from 'react' 
import axios from 'axios'
import image1 from './images/s-1.jpg'
import image2 from './images/s-2.jpg'
import image3 from './images/s-3.jpg' 
function Location() {
  const [loading,setLoading] = useState(true)
  const [locations,setLocations] = useState([])
useEffect(() => {
  const getLocations = async()=>{
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        "http://localhost:5000/locations"
      );
      setLocations(response);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  } 
  getLocations()
}, [])
console.log(locations)
  return (
    <section className="sale_section layout_padding-bottom">
    <div className="container-fluid">
      <div className="heading_container">
        <h2>
          Explore trending Locations
        </h2>
       
      </div>
      <div className="sale_container">
        <div className="box">
          <div className="img-box">
            <img src={image1} alt=""/>
          </div>
          <div className="detail-box">
            <h6>
              apertments house
            </h6>
            <p>
              There are many variations of passages of Lorem Ipsum available, but
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={image2} alt=""/>
          </div>
          <div className="detail-box">
            <h6>
              apertments house
            </h6>
            <p>
              There are many variations of passages of Lorem Ipsum available, but
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={image3} alt=""/>
          </div>
          <div className="detail-box">
            <h6>
              apertments house
            </h6>
            <p>
              There are many variations of passages of Lorem Ipsum available, but
            </p>
          </div>
        </div>
        
      </div>
      <div className="btn-box">
        <a href="">
          Find More
        </a>
      </div>
    </div>
  </section>

  )
}

export default Location