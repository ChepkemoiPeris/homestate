import React,{useState} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios'
function Reset() {
    const params = useParams();
  let token =params.token 
  let user = params.id 
    const [errorMsg, setError] = useState("");
  const [successMsg, setSuccess] = useState("");
 const handleSubmit = async(e)=>{
e.preventDefault()
let url ='http://localhost:5000/users/change_password/'+user
let res = await axios.post(url,{ 
    new_pass:e.target.new.value,
    repeat:e.target.repeat.value,
    token:token
})
console.log(res.data.message)
 if(res.data.status == "success"){
    setSuccess(res.data.message)
    let el = document.querySelector('.success')
    el.style.display = "block"
    setTimeout(() => {
        el.style.display = "none"
    }, 5000);
 }else{
    
    setError(res.data.message)
    let el = document.querySelector('.error')
    el.style.display = "block"
    setTimeout(() => {
        el.style.display = "none"
    }, 5000);
 }
 }
 return(
    <div className="card card-outline-secondary w-50 mx-auto mt-5">
                        
    <div className="card-header">
        <h3 className="mb-0">Change Password</h3>
    </div>
    <div
className="error alert alert-danger"
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
{successMsg} Please login with your new password
</div>

    <div className="card-body">
        <form className="form" role="form" autoComplete="off" onSubmit={handleSubmit}>
          
            <div className="form-group">
                <label htmlFor="inputPasswordNew">New Password</label>
                <input type="password" className="form-control" id="inputPasswordNew" name="new" required=""/>
                <span className="form-text small text-muted">
                        The password must be 6-20 characters, and must <em>not</em> contain spaces.
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

export default Reset