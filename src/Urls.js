import  {API_KEY} from './constants/constants'

export  const original=`discover/tv?api_key=${API_KEY}&with_networks=213`;
export  const Action = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export  const Trending=`trending/all/week?api_key=${API_KEY}&language=en-US`;
export  const topRated=`movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const Comedy = `discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horror = `discover/movie?api_key=${API_KEY}&with_genres=27`;
export const romance = `discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const documentaries = `discover/movie?api_key=${API_KEY}&with_genres=99`;