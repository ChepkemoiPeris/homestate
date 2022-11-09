const AppError = require("../utils/appError");
const conn = require("../services/db");
var fs = require('fs');
const multer = require("multer");
const path = require('path');
 exports.getAllHouses = (req, res, next) => {
  let sql = "SELECT houses.*, location.name AS loc_name,sublocation.name as sub_name FROM houses INNER JOIN location ON houses.location_id = location.id INNER JOIN sublocation ON houses.sublocation = sublocation.id"
  
  conn.query(sql, function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };
   exports.getImage = (req,res,next)=>{   
      const pathname = path.join(__dirname,"../"+req.query.file) 
      res.sendFile(pathname);   
   }
   
   exports.createHouse = (req, res, next) => {  
    if (!req.body) return next(new AppError("No form data found", 404));
    var imgsrc = './uploads/houses/' + req.file.filename    
    const values = [req.body.name, req.body.user_id, req.body.location_id, req.body.sublocation, req.body.location_details, req.body.bedrooms, req.body.description, req.body.water, req.body.internet, req.body.parking, req.body.vacant, imgsrc, req.body.rent];
    conn.query(
      "INSERT INTO houses (name, user_id,location_id,sublocation,location_details,bedrooms,description,water,internet,parking,vacant,image,rent) VALUES(?)",
      [values],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "House Added!",
        });
      }
    );
   };
 
   exports.getHouse = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No subscriber id found", 404));
    }
    conn.query(
      "SELECT * FROM houses WHERE id = ?",
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
 
   exports.updateHouse = (req, res, next) => {
    let status = req.body.status     
    if (!req.params.id) {
      return next(new AppError("No House id found", 404));
    }
    let update = `UPDATE houses SET status='${status}' WHERE id=${req.params.id}`
      
    conn.query(
      update,
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "house updated!",
        });
      }
    );
   }; 
   exports.deleteHouse = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No house id found", 404));
    }
    conn.query(
      "DELETE FROM houses WHERE id=?",
      [req.params.id],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "house removed!",
        });
      }
    );
   }