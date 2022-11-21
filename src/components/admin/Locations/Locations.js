import React,{useState,useEffect} from 'react'
import Footer from '../Footer'
import Sublocations from './Sublocations'
import axios from 'axios'
function Locations() {
    const [locId,setId] = useState()
    const handleView =(e)=>{
        e.preventDefault()
        setId(e.target.id)
        const showEl = document.getElementById("wards"); 
        const hideEl = document.querySelector(".content"); 
        showEl.style.display = "block";
        hideEl.style.display = "none"; 
        
      }
      const [loading, setLoading] = useState(true); 
      const [locations, setLocations] = useState([]); 
      useEffect(() => { 
        const fetchData = async () => {
          setLoading(true);            
            const locs = await axios.get(
              "http://localhost:5000/locations"
            );  
            setLocations(locs.data.data);  
            setLoading(false);  
        };
        fetchData();    
      }, []); 
  return (
    <div class="main-panel">  
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Locations</h4>
                                <p class="card-category">List Of All Locations</p>
                            </div>
                            <div className="card-body table-full-width table-responsive">
              <table className="table table-hover table-striped">
                <thead>
                  <th>ID</th>
                  <th>Name</th> 
                  <th>Action</th>
                </thead>
                <tbody>
                  {loading
                    ? "Loading"
                    : locations.map((e, index) => {
                        let imagesrc = "";
                        if (e.image) {
                          imagesrc =
                            "http://localhost:5000/rentals/image?file=" +
                            e.image;
                        }
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                           
                            <td>{e.name}</td>
                             
                            <td>
                              <a
                                href="#"
                                className="view p-1"
                                title="View"
                                data-toggle="tooltip"
                                onClick={handleView}
                                
                              >
                                <i
                                  className="fa fa-eye text-success"
                                  aria-hidden="true"
                                  id={e.id}
                                >Wards</i>
                              </a>
                              
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        <div id="wards" style={{display:"none"}}>
        <Sublocations loc={locId}/>
        </div>
    </div>
  )
}

export default Locations