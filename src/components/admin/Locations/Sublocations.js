import React,{useEffect,useState} from 'react'
import axios from 'axios'
function Sublocations({loc}) {  
   
                  
        if(loc){
          
          axios.get('http://localhost:5000/sublocation').then(resp => { 
          console.log(resp.data);
            });
          }
  return (
    <div>Sublocations</div>
  )
}

export default Sublocations