import React, { useState,useEffect } from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css'
import axios from '../../axios'
import {imageUrl,API_KEY } from '../../constants/constants'



function Rowpost(props) {
  const [key,setKey]=useState('')
  const [original, setOriginal] = useState([])
  const [ytubopen,setYtubopen]= useState(false)
  useEffect(() => {
    axios.get(props.url).then((response)=>{
       console.log(response.data)
       setOriginal(response.data.results)
    })
  
    
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
    
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
     console.log(response.data)
     if(response.data.results.length!==0)
     {
           setKey(response.data.results[0])
           setYtubopen(true)
     }
     else
     {
      console.log('array empty')
     }
    })
  }
  const handlecloseytube =()=>{
    setYtubopen(false)
    setKey('')
  }
  return (
    
      
     
    <div className='rowpost'>
        <h2>{props.title}</h2>
      
        <div className="posters">
        { original.map((obj)=>
     
          <img onClick={()=>handleMovie(obj.id)} src={`${imageUrl+obj.backdrop_path}`} alt="jpg" className={props.isSmall ? 'aposter' : "poster"}/>
           

          
        )}
            
          </div>
         {ytubopen &&  (<div className="trailers"> <div className='iconse'>
             <i onClick={handlecloseytube} className="fas fa-times"></i> 
             </div>
             <Youtube videoId={key.key} opts={opts} /> 
             
         
         
         
          </div>  )}

    </div>

  )
}

export default Rowpost