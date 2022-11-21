const AppError = require("../utils/appError");
const conn = require("../services/db");
var fs = require('fs');

 exports.getNotifications = (req, res, next) => {
  let sql = "SELECT * FROM notifications"
    conn.query(sql, function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };
 
   exports.createNotification = (req, res, next) => { 
    
      
   
   };
 
   exports.getNotification = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No subscriber id found", 404));
    }
    conn.query(
      "SELECT * FROM notifications WHERE notify = ?",
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
 
   exports.updateNotification = (req, res, next) => {
    let status = req.body.viewed     
    if (!req.params.id) {
      return next(new AppError("No subscriber id found", 404));
    }
    let update = `UPDATE notifications SET viewed='${status}' WHERE id=${req.params.id}`
      
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
   exports.deleteNotification = (req, res, next) => { 
    if (!req.params.email) {
      return next(new AppError("No subscriber email found", 404));
    }
    conn.query(
      "DELETE FROM notifications WHERE id=?",
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