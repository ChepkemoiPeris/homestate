import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import Login from "./components/users/Login";
// import AddUser from "./components/users/AddUser";
//  import Welcome from './components/admin/Welcome';
// import ForgotPassword from './components/users/ForgotPassword';
// import All from './components/admin/houses/All';
// import AdminDash from './components/admin/Dashboard/AdminDash';
// import User from './components/admin/Dashboard/Users/User';
// import Icons from './components/admin/Dashboard/Icons';
// import Table from './components/admin/Dashboard/Users/Table';
// import Typography from './components/admin/Dashboard/Typography';
// import Notifications from './components/admin/Dashboard/Notifications';
// import Houses from './components/admin/Dashboard/Houses/Houses'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> 
          <Route path="/" element={<App />} /> 
          {/* <Route path="login" element={<Login />} />
          <Route path="/register" element={<AddUser />} /> */}
          {/* <Route path="/home" element={<AdminDash />} />
          <Route path="/old_home" element={<Welcome />} /> */}
          {/* <Route path="/houses" element={<Houses />} />  
          <Route path="/user/:userId" element={<User />} /> */}
          {/* <Route path="/user" element={<User />} /> */}
          {/* <Route path="/icons" element={<Icons />} />
          <Route path="/users" element={<Table />} />
          <Route path="/typography" element={<Typography />} /> 
          <Route path="/notifications" element={<Notifications />} />            
          <Route path="/forgotpassword" element={<ForgotPassword />} />                  */}
      </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);
 
reportWebVitals();
