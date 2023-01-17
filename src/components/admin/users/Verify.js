import React,{useEffect,useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'; 
import axios from 'axios'
import Login from '../../users/Login';
function Verify() {  
  const params = useParams();
  let email =params.email
  const [data,setData] = useState("")
  const navigate = useNavigate();
    useEffect(() => {
      const Verify = async()=>{
        let url = 'http://localhost:5000/verify_user/'+email
        let res = await axios.post(url)
        setData(res.data)
      }
      Verify()
    }, []) 
   if(data){
    if(data.status == "error"){  
    // return navigate('/login', {message:"User with that email not found"})
      return <Login message={"User with that email not found"}/>
    }else{ 
      return <Login message={"Email Verified Successfully. Please Login to continue"}/> 
    }
     
   }
   
  
}

export default Verify