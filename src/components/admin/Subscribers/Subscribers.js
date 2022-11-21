import React,{useEffect,useState} from 'react'
import Footer from '../Footer'
import Nav from '../Nav'
import axios from 'axios'
function Subscribers() {
    const [subscribers, setSubscribers] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async()=>{
            setLoading(true) 
            const res = await axios.get('http://localhost:5000/subscribers/list')  
            setSubscribers(res.data.data)
            setLoading(false)
        }
        fetchData()
    }, [])
    console.log(subscribers)
    const handleDelete=(e)=>{
        e.preventDefault(
          console.log(e.target)
        )
      }
      
  return (
    <div class="main-panel">  
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Subscribers</h4>
                                <p class="card-category">List of All Subscribers</p>
                            </div>
                            <div className="card-body table-full-width table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead>
                                            <th>ID</th> 
                                            <th>Email</th>	
                                             <th>Location</th>						
                                            <th>Date Subscribed</th> 
                                          <th>Action</th>
                                        </thead>
                                        <tbody>
                    {(loading)? "Loading":
                    subscribers.map((e,index)=>{ 
                        let imagesrc = ""; 
    if (e.image) {
      imagesrc =
        "http://localhost:5000/rentals/image?file=" +
        e.image;
    }  
                        return(
                            <tr key={index }>
                            <td>{index +1 }</td>

                             <td>{e.email}</td>   
                             <td>{e.loc_name}</td> 
                            <td>0{e.date_created}</td>                        
                             
                            <td>
                                  <a href="#" className="delete " title="Delete" data-toggle="tooltip" onClick={handleDelete}><i className="fa fa-trash text-danger" aria-hidden="true"></i></a>
                            </td>
                        </tr>
                        )
                    })
                    }
                  
                    
                </tbody>
                                    </table>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Subscribers