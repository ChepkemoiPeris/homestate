import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import signIn from "../images/signin-image.jpg"
function Login() {
    const navigate = useNavigate();
const [errorMsg,setError] = useState("")
const [successMsg,setSuccess] = useState("")
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
                const element = document.querySelector('.created');
                element.style.display = 'block';
                setTimeout(() => {
                    navigate("/home");
                  }, 2000);          
           
           }
        
      }
  return (
    <section className="sign-in">
    <div className="sign-container">
        <div className="signin-content">
            <div className="signin-image">
                <figure><img src={signIn} alt="sign in image" /></figure> 
            </div>

            <div className="signin-form">
                <h2 className="form-title">Sign In</h2>
                <div className="alert alert-danger" style={{display:"none"}}  role="alert">
                 {errorMsg}
                 </div>
                 <div className="created alert alert-success " style={{display:"none"}}  role="alert">
                 {successMsg}
                 </div>
                <form method="POST" className="register-form" id="loginForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="email" name="email" id="your_name" placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                        <input type="password" name="pass" id="your_pass" placeholder="Password"/>
                    </div>
                    {/* <div className="form-group">
                        <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                        <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                    </div> */}
                    <div className="form-group form-button">
                        <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                        <a href={"/forgotpassword"} className="forgot-password-link">Forgot password?</a>                       
                    </div>
                    <a href={"/register"} className="signup-image-link">Create an account</a>
                    
                </form>
                 
            </div>
        </div>
    </div>
</section>
  )
}

export default Login