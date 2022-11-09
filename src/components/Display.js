import React,{useEffect,useState} from 'react' 
import axios from "axios"; 
import Sidebar from './Sidebar'
function Display() {
  const [loading, setLoading] = useState(true);
  const [houses, setHouses] = useState([]);
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
  }, []) 
  const imagePerRow = 6;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreHouses = (event)=>{
    event.preventDefault() 
    setNext(next + imagePerRow);
  }
  return (
<section className="sale_section layout_padding-bottom">
    <div className="container-fluid">
    <div className='row'>
     <Sidebar />
     <div className='w-75 float-right pl-5'>
      <div className="heading_container">
        <h2>
          House For Rent
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the
        </p>
      </div>
      <div className="sale_container">
        <div className='row'> 
        {loading
                        ? "Loading..."
                        : houses.data.slice(0, next)?.map((e, index) => { 
                        let imagesrc =""
                        if(e.image){
                          imagesrc = 'http://localhost:5000/rentals/image?file='+e.image   
                        }                 
                          return(
<div className="box" key={index}>
          <div className="img-box">
            <img src={imagesrc} alt={e.name} width="191px" height="123px"/>
            <div className="top-right"><button className='text-primary '>{e.bedrooms}</button></div>
          </div>
          <div className="detail-box">
            <h6>
             {e.name}
            </h6>
            <p>
              {e.description}
            </p>
            <p>
              {e.loc_name} || {e.sub_name}
            </p>
          </div>
        </div> )
                        })}
        
         
        </div>
         
      </div>
      <div className="btn-box">
        <a href="#" onClick={handleMoreHouses}>
          Load More
        </a>
      </div>
      </div>
      </div>
    </div>
  </section>

  )
}

export default Display