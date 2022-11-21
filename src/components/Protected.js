import { Navigate } from "react-router-dom"; 
import { useEffect,useState} from "react";
import axios from 'axios'
import Login from "./users/Login";
const Protected = ({ isLoggedIn,token,children }) => {  
 const [response, setResponse] = useState()
  useEffect(() => { 
    if(token){ 
      const verifyToken = async()=>{
        try {
          let res = await axios.post("http://localhost:5000/verify_token",{
            token:token
          })
      
          let data = res.data;
          setResponse(data) 
        } catch (error) {
          if(error.response.data.status == "error"){ 
            setResponse(error.response.data)
            
          }
         
        }
      } 
      verifyToken()
    }  
  }, [])
  if (!isLoggedIn) {
    return <Login message={"Please Login to continue"}/>
    // return <Navigate to="/login" replace />;
  }
  if(response){
    if(response.status == "error"){
      return <Login message={"Token expired or Invalid! Please Login Again"}/>  
   }
  }
 
  return children;
};
export default Protected;