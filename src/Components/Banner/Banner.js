import React, {useState,useEffect } from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results);
      setMovie(response.data.results.sort(function(a,b){return 0.5 - Math.random()})[0])
    })
    

  }, [])
  
  return (
    <div style={{"--img":`url(${movie? imageUrl+movie.backdrop_path:""}) `}} className='banner'>
      

        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
             <h1 className='title'>{movie ? movie.name : ""}</h1>
            <div className='banner-buttons'>
              <button className='button'><i class="fas fa-play"></i>Play </button>
              <button className='button'><i class="fas fa-info-circle"></i>More Info</button>
              
            </div>
            <h1 className='description'>{movie ? movie.overview: ""}</h1>

        </div>
      

    </div>
  )
}

export default Banner