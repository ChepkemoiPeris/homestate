import React,{useState} from 'react'
import axios from 'axios'
function UploadMoreImages({id}) { 
  const [errorMsg, setError] = useState("");
  const [successMsg, setSuccess] = useState("");
 const handleSubmit  =async(e)=>{
e.preventDefault()
let files =e.target.images.files 
var formData = new FormData();
for (const key of Object.keys(files)) {
  formData.append('house_images', files[key])
 }

let url = "http://localhost:5000/rentals/upload/"+id
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
  const el = document.querySelector(".alert");
  el.style.display = "block";
  if (typeof res.data.message == "object") {
    setError(res.data.message[0].msg);
    setTimeout(() => {
      el.style.display = "none";
    }, 3000);
  } else {
    setError(res.data.message);
    setTimeout(() => {
      el.style.display = "none";
    }, 3000);
  }
} else {
  setSuccess(res.data.message);
  const element = document.querySelector(".created");
  element.style.display = "block";
  setTimeout(() => {
    element.style.display = "none";
  }, 3000);
}
  }
  return (
    <div className="card card-outline-secondary">
                        <div className="card-header">
                            <h3 className="mb-0">Upload More Images</h3>
                        </div>
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
                        <div className="card-body">
                            <form className="form" role="form" encType="multipart/form-data" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="images">Upload Images</label>
                                    <input type="file" className="form-control" id="images" name="images" required="" multiple/>
                                    <span className="form-text small text-muted">
                                            You can upload upto 5 Images
                                        </span>
                                </div> 
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-lg float-right">Upload</button>
                                </div>
                            </form>
                        </div>
                    </div> 
  )
}

export default UploadMoreImages