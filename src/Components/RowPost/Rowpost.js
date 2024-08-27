import React ,{useEffect,useState}from 'react'
import './Rowpost.css'
import  {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'


function Rowpost(props) {
  // const {setErrorMessage} =props
   const [movies, setMovies] = useState([])
   const [urlid, setUrlid] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      // console.log(response.data);
      setMovies(response.data.results)
    }).catch(err=>{
      props.error(true);
    })

   
  }, [props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if (response.data.results.length!==0) {
        setUrlid(response.data.results[0])
      }else{
        console.log('trailer not found');
      }

         
    }).catch(err=>{
      props.error(true);
    })
    


  }
  console.log('mov',movies);
  
  
  
  return (
    
   <div>
      {
       
      
      
        <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=> 
          <div>


            <img  onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smollposter': 'poster'} src={`${imageUrl+obj.backdrop_path }`} alt={`${obj.title}`}/>  
            <h1 className='Movietitle'>{obj.name}</h1>
            <h1 className='Movietitle'>{obj.title}</h1>
            </div>
          
          
        )}
        {/* {movies.map((obj)=>)} */}

        </div>
      
        {  urlid &&  <Youtube opts={opts} videoId={urlid.key}/> }

    </div>
    
      }
   
   </div>
    
  )
  
}

export default Rowpost
