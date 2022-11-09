const AppError = require("../utils/appError");
const conn = require("../services/db");
var fs = require('fs');

 exports.getAllSubscribers = (req, res, next) => {
    conn.query("SELECT * FROM subscribers", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };
 
   exports.createSubscriber = (req, res, next) => {
    console.log(req.body)
    if (!req.body) return next(new AppError("No form data found", 404));
     
    const values = [req.body.email, req.body.location_id];
    conn.query(
      "INSERT INTO subscribers (email, location_id) VALUES(?)",
      [values],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "Subscriber Added!",
        });
      }
    );
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
    if (!req.params.id) {
      return next(new AppError("No subscriber id found", 404));
    }
    conn.query(
      "DELETE FROM subscribers WHERE id=?",
      [req.params.id],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "subscriber deleted!",
        });
      }
    );
   }