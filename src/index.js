import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocationHouses from "./components/LocationHouses";
import Login from "./components/users/Login";
import AddUser from "./components/users/AddUser";
import HouseDetails from "./components/houses/HouseDetails";
import BrowseLocations from "./components/BrowseLocations";
import Welcome from "./components/admin/Welcome";
import AddHouse from "./components/admin/houses/AddHouse";
import ForgotPassword from './components/users/ForgotPassword';
import Reset from "./components/admin/users/Reset";    
import Protected from "./components/Protected"; 
import Account from "./components/admin/users/Account";
import Verify from "./components/admin/users/Verify";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( 
  <React.StrictMode> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/location/:location" element={<LocationHouses />} />
        <Route path="/register" element={<AddUser />} />
        <Route path="/house/details/:id" element={<HouseDetails />} />
        <Route path="/browse/locations" element={<BrowseLocations />} />
        <Route path="login" element={<Login />} />
        <Route path="/houses/add/:id" element={<AddHouse />} /> 
        <Route path="/profile" element={<Account />} />
        <Route path="/reset/:token/:id" element={<Reset />} />
        <Route path='/home'
         element={
           <Protected isLoggedIn={localStorage.getItem("user")} token={localStorage.getItem("token")}>
            <Welcome />
           </Protected>
         }
       />
          
       <Route path="/verify/:email" element={<Verify />} /> 
       <Route path="/forgot_password" element={<ForgotPassword />} />   
        {/* <Route path="/houses" element={<Houses />} />  
          <Route path="/user/:userId" element={<User />} /> */}
        {/* <Route path="/user" element={<User />} /> */}
        {/* <Route path="/icons" element={<Icons />} />
          <Route path="/users" element={<Table />} />
          <Route path="/typography" element={<Typography />} /> 
          <Route path="/notifications" element={<Notifications />} />                     */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
