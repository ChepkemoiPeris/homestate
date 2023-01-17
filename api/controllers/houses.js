const AppError = require("../utils/appError");
const conn = require("../services/db");
var fs = require('fs');
const multer = require("multer");
const path = require('path');
 exports.getAllHouses = (req, res, next) => {
  let sql = "SELECT houses.*,users.first_name,users.last_name,users.email, location.name AS loc_name,sublocation.name as sub_name FROM houses INNER JOIN location ON houses.location_id = location.id INNER JOIN sublocation ON houses.sublocation = sublocation.id INNER JOIN users ON houses.user_id = users.id"
       
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
    const values = [req.body.name, req.body.user_id, req.body.location_id, req.body.sublocation, req.body.location_details, req.body.bedrooms, req.body.description, req.body.water, req.body.internet, req.body.parking, req.body.vacant, imgsrc, req.body.rent,req.body.electricity,req.body.deposit];
     
    conn.query(
      "INSERT INTO houses (name, user_id,location_id,sublocation,location_details,bedrooms,description,water,internet,parking,vacant,image,rent,electricity,deposit) VALUES(?)",
      [values],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "House Added and it's under review! You will be notified once it's approved",
          data:data
        });
      }
    );
   };
 
   exports.getHouse = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No House id found", 404));
    }
   
    conn.query(
      "SELECT houses.*,users.first_name,users.last_name,users.email, location.name AS loc_name,sublocation.name as sub_name FROM houses INNER JOIN location ON houses.location_id = location.id INNER JOIN sublocation ON houses.sublocation = sublocation.id INNER JOIN users ON houses.user_id = users.id WHERE houses.id = ?",
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
    let status = 1  
    if (!req.params.id) {
      return next(new AppError("No House id found", 404));
    }
    let update = `UPDATE houses SET reviewed='${status}' WHERE id=${req.params.id}`
      
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
   
   exports.AddMoreImages = (req,res,next) =>{ 
    let files = req.files  
    conn.query("SELECT * FROM house_images WHERE house_id=?",
    [req.params.id], function (err, data, fields) {
        if(err) return next(new AppError(err))
        let max =files.length + data.length
        if(data.length >=5 || max>5){
         return res.status(200).json({
            status: "error",
           message:"You have reached maximum upload limit"
          });
        }else{  
          files.forEach(element => {
            var newPath = './uploads/houses/more/'+element.filename                          
                const values = [req.params.id, newPath]
                conn.query(
                  "INSERT INTO house_images (house_id,image) VALUES(?)",
                  [values],
                  function (err, data, fields) {
                    if (err) return next(new AppError(err, 500));
                    res.status(201).json({
                      status: "success",
                      message: "Images Uploaded",
                      data:data
                    }); 
                  }
                );
          }); 
        }
      });
    
   }

   exports.getHouseImages=(req,res,next) => {  
    conn.query("SELECT * FROM house_images WHERE house_id=?",
    [req.params.id], function (err, data, fields) {
      res.status(201).json({
        status: "success",
        data:data
      });
    })

   } 