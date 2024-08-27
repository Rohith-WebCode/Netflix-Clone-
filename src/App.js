import React, {useState} from "react";
import {original,Action,Comedy,Trending,topRated,horror,romance,documentaries} from './Urls'
import NavBar from "./Components/NavBar/NavBar";
import './app.css'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";
import Footer from "./Components/footer/footer";
import Errorgif from './img/image_processing.gif'




function App() {
  const [errorMessage, setErrorMessage] = useState(true);
  console.log(errorMessage);
  
  return (
    <div className="App">
    { errorMessage ? <div><img src={Errorgif} alt="" style={{width:'100%',height :'100vh ' ,objectFit:'fill'}}/></div>
      :
      <div>
    <NavBar/>
    <Banner/>
    <Rowpost url={original} error={setErrorMessage} title='Netflix Originals'/>
    <Rowpost url={Trending} error={setErrorMessage} title='Trending' isSmall/>
    <Rowpost url={topRated} error={setErrorMessage} title='TopRated' isSmall/>
    <Rowpost url={Action} error={setErrorMessage} title='Action' isSmall/>
    <Rowpost url={Comedy} error={setErrorMessage} title='Comedy' isSmall/>
    <Rowpost url={horror} error={setErrorMessage} title='Horror' isSmall/>
    <Rowpost url={romance} error={setErrorMessage} title='Romance' isSmall/>
    <Rowpost url={documentaries} error={setErrorMessage} title='Documentaries' isSmall/>
    <Footer/>
    </div>
  }
    </div>
  );

}

export default App;
