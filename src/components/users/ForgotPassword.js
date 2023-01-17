import React from 'react'
import axios from 'axios'
function ForgotPassword() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    var all = document.forms.register_form;
    var fd = new FormData(all);
    let email = fd.get("email");
    let url = "http://localhost:5000/reset/"+email 
    let res = await axios.post(url);   
    let user = res.data.user_id
    let token =res.data.token
    if(res.data.status== "success"){ 
       let resp = await axios.post(
      "http://localhost:5000/sendmail", 
      {
        type:"reset",
        name:"there",
        email:email,
        token:token,
         user:user
      }
    ); 
    console.log(resp.data)
    if(resp.data.status == "success"){
      let element = document.querySelector('.success')
      element.style.display = "block"
    }
    }else{
      let el = document.querySelector('.error')
      el.style.display = "block"
      setTimeout(() => {
        el.style.display = "none" 
      }, 3000);
    } 
   
  }
  return (
    <div> <div className="form-gap" style={{paddingTop:"70px"}}></div>
    <div className="container" style={{marginLeft:"450px"}}>
      <div className="row">
        <div className="col-md-4 col-md-offset-6">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="text-center">
                      <h6><i className="fa fa-lock fa-4x"></i></h6>
                      <h4 className="text-center">Forgot Password?</h4>
                      <p>Enter your registered email and we'll send you instructions to reset your password.</p>
                      <div
              className="error alert alert-danger"
              style={{ display: "none" }}
              role="alert"
            >
             No user with that email found!
            </div>
            <div
              className="success alert alert-success"
              style={{ display: "none" }}
              role="alert"
            >
             Email sent with instructions to reset your password. Please check your email
            </div>
                      <div className="panel-body">
        
                        <form id="register_form" role="form" autoComplete="off" className="form" method="post" onSubmit={handleSubmit}>
        
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                              <input id="email" name="email" placeholder="Email address" className="form-control"  type="email"/>
                            </div>
                          </div>
                          <div className="form-group">
                            <input name="recover-submit" className="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit"/>
                          </div>
                          
                          <input type="hidden" className="hide" name="token" id="token" value=""/> 
                          <a href='/login' className='mr-5 pr-5' style={{fontSize:"18px"}}>Login</a><a href='/register' className='ml-5 pl-5' style={{fontSize:"18px"}}>Register</a>
                        </form>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </div>
    </div></div>
  )
}

export default ForgotPassword