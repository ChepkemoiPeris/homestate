const AppError = require("../utils/appError");
const conn = require("../services/db");
var fs = require('fs');

 exports.getAllSubscribers = (req, res, next) => {
  let sql = "SELECT subscribers.*, location.name AS loc_name FROM subscribers INNER JOIN location ON subscribers.location_id = location.id"
    conn.query(sql, function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };
 
   exports.createSubscriber = (req, res, next) => { 
    if (!req.body) return next(new AppError("No form data found", 404));
     
    const values = [req.body.email, req.body.location_id];
    try{
      conn.query("SELECT `email` FROM `subscribers` WHERE `email`=?",
      [req.body.email], function (err, data, fields) {
        if(err) return next(new AppError(err))
        if (data.length > 0) {
          return res.status(201).json({
              status:"error",
              message: "The E-mail already Subscribed. Please Unsubscribe if you would like to subscribe to a new location",
          });
      }else{
        conn.query(
          "INSERT INTO subscribers (email, location_id) VALUES(?)",
          [values],
          function (err, data, fields) {
            if (err) return next(new AppError(err, 500));
            res.status(201).json({
              status: "success",
              message: "Thank you for subscribing. We promise you won't miss any notification!",
            });
          }
        );
      }
      });     
    
     
    
    
        
    }catch(err){
        next(err);
    }
   
   };
 
   exports.getSubscriber = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No subscriber id found", 404));
    }
    conn.query(
      "SELECT * FROM subscribers WHERE id = ?",
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
 
   exports.updateSubscriber = (req, res, next) => {
    let status = req.body.status     
    if (!req.params.id) {
      return next(new AppError("No subscriber id found", 404));
    }
    let update = `UPDATE subscribers SET status='${status}' WHERE id=${req.params.id}`
      
    conn.query(
      update,
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "subscriber updated!",
        });
      }
    );
   }; 
   exports.deleteSubscriber = (req, res, next) => { 
    if (!req.params.email) {
      return next(new AppError("No subscriber email found", 404));
    }
    conn.query(
      "DELETE FROM subscribers WHERE email=?",
      [req.params.email],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "Unsubscribed Successfully!",
        });
      }
    );
   }