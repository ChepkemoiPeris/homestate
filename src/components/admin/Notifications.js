import React,{useEffect,useState} from 'react'
import Footer from './Footer' 
import axios from 'axios'
function Notifications({id}) {  
     const [notifications,setNotifications] = useState([])
     const [loading,setLoading] = useState(true)
     useEffect(() => {
        const fetchData = async() =>{
            let url = 'http://localhost:5000/notifications/'+id 
           let res = await axios.get(url) 
           if(res.data.status == "success"){
            setNotifications(res.data.data) 
            setLoading(false)
           }
          
        }
        fetchData() 
     }, [])
    
  const handleClick = (e)=>{ 
    let val = e.target.id    
    let filtered = notifications.filter(e=>{
       return e.id == val
    })
    console.log(filtered)
  }       
  return (
    <div className="wrapper"> 
    <div className="main-panel">  
        <div className="content">
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Notifications</h4>
                        <p className="card-category">Check all notifications here
                        </p>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <h5>
                                    <small>Notifications </small>
                                </h5> 
                                {(!loading) ? notifications.map(e=>{  
                                    
                                    //  if(e.viewed == 0){
                                    //     console.log("zero")
                                    //  }
                                    return(
                                        <div className="alert alert-info" key={e.id}>

                                        <button type="button" aria-hidden="true" className="close" data-dismiss="alert">
                                        <i className="fa fa-times"></i>
                                        </button>
                                        <span onClick={handleClick}><em><i id={e.id}  class="fas fa-info-circle"></i></em></span>&nbsp;
                                        <span >{e.title}</span>
                                    </div>
                                    )
                                }):"Loading"}
                                 
                                
                                
                            </div>
                           
                        </div>
                        <br/>
                        <br/>
                       
                    </div>
                </div> 
                <div className="modal fade modal-mini modal-primary" id="myModal1" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header justify-content-center">
                                <div className="modal-profile">
                                    <i className="nc-icon nc-bulb-63"></i>
                                </div>
                            </div>
                            <div className="modal-body text-center">
                                <p>Always have an access to your profile</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-link btn-simple">Back</button>
                                <button type="button" className="btn btn-link btn-simple" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
         <Footer />
    </div>
</div>
  )
}

export default Notifications