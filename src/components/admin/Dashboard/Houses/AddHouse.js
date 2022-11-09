import React from 'react'

function AddHouse() {
    const navigate = useNavigate();
    const [errorMsg,setError] = useState("")
    const [successMsg,setSuccess] = useState("")
      const handleSubmit = async (e) => {
        e.preventDefault();  
        var all = document.forms.registerForm;     
        var fd = new FormData(all);    
        let fname = fd.get('fname');
        let lname = fd.get('lname'); 
        let email = fd.get('email'); 
        let password=fd.get('pass') 
        let phone=fd.get('phone') 
        let cpassword=fd.get('re_pass') 
        let image=fd.get('profile')   
        let date = new Date()
        let current_date = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+ date.getDate();  
        let post_data ={
            first_name:  fname,
            last_name:  lname,
            email:email,
            password: password,
            phone: phone,
            confirm_password:cpassword,
            profile: image,
            date_created: current_date,
             role: 1
        } 
         
            
        let res = await axios.post('http://localhost:5000/users/create', post_data, {
                headers: {
              'Content-Type': 'multipart/form-data' 
               }
               }) 
           let status =res.data.status  
           if(status == 'error'){
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
                navigate("/login");
              }, 3000);
            
           }
        
      }
      return (
        <section className="signup">
        <div className="sign-container">
            <div className="signup-content">
                <div className="signup-form">
                
                    <h2 className="form-title">Add New House</h2>
                    <div className="alert alert-danger" style={{display:"none"}}  role="alert">
                     {errorMsg}
                     </div>
                     <div className="created alert alert-success " style={{display:"none"}}  role="alert">
                     {successMsg}
                     </div>
                    <form method="POST" className="register-form" id="registerForm" onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="form-group">
                            <label htmlFor="fname"><i className="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="fname" id="fname" placeholder="First Name"    />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lname"><i className="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="lname" id="lname" placeholder="Last Name"   />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                            <input type="email" name="email" id="email" placeholder="Your Email"    />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone"><i className="zmdi zmdi-phone material-icons-phone"></i></label>
                            <input type="text" name="phone" id="phone" placeholder="Phone number"    />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                            <input type="password" name="pass" id="pass" placeholder="Password"   />
                        </div>
                        <div className="form-group">
                            <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                            <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                        </div>
                        <div className="form-group">                      
                            <label htmlFor="profile"><i className="zmdi zmdi-image material-icons-phone"></i></label>
                            <input type="file" name="profile" id="profile" placeholder="profile" />
                        </div>
                        <div className="form-group">
                            <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                            <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                        </div>
                        <div className="form-group form-button">
                            <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                            <a href={"/"} role="button" type="button" name="signup" id="signup" className="form-submit ml-3" value="Cancel">Cancel</a>
                           
                        </div>
                        
                    </form>
                </div>
           
            </div>
        </div>
    </section>
     
    )
}

export default AddHouse