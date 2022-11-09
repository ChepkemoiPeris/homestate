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