import React,{useEffect,useState} from 'react' 
import axios from "axios"
function All() {
    const [loading, setLoading] = useState(true);
    const [houses, setHouses] = useState([])
    useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            const {data: response} = await axios.get('http://localhost:5000/rentals/list');
            setHouses(response);
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
    
        fetchData();
      }, []); 
      console.log(houses.data)
      let img = "api/upload"
  return (
<div className="container mx-auto mt-4">
<h2>All Houses</h2>
  <div className="row">
    {(loading)?"Loading...":
    houses.data.map((e,index)=>{
     return(
        <div className="col-md-4">
        <div className="card" style={{width: '18rem'}}>
    <img src="https://i.imgur.com/ZTkt4I5.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{e.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{e.bedrooms}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Kitale</h6>
      <p className="card-text">{e.description}</p>
         <a href="#" className="btn mr-2"><i className="fas fa-link"></i> More details</a>
      <a href="#" className="btn "><i className="fas fa-link"></i> Realtor</a>
    </div>
    </div>
      </div> 
       )
    })
    }
    
</div>
  </div>
  )
}

export default All