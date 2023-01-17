const AppError = require("../utils/appError");
const conn = require("../services/db"); 
 exports.getLocations = (req, res, next) => {
  let sql = "SELECT * FROM location"
  
  conn.query(sql, function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   }; 
    
   exports.getSublocations = (req,res,next) =>{ 
    conn.query( "SELECT location.id as loc_id,location.name as location,sublocation.id,sublocation.name as ward FROM sublocation INNER JOIN location ON sublocation.location_id = location.id", function (err, data, fields) {
        if(err) return next(new AppError(err))
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }); 
   }

   exports.getTrendingLocation = (req,res,next)=>{
    let sql ="SELECT houses.*,location.id as loc_id,location.name as loc_name,sublocation.name as ward, COUNT(*) as count FROM houses INNER JOIN location ON houses.location_id = location.id INNER JOIN sublocation ON houses.sublocation = sublocation.id WHERE houses.reviewed = 1 GROUP BY houses.location_id ORDER BY count DESC LIMIT 3"
    conn.query(sql, function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   }