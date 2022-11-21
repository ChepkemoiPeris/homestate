import React,{useState} from 'react'
import axios from 'axios'
function User({id}) {
  const [errorMsg, setError] = useState("");
  const [successMsg, setSuccess] = useState("");
  const handleClick = (e) =>{
  let hide = document.querySelector('.details')
  let show = document.getElementById('upload')
  hide.style.display="none"
  show.style.display="block"
  }
const handleSubmit = async(e) =>{
 e.preventDefault() 
 let fd = e.target
let files =e.target.image.files
var formData = new FormData();
for (const key of Object.keys(files)) {
  formData.append('realtor_id', files[key])
 }
 
let url = "http://localhost:5000/realtor/"+id
let res = await axios.post(
  url,
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
); 
if (res.data.status == "error") {
  setError(res.data.message);
  fd.reset()
  const el = document.querySelector(".alert");
  el.style.display = "block";   
    setTimeout(() => {
      el.style.display = "none";
    }, 5000); 
} else { 
  setSuccess(res.data.message);
  fd.reset()
  const element = document.querySelector(".created");
  element.style.display = "block";
  setTimeout(() => {
    element.style.display = "none";
  }, 5000);
}
  }
  return (
    <div className="container">
        <div
              className="alert alert-danger"
              style={{ display: "none" }}
              role="alert"
            >
              {errorMsg}
            </div>
            <div
              className="created alert alert-success "
              style={{ display: "none" }}
              role="alert"
            >
              {successMsg}
            </div>
      <div className='details' style={{display:"block"}}>
      <h2>Dashboard</h2>
        <h5>Welcome to the dashboard </h5> 
      <p>
       If you would like to register as a Realtor please click the button below
      </p>
      <button type='button' className='btn btn-small btn-primary' onClick={handleClick}>Register as Realtor</button>
      </div>
       
	
   <form id="upload" onSubmit={handleSubmit} style={{display:"none"}}>
   <div className="form-group pt-3">
     <label htmlFor="">Id Image Upload</label>
     <input type="file" className="form-control-file" name="image" id="" placeholder="" aria-describedby="fileHelpId"/>
     <small id="fileHelpId" className="form-text text-muted">Please upload your front ID image for verification</small>
     <button type="submit" className="btn btn-primary">Submit</button>
   </div>
   </form>
  
  </div>
  )
}

export default User