import React,{useState,useEffect} from 'react'
import axios from 'axios'
import UploadMoreImages from './UploadMoreImages'
function AddHouse() { 
    const [errorMsg,setError] = useState("")
    const [house_id,setHouseId] = useState()  
    const [loading,setLoading] = useState(true)
    const [locations,setLocations] = useState([])
    const [subLoc,setsubLoc] = useState([])
    const [filteredLocs,setFilteredLocs] =useState([])
  useEffect(() => {
    const getLocations = async()=>{
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:5000/locations"
        );
        const res = await axios.get("http://localhost:5000/sublocation")
        setsubLoc(res.data.data)
        setLocations(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    } 
    getLocations()
  }, []) 
  const user = JSON.parse(localStorage.getItem("user"));
 
const handleLocation =(event)=>{  
  let filtered = subLoc.filter(e=> e.location_id == event.target.value) 
   setFilteredLocs(filtered)
} 
      const handleSubmit = async (e) => {
        e.preventDefault();   
      var all = document.forms.add_house;
      var fd = new FormData(all); 
      let post_data = {
        name:fd.get("name"),
         user_id:fd.get("user_id"),
        location_id:fd.get("location_id"),
        sublocation:fd.get("sublocation"), 
        location_details:fd.get("location_details"), 
        bedrooms:fd.get("bedrooms"), 
        description:fd.get("description"), 
        water:fd.get("water"), 
        internet:fd.get("internet"), 
        parking:fd.get("parking"), 
        vacant:fd.get("vacant"), 
        cover_image:fd.get("image"),
        rent:fd.get("rent"), 
        electricity:fd.get("electricity"),
        deposit:fd.get("deposit"), 
        
      };   
     
      let res = await axios.post(
        "http://localhost:5000/rentals/create",
        post_data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );  
      if(res.data.status == "success"){ 
        setHouseId(res.data.data.insertId) 
        document.getElementById("backdrop").style.display = "block"
        document.getElementById("exampleModal").style.display = "block"
        document.getElementById("exampleModal").classList.add("show")
      }
      }
      function closeModal() {
        document.getElementById("backdrop").style.display = "none"
        document.getElementById("exampleModal").style.display = "none"
        document.getElementById("exampleModal").classList.remove("show")
      }
      var modal = document.getElementById('exampleModal');
      
      window.onclick = function(event) {
        if (event.target == modal) {
          closeModal()
        }
      }
      const handleMoreImages= ()=>{   
        const showEl = document.querySelector(".addMore"); 
        const hideEl = document.querySelector(".card-outline-secondary"); 
        showEl.style.display = "block";
        hideEl.style.display = "none"; 
      } 
      return (
        <div>
        <div className="card card-outline-secondary">
        <div className="card-header">
          <p>
          <a className='btn btn-primary' href="/home"><i className="fa fa-arrow-left" aria-hidden="true"></i>Back</a>
          
          </p>
          <h3 className="mb-0">Add House</h3>
        
        </div>
        <div className="card-body">
            <form className="form" role="form" autoComplete="off" id="add_house" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="name">House Name</label>
                    <input type="text" className="form-control" id="name" name="name" required=""/>
                     
                </div>
                <div className="form-group">
                     
                      <label htmlFor="location_id">Location</label>
                      <select className="form-control" name="location_id" id="location_id" onChange={handleLocation} required>
                    {loading ? "Loading": locations.data.map(e=>{
                       return(<option value={e.id}>{e.name}</option>)
                    })}     
                      </select>
                   
                </div>
                <div className="form-group"> 
                      <label htmlFor="sublocation">Ward</label>
                      <select className="form-control" name="sublocation" id="sublocation" required>
                     {filteredLocs ? filteredLocs.map(e=>{
                       return(<option value={e.id}>{e.name}</option>)
                     }) : <option></option>}   
                        
                      </select>
                  
                </div>
                <div className="form-group">
                    <label htmlFor="loc_details">Location details</label>
                    <input type="text" className="form-control" id="location_details" name="location_details" required=""/>
                     
                </div>
                <div className="form-group">
                  <label htmlFor="bedrooms">Bedrooms</label>
                  <select className="form-control" name="bedrooms" id="bedrooms">
                    <option>Bedsitters</option>
                    <option>One bedroom</option>
                    <option>Two bedroom</option>
                    <option>Three bedroom</option>
                    <option>Four bedroom</option>
                  </select>
                </div> 
                <div className="form-group">
                  <label htmlFor="description">More details</label>
                  <input type="text" className="form-control" id="description" name="description" required/>
                </div>
                <div className="form-group"> 
                  <input type="hidden" className="form-control" id="user_id" name="user_id" value={user.id} required/>
                </div>
                <div className="form-group">
                  <label htmlFor="water">Water</label>
                  <input type="text" className="form-control" id="water" name="water" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="internet">Internet</label>
                  <input type="text" className="form-control" id="internet" name="internet" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="parking">Parking</label>
                  <select className="form-control" name="parking" id="parking">
                    <option value="1">Yes</option>
                    <option value="0">No</option> 
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="vacant">Vacant</label>
                  <input type="number" className="form-control" id="vacant" name="vacant" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="rent">Rent</label>
                  <input type="number" className="form-control" id="rent" name="rent" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="deposit">Deposit</label>
                  <input type="number" className="form-control" id="deposit" name="deposit" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="electricity">Electricity</label>
                  <input type="text" className="form-control" id="electricity" name="electricity" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="image"> Cover Image</label>
                  <input type="file" className="form-control" id="image" name="image" required/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success btn-lg float-right">Submit</button>
                </div>
            </form>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true"
    role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title text-success" id="exampleModalLabel">House Added Successfully</h5>
                <button type="button" className="close" aria-label="Close" onClick={closeModal}>
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
               Do you want to add more Images ?You can also add later
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>No</button>
                <button type="button" className="btn btn-danger" onClick={handleMoreImages}>Yes</button> 
            </div>
        </div>
    </div>
</div>
<div className="modal-backdrop fade show" id="backdrop" style={{display: "none"}}></div> 
        </div>
       
    </div> 
    <div className='addMore' style={{display:"none"}}>
          <UploadMoreImages id={house_id}/>
        </div>
        </div>
     
    )
}

export default AddHouse