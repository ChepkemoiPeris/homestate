import React,{useEffect,useState} from 'react'
import image4 from "./images/s-1.jpg";
import {useParams} from 'react-router-dom';
import axios from 'axios'
function LocationHouses() {
  const params = useParams();
  let location =params.location 
   const [loading,setLoading] = useState(true)
   const [LocHouses,setLocHouses] = useState([])
   useEffect(() => {
    const fetchData = async () => {
        setLoading(true); 
         const { data: response } = await axios.get(
            "http://localhost:5000/rentals/list"
          ); 
          setLocHouses(response.data); 
          setLoading(false);  
      };
      fetchData();  
   }, [])
   let filteredLocation=[]
   if(!loading){
    filteredLocation = LocHouses.filter((e)=>
        e.loc_name == location
    )
   }
   console.log(filteredLocation)
  return (
    <div className='m-5'>
        <div className="row">
        <a className='btn btn-primary ml-3 mb-3' href="/"><i className="fa fa-arrow-left" aria-hidden="true"></i>Go back</a>
        <div className="col-sm-8 col-md-9 col-lg-9 text-left">
            
            <h3 className="text-dark"><b>{location}</b></h3>
        </div>
    </div>
    {(loading)?"Loading" :filteredLocation.map(e=>{
        let imagesrc = "";
        if (e.image) {
          imagesrc =
            "http://localhost:5000/rentals/image?file=" +
            e.image;
        }
        return(
<div className="card mb-2" style={{ flexDirection: "row",
        alignItems: "center"}}>
  <img style={{ width: "20%",height:"150px"}} src={imagesrc} className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title" style={{ fontWeight: "bold"}} >{e.name}</h5>
    <h6>{e.bedrooms}</h6>
    <p className="card-text">
      {e.description}
    </p>
    <a href="#" className="btn btn-primary btn-small">More details</a>
  </div>
</div>
        )
    })}
    
    </div>
  
  )
}

export default LocationHouses