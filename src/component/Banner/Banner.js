import React,{useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'
import Youtube from 'react-youtube'




function Banner() {
  const [movies, setMovie] = useState([])
  const [currentMovieIndex, setCurrentMovieIndex] = useState()
  const [key,setKey]=useState('')

  const [ytubopen,setYtubopen]= useState(false)
 useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results)
      const randomIndex = Math.floor(Math.random() * response.data.results.length);

      setCurrentMovieIndex(randomIndex)
      const interval = setInterval(() => {
        const newIndex = Math.floor(Math.random() * response.data.results.length);
        setCurrentMovieIndex(newIndex);
      }, 10000); // Change the movie every 10 seconds (adjust the timing as needed)

      return () => clearInterval(interval);
    })
  },[])
   
  const currentMovie = movies[currentMovieIndex];
  const opts = {
   
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const playMovie=(id)=>{
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
    
    <div style={{backgroundImage: `url(${currentMovie ? imageUrl+currentMovie.backdrop_path : ""})`}}
    className='banner'>
        <div className="content">
            <h2 className='title'>{currentMovie ? currentMovie.title : ""}</h2>
            <div className="buttons">
                <button onClick={()=>{playMovie(currentMovie.id)}} className='button'>Play...</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{currentMovie ? currentMovie.overview : "" }</h1></div>
        <div className="fade"></div>
           {ytubopen &&  (<div className="trailer"> <div className='iconses'>
             <i onClick={handlecloseytube} className="fas fa-times"></i> 
             </div>
             
             <Youtube videoId={key.key} opts={opts} /> 
             
         
         
         
          </div>  )}

    </div>
  )
}

export default Banner