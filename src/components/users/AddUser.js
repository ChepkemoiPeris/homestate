import React, { useState } from "react"; 
import "../fonts/material-icon/css/material-design-iconic-font.min.css";
import logo from "../images/logofinal.PNG";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../nav";
function AddUser() {
  const navigate = useNavigate();
  const [errorMsg, setError] = useState("");
  const [successMsg, setSuccess] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    var all = document.forms.registerForm;
    var fd = new FormData(all);
    let fname = fd.get("fname");
    let lname = fd.get("lname");
    let email = fd.get("email");
    let password = fd.get("pass");
    let phone = fd.get("phone");
    let cpassword = fd.get("re_pass");
    let image = fd.get("profile");
    let date = new Date();
    let current_date =
      date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    let post_data = {
      first_name: fname,
      last_name: lname,
      email: email,
      password: password,
      phone: phone,
      confirm_password: cpassword,
      profile: image,
      date_created: current_date,
      role: 1,
    }; 
    let res = await axios.post(
      "http://localhost:5000/users/create",
      post_data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    let status = res.data.status;
    if (status == "error") {
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
        navigate("/login");
      }, 3000);
    }
  };
  return (
    <section className="signup">
      <Nav/>
      <div className="sign-container">
        <div className="signup-content">
          <div className="signup-form">
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
                className="register-form"
                id="registerForm"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <div className="text-center" style={{paddingRight:"60px"}}>
                <img
                  className="mb-2"
                  src={logo}
                  alt=""
                  width="60"
                  height="50"
                />
                <h1 className="h3 mb-3 font-weight-normal">Sign Up Here</h1>
                </div>
                <div className="form-group form-inline">
                  <label htmlFor="fname">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="fname"
                    className="form-control"
                    id="fname"
                    style={{
                      position: "relative",
                      boxSizing: "border-box",
                      marginBottom: "5px",
                      height: "auto",
                      width: "80%",
                      padding: "10px",
                      fontSize: "16px",
                    }}
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="form-group form-inline">
                  <label htmlFor="lname">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="Last Name"
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
                    required
                  />
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
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone material-icons-phone"></i>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
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
                    placeholder="Phone Number"
                    required
                  />
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
                <div className="form-group form-inline">
                  <label htmlFor="pass">
                    <i className="zmdi zmdi-lock-outline"></i>
                  </label>
                  <input
                    type="password"
                    name="re_pass"
                    id="re_pass"
                    className="form-control   "
                    style={{
                      position: "relative",
                      boxSizing: "border-box",
                      marginBottom: "10px",
                      height: "auto",
                      width: "80%",
                      padding: "10px",
                      fontSize: "16px",
                    }}
                    placeholder="Repeat Password"
                    required
                  />{" "}
                </div>
                <div className="form-group form-inline">
                  <label htmlFor="profile">
                    <i className="zmdi zmdi-image material-icons-phone"></i>
                  </label>
                  <input
                    type="file"
                    name="profile"
                    id="profile"
                    className="form-control "
                    style={{
                      position: "relative",
                      boxSizing: "border-box",
                      marginBottom: "10px",
                      height: "auto",
                      width: "80%",
                      padding: "10px",
                      fontSize: "16px",
                    }}
                    placeholder="Profile " 
                  />{" "}
                </div>

                <button
                  className="btn btn-lg btn-primary form-submit ml-1"
                  type="submit"
                >
                  Sign Up
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
                <a href={"/login"} className="signup-image-link">
                  Already a user?
                </a>

                <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddUser;
