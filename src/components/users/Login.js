import React,{useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useLocation } from "react-router-dom"; 
import logo from "../images/logofinal.PNG"; 
import Nav from "../nav";  
 
function Login({message}) {
const navigate = useNavigate(); 
const location = useLocation();  
const [errorMsg,setError] = useState("")
const [successMsg,setSuccess] = useState("")  
const [verifySuccess,setVerifySuccess] = useState("")  
const [verifyFailed,setverifyFailed] = useState("")  
const [verify_email,setEmail] = useState("")
useEffect(() => {  
if(location.state){
  if(location.state.message =="Email for verification sent.Please Verify your Email to continue!"){
    setEmail(location.state.message)
    let el = document.getElementById("verify_email")
    setTimeout(() => {
       el.style.display = "none" 
    }, 3000); 
    }else{
      setverifyFailed(location.state.message) 
      setTimeout(() => {
        const element = document.getElementById('message');
        element.style.display = 'none';
      }, 9000)
    }
}
}, [])


    const handleSubmit = async (e) => {
        e.preventDefault();  
        var all = document.forms.loginForm;     
        var fd = new FormData(all);    
        let email = fd.get('email');
        let password = fd.get('pass');  
        let post_data ={
            email:  email,
            password:  password            
        }  
        let res = await axios.post('http://localhost:5000/users/login', post_data)  
           let status =res.data.status   
           if(status == 'error'){
            setTimeout(() => {
                const element = document.querySelector('.alert');
                element.style.display = 'none';
              }, 5000);     
              const element = document.querySelector('.alert');
                element.style.display = 'block';       
             if(typeof(res.data.message)=="object"){            
                setError(res.data.message[0].msg)
             }else{
                setError(res.data.message)
             } 
           }else{          
                setSuccess(res.data.message) 
                let valData =  res.data.data  
               localStorage.setItem('user', JSON.stringify(valData))
               localStorage.setItem('token', res.data.token)
               localStorage.setItem('login', true)
                const element = document.querySelector('.created'); 
                element.style.display = 'block';
                setTimeout(() => {
                    navigate("/home");
              }, 3000);          
           
           }
        
      }
  return ( 
    <section className="sign-in">   
    <div className="sign-container">
        <div className="signin-content"> 
        <Nav/> 
        {verify_email ? <div
             className="verify_email alert alert-success "
              style={{ display: "block" }}
              role="alert"
            >
              {verify_email}
            </div>:<div
             className="alert alert-success "
              style={{ display: "none" }}
              role="alert"
            >
              {verify_email}
            </div>}
        <div className="signin-form">
          {verifyFailed ? <div
              id="message"
              className="message alert alert-danger"
              style={{ display: "block" }}
              role="alert"
            >
              {verifyFailed}
            </div>:verifySuccess ? <div
             className="verified alert alert-success "
              style={{ display: "block" }}
              role="alert"
            >
              {verifySuccess}
            </div>:<div
             className="verified alert alert-success "
              style={{ display: "none" }}
              role="alert"
            >
              {verifySuccess}
            </div>}   
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
            <div
              className="text-center"
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                paddingTop: "20px",
                paddingBottom: "40px",
                backgroundColor: "#f5f5f5",
              }}
            >
              <form
                method="POST"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  padding: "5px",
                  margin: "auto",
                }} 
                className="register-form" id="loginForm" onSubmit={handleSubmit}
              >
                <div className="text-center" style={{paddingRight:"60px"}}>
                <img
                  className="mb-2"
                  src={logo}
                  alt=""
                  width="60"
                  height="50"
                />
                <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
                </div> 
                <div className="form-group form-inline">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    style={{
                      position: "relative",
                      boxSizing: "border-box",
                      marginBottom: "5px",
                      height: "auto",
                      width: "80%",
                      padding: "10px",
                      fontSize: "16px",
                    }}
                    placeholder="Email address"
                    required
                  />{" "}
                </div>
                 
                <div className="form-group form-inline">
                  <label htmlFor="pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    className="form-control"
                    style={{
                      position: "relative",
                      boxSizing: "border-box",
                      marginBottom: "10px",
                      height: "auto",
                      width: "80%",
                      padding: "10px",
                      fontSize: "16px",
                    }}
                    placeholder="Password"
                    required
                  />
                </div>
               

                <button
                  className="btn btn-lg btn-primary form-submit ml-1"
                  type="submit"
                >
                  Sign In
                </button>
                <a
                  href={"/"}
                  role="button"
                  type="button"
                  name="signup"
                  id="signup"
                  className="btn btn-lg btn-secondary form-submit ml-2 mr-2"
                  value="Cancel"
                >
                  Cancel
                </a>
                <p>
                <a href={"/forgot_password"} className="signup-image-link mr-3">
                  Forgot Password
                </a>
                <a href={"/register"} className="signup-image-link">Create an account</a>
                </p>
                
                <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
              </form>
            </div>
          </div> 
        </div>
    </div>
</section>
  )
} 
export default Login