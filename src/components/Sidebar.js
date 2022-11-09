import React,{useEffect} from "react";

function Sidebar() {
   useEffect(() => {
    const getLocation = async()=>{
      
    }
   }, [])
  const handleClick= (event)=>{
    event.preventDefault()
    console.log(event.target.innerText)
  }
  
  return (
    <div className="sidebar">  
      <div className="py-5 mt-5">
        <h3>Filter by Bedroom</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" ><a href="#" style={{textDecoration:"none",color:"#000"}} onClick={handleClick}>Bedsitters</a></li>
          <li className="list-group-item"><a href="#" style={{textDecoration:"none",color:"#000"}} onClick={handleClick}>1 bedroom</a></li>
          <li className="list-group-item"><a href="#" style={{textDecoration:"none",color:"#000"}} onClick={handleClick}>2 bedrooms</a></li>
          <li className="list-group-item"><a href="#" style={{textDecoration:"none",color:"#000"}} onClick={handleClick}>3 bedrooms</a></li>
          <li className="list-group-item"><a href="#" style={{textDecoration:"none",color:"#000"}} onClick={handleClick}>4 bedrooms</a></li>
        </ul>
      </div>
      <div>
        <h3>Filter by Location</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item ">Kasarani</li>
          <li className="list-group-item">Dagoretti North</li>
          <li className="list-group-item">Dagoretti South</li>
          <li className="list-group-item">Westlands</li>
          <li className="list-group-item">Langata</li>
        </ul>
      </div> 
    </div>
  );
}

export default Sidebar;
