const AppError = require("../utils/appError");
const conn = require("../services/db");
var fs = require('fs');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 

 exports.getAllUsers = (req, res, next) => { 
    conn.query("SELECT * FROM users", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };

   exports.createUser = async (req, res, next) => { 
    const errors = validationResult(req); 
    var imgsrc = './uploads/users/' + req.file.filename   
    const hashPass = await bcrypt.hash(req.body.password, 12);
    if(!errors.isEmpty()){ 
        return res.status(201).json({ 
          status:"error",
          message: errors.array(), 
         });
    }
    const confirm_password = req.body.confirm_password 
    if(req.body.password != confirm_password){ 
      return res.status(201).json({
        status:"error",
        message: "Passwords does not match!!",
      });
    }   
    const values = [req.body.email, req.body.first_name,req.body.last_name,req.body.phone,hashPass,req.body.date_created,req.body.role,imgsrc];  
    try{
      conn.query("SELECT `email` FROM `users` WHERE `email`=?",
      [req.body.email], function (err, data, fields) {
        if(err) return next(new AppError(err))
        if (data.length > 0) {
          return res.status(201).json({
              status:"error",
              message: "The E-mail already in use",
          });
      }else{
       conn.query(
         "INSERT INTO users (email, first_name,last_name,phone,password,date_created,role,image) VALUES(?)",
         [values],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "User Registered successfully! ",
        });
      }
    );
      }
      });     
    
     
    
    
        
    }catch(err){
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


   exports.Login = (req, res, next) => {
    const errors = validationResult(req); 
    if(!errors.isEmpty()){
      return res.status(201).json({ 
        status:"error",
        message: errors.array(), 
       });
    }
    
    try{
      conn.query("SELECT `id`,`email`,`password` FROM `users` WHERE `email`=?",
      [req.body.email], function (err, data, fields) {
        if(err) return next(new AppError(err))
        if (data.length > 0) { 
          checkData(data)           
      }else{
        return res.status(201).json({
          status:"error",
            message: "Email not found!!",
        });
      }
      });  
      const checkData = async (data)=>{ 
         const passMatch = await bcrypt.compare(req.body.password, data[0].password);
        if(!passMatch){
          return res.status(201).json({
              status:"error",
              message: "Incorrect password",
          });
      }
        const theToken = jwt.sign({id:data[0].id},'the-super-strong-secrect',{ expiresIn: '12h' });
        return res.json({
          status:"success",
            message: "Login successful",
            token:theToken
        });

      }
        
     

  }
  catch(err){
      next(err);
  }

   };



   exports.updateUser = (req, res, next) => {
    let status = req.body.status     
    if (!req.params.id) {
      return next(new AppError("No User id found", 404));
    }
    let update = `UPDATE users SET status='${status}' WHERE id=${req.params.id}`
      
    conn.query(
      update,
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "User updated!",
        });
      }
    );
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
   }