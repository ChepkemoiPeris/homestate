import React,{useState} from 'react'
import axios from 'axios'

function ChangePassword({user}) { 
    const [errorMsg, setError] = useState("");
  const [successMsg, setSuccess] = useState("");
 const handleSubmit = async(e)=>{
e.preventDefault()
let current = e.target.current.value
let new_pass = e.target.new.value
let repeat = e.target.repeat.value 
let url ='http://localhost:5000/users/change_password/'+user
let res = await axios.post(url,{
    current:e.target.current.value,
    new_pass:e.target.new.value,
    repeat:e.target.repeat.value
})
console.log(res.data)
if(res.data.status == "success"){
    setSuccess(res.data.message);
    const element = document.querySelector(".success");
    element.style.display = "block";
    setTimeout(() => {
        element.style.display = "none";
    }, 3000); 
}else{
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
}
    }
  return ( 
                    <div className="card card-outline-secondary">
                        
                        <div className="card-header">
                            <h3 className="mb-0">Change Password</h3>
                        </div>
                        <div
              className="alert alert-danger"
              style={{ display: "none" }}
              role="alert"
            >
              {errorMsg}
            </div>
            <div
              className="success alert alert-success "
              style={{ display: "none" }}
              role="alert"
            >
              {successMsg}
            </div>
                        <div className="card-body">
                            <form className="form" role="form" autoComplete="off" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="inputPasswordOld">Current Password</label>
                                    <input type="password" className="form-control" id="inputPasswordOld" name="current" required=""/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPasswordNew">New Password</label>
                                    <input type="password" className="form-control" id="inputPasswordNew" name="new" required=""/>
                                    <span className="form-text small text-muted">
                                            The password must be 8-20 characters, and must <em>not</em> contain spaces.
                                        </span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPasswordNewVerify">Confirm Password</label>
                                    <input type="password" className="form-control" id="inputPasswordNewVerify" name="repeat" required=""/>
                                    <span className="form-text small text-muted">
                                            To confirm, type the new password again.
                                        </span>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success btn-lg float-right">Save</button>
                                </div>
                            </form>
                        </div>
                    </div> 
 
  )
}

export default ChangePassword