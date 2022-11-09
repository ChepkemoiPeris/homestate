const express = require("express");  
const AppError = require("../utils/appError");
const users = require("../controllers/users.js")
const houses = require("../controllers/houses.js")
const subscribers = require("../controllers/subscribers.js")
const locations = require("../controllers/location.js")
const router = express.Router(); 
const path = require('path');
const multer = require("multer"); 
const {body} = require('express-validator');

 const storage = multer.diskStorage({
   destination: (req, file, cb) => {
       cb(null, './uploads/houses')
   },
   filename: (req, file, cb) => {
       cb(null,file.fieldname + '-' + Date.now() +  path.extname(file.originalname))
   }
 })

 const profile_storage = multer.diskStorage({
   destination: (req, file, cb) => {
       cb(null, './uploads/users')
   },
   filename: (req, file, cb) => {
       cb(null,file.fieldname + '-' + Date.now() +  path.extname(file.originalname))
   }
 })

 var upload = multer({storage:storage,fileFilter:Filter}); 
 
 function Filter (req, file, cb) {    
    const filetypes = /jpeg|jpg|png|gif/; 
    const extname =  filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);   
   if(mimetype && extname){
       return cb(null,true);
   } else {
   return cb(new AppError("Invalid image file", 404)); 
   }
  }
 
var profile_upload =multer({storage:profile_storage,fileFilter:Filter}); 



//subscribers
router.route("/subscribers/list").get(subscribers.getAllSubscribers)
router.route("/subscribers/create").post(subscribers.createSubscriber);
router.route("/subscriber/:id").get(subscribers.getSubscriber)
router.route("/subscriber/update/:id").put(subscribers.updateSubscriber)
router.route("/subscriber/delete/:id").delete(subscribers.deleteSubscriber);

//rentals
 router.route("/rentals/list").get(houses.getAllHouses) 
 router.route("/rentals/image/").get(houses.getImage) 
//  router.post("/rentals/create", upload.array("house_images",12), houses.createHouse);
 router.post("/rentals/create", upload.single('cover_image'), houses.createHouse)
 router.route("/rental/:id").get(houses.getHouse)
 router.route("/rental/update/:id").put(houses.updateHouse)
 router.route("/rental/delete/:id").delete(houses.deleteHouse) 
 
//locations

router.route("/locations").get(locations.getLocations) 
 //users
 router.route("/users/list").get(users.getAllUsers)  
 router.post('/users/login',[
   body('email',"Invalid email address")
   .notEmpty()
   .escape()
   .trim().isEmail(),
   body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 6 }),
],users.Login);

 router.post("/users/create", profile_upload.single("profile"),[
   body('first_name',"The first name must be of minimum 3 characters length")
   .notEmpty()
   .escape()
   .trim()
   .isLength({ min: 3 }),
   body('last_name',"The last name must be of minimum 3 characters length")
   .notEmpty()
   .escape()
   .trim()
   .isLength({ min: 3 }),
   body('phone',"The name must be of minimum 9 characters length")
   .notEmpty()
   .escape()
   .trim()
   .isLength({ min: 9 }),
   body('email',"Invalid email address")
   .notEmpty()
   .escape()
   .trim().isEmail(),
   body('password',"The Password must be of minimum 6 characters length").notEmpty().trim().isLength({ min: 6 }),
], users.createUser);
 router.route("/user/:id").get(users.getUser)
 router.route("/user/update/:id").put(users.updateUser)
 router.route("/user/delete/:id").delete(users.deleteUser) 

module.exports = router;