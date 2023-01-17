const AppError = require("../utils/appError");
const conn = require("../services/db");
var fs = require("fs");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getAllUsers = (req, res, next) => {
  conn.query("SELECT * FROM users", function (err, data, fields) {
    if (err) return next(new AppError(err));
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};

exports.createUser = async (req, res, next) => {
  const errors = validationResult(req);
  var imgsrc = "";
  if (typeof req.file !== "undefined") {
    imgsrc = "./uploads/users/" + req.file.filename;
  }

  const hashPass = await bcrypt.hash(req.body.password, 12);
  if (!errors.isEmpty()) {
    return res.status(201).json({
      status: "error",
      message: errors.array(),
    });
  }
  const confirm_password = req.body.confirm_password;
  if (req.body.password != confirm_password) {
    return res.status(201).json({
      status: "error",
      message: "Passwords does not match!!",
    });
  }
  const values = [
    req.body.email,
    req.body.first_name,
    req.body.last_name,
    req.body.phone,
    hashPass,
    req.body.date_created, 
    imgsrc,
  ];
  try {
    conn.query(
      "SELECT `email` FROM `users` WHERE `email`=?",
      [req.body.email],
      function (err, data, fields) {
        if (err) return next(new AppError(err));
        if (data.length > 0) {
          return res.status(201).json({
            status: "error",
            message: "This E-mail already in registered.Please Login",
          });
        } else {
          conn.query(
            "INSERT INTO users (email, first_name,last_name,phone,password,date_created,image) VALUES(?)",
            [values],
            function (err, data, fields) {
              if (err) return next(new AppError(err, 500));
              res.status(201).json({
                status: "success",
                message: "User Registered successfully! ",
                data:data
              });
            }
          );
        }
      }
    );
  } catch (err) {
    next(err);
  }
};

exports.getUser = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No User id found", 404));
  }
  conn.query(
    "SELECT * FROM users WHERE id = ?",
    [req.params.id],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  );
};
exports.resetPassword = (req, res, next) => { 
  conn.query(
    "SELECT * FROM users WHERE email= ?",
    [req.params.email],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      if(data.length > 0){
        generateToken(data[0])         
      }else{
        return res.status(201).json({
          status: "error",
          message: "No user with that email found!" 
      })
     
    }
    function generateToken(data){ 
      var tokenObject = {
        email: data.email,
        id: data.id
    };
    let user_id = data.id
     var secret ="my-password-reset-token"
     const token = jwt.sign(tokenObject,secret, {
      expiresIn: "1200s",
    }); 
     if(token){
      let update = `UPDATE users SET reset_password_token='${token}' WHERE id=${data.id}`;
      conn.query(update, function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
       return res.status(201).json({
          status: "success",
          user_id:user_id,
          token:token 
        });
      }); 
     } 
    }
  }
  );
};
exports.Login = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(201).json({
      status: "error",
      message: errors.array(),
    });
  }

  try {
    conn.query(
      "SELECT * FROM `users` WHERE `email`=?",
      [req.body.email],
      function (err, data, fields) {
        if (err) return next(new AppError(err));
        if (data.length > 0) {
          checkData(data);
        } else {
          return res.status(201).json({
            status: "error",
            message: "Email not found!!",
          });
        }
      }
    );
    const checkData = async (data) => {
      const passMatch = await bcrypt.compare(
        req.body.password,
        data[0].password
      );
      const Active = data[0].active;
      const Verified = data[0].verified;
      if (!passMatch) {
        return res.status(201).json({
          status: "error",
          message: "Incorrect password",
        });
      }
      if (Verified == 0) {
        return res.status(201).json({
          status: "error",
          message: "Please verify your email to continue",
        });
      }
      if (Active == 0) {
        return res.status(201).json({
          status: "error",
          message: "Your account is Inactive contact Admin",
        });
      }

      const theToken = jwt.sign({ id: data[0].id }, "my-house-listings-token", {
        expiresIn: "12h",
      });
      return res.json({
        status: "success",
        message: "Login successful",
        data: data[0],
        token: theToken,
      });
    };
  } catch (err) {
    next(err);
  }
};

exports.changePassword = (req, res, next) => {
  const checkData = async (data) => {
    let length = req.body.new_pass.length;
    if(data != "verify"){
      const passMatch = await bcrypt.compare(req.body.current, data[0].password);
      if (!passMatch) {
        return res.status(201).json({
          status: "error",
          message: "Incorrect Current Password",
        });
      }
    } 
    
    if (length < 6) {
      return res.status(201).json({
        status: "error",
        message: "Password must be more than 6 characters",
      });
    }
    if (req.body.new_pass != req.body.repeat) {
      return res.status(201).json({
        status: "error",
        message: "Passwords does not match!!",
      });
    }
    const hashPass = await bcrypt.hash(req.body.new_pass, 12);
    let update = `UPDATE users SET password='${hashPass}' WHERE id=${req.params.id}`;
    conn.query(update, function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "Password changed successfully!",
      });
    });
  };
  if(req.body.token){
    const decode = jwt.verify(req.body.token, "my-password-reset-token");  
    if(decode.email){
      data = "verify"
      checkData(data)
      return
    } 
  }
  conn.query(
    "SELECT * FROM `users` WHERE `id`=?",
    [req.params.id],
    function (err, data, fields) {
      if (err) return next(new AppError(err));
      if (data.length > 0) {
        checkData(data);
      } else {
        return res.status(201).json({
          status: "error",
          message: "User not found!!",
        });
      }
    }
  );

};

exports.updateUser = (req, res, next) => {
  let status = req.body.status;
  if (!req.params.id) {
    return next(new AppError("No User id found", 404));
  }
  let update = `UPDATE users SET status='${status}' WHERE id=${req.params.id}`;

  conn.query(update, function (err, data, fields) {
    if (err) return next(new AppError(err, 500));
    res.status(201).json({
      status: "success",
      message: "User updated!",
    });
  });
};
exports.verifyUser = (req, res, next) => {
  let email = req.params.email; 
  conn.query(
    "SELECT * FROM `users` WHERE `email`=?",
    [req.params.email],
    function (err, data, fields) {
      if (err) return next(new AppError(err));
      if (data.length > 0) {
        let update = `UPDATE users SET verified=1,active = 1 WHERE email='${req.params.email}'`;

  conn.query(update, function (err, data, fields) {
    if (err) return next(new AppError(err, 500));
   return res.status(201).json({
      status: "success",
      message: "User updated!",
    });
  });
      } else {
        return res.status(201).json({
          status: "error",
          message: "User not found!!",
        });
      }
    }
  );
  if (!req.params.email) {
    return next(new AppError("No User id found", 404));
  }
 
};
exports.deleteUser = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No User id found", 404));
  }
  conn.query(
    "DELETE FROM users WHERE id=?",
    [req.params.id],
    function (err, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "User deleted!",
      });
    }
  );
};

exports.VerifyToken = (req, res, next) => {
  let token = req.body.token;
  if (token) {
    const decode = jwt.verify(token, "my-house-listings-token");
    res.json({
      login: true,
      data: decode,
    });
  } else {
    res.json({
      login: false,
      data: "error",
    });
  }
};
exports.uploadId = (req, res, next) => {
  var imgsrc = "";
  if (typeof req.file !== "undefined") {
    imgsrc = "./uploads/realtors/" + req.file.filename;
  }
  const values = [req.params.id, imgsrc];
  conn.query(
    "SELECT `user_id` FROM `realtors` WHERE `user_id`=?",
    [req.params.id],
    function (err, data, fields) {
      if (data.length > 0) {
        return res.status(201).json({
          status: "error",
          message: "Request already sent",
        });
      } else {
        let sqlquery = (cb) => {
          conn.query(
            "SELECT `id` FROM `users` WHERE `role`='admin'",
            function (err, results, fields) {
              if (results) {
                let data = results[0].id;
                cb(data);
              }
            }
          );
        };
        sqlquery((data) => {
          updateRealtors(data);
        });
        const updateRealtors = (admin) => {
          conn.query(
            "INSERT INTO realtors (user_id, id_image) VALUES(?)",
            [values],
            function (err, data, fields) {
              if (err) return next(new AppError(err, 500));
              if (data.affectedRows == 1) {
                let title = "Realtor account Request";
                var today = new Date();
                var dd = today.getDate();

                var mm = today.getMonth() + 1;
                var yyyy = today.getFullYear();
                if (dd < 10) {
                  dd = "0" + dd;
                }

                if (mm < 10) {
                  mm = "0" + mm;
                }
                today = dd + "/" + mm + "/" + yyyy;
                let details = "Request by user id" + req.params.id +" "+ "on" + " "+today;
                const notification_values = [title, details, admin, today];
                conn.query(
                  "INSERT INTO notifications (title, details,notify,date_created) VALUES(?)",
                  [notification_values],
                  function (err, data, fields) {}
                );
              }
              res.status(201).json({
                status: "success",
                message:
                  "Request received! You will be notified of the status via email",
              });
            }
          );
        };
      }
    }
  );
};
exports.getRealtors = (req,res,next)=>{
 let sql = "SELECT realtors.*,users.first_name,users.last_name,users.email FROM realtors INNER JOIN users ON realtors.user_id = users.id where realtors.approved= 0"
  conn.query(sql, function (err, data, fields) {
    if (err) return next(new AppError(err));
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
 
}