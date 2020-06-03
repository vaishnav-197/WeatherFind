import React , {useState} from 'react';
import forecast from './components/forecast';


const api = {
  key: "6ae4e210f7cb5fce015f786ecfc5d5cc",
  base: "https://api.openweathermap.org/data/2.5/"

}

function App() {
  const [query , setQuery] = useState('');
  const [weather , setWeather] = useState({});

  


  //  api call

    const search = evt => {
    if (evt.key ==="Enter" || evt.key ==="Click") {
      fetch (` ${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
       .then( res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  
  
  
  // to get date

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year= d.getFullYear();

    return ` ${day} ${date} ${month} ${year}`
  }



  // epooch to date converter

  const dateConverter = (epooch) => {
    epooch = epooch*1000;
    let myDate = new Date(epooch);
    myDate = myDate.toLocaleString()
    // myDate = myDate.getTime();
    return myDate;
    
  }


  //  background determiner

  const bg = (weather,temp) => {
    if (weather === "01d") {
      return ("App clear");
    } else if( weather === "02d" || weather === "03d" || weather === "04d") {
      return("App cloud");
    } else if( weather === "09d" || weather === "10d" ){
      return("App rain");
    } else if( weather === "11d"){
      return("App thunder");
    } else if (weather === "13d"){
      return("App mist");
    } else if(temp >16){
      return("App warm");
    } else if (temp <16){
      return("App cold");
    }
  }

  return (
    <div className={(typeof weather.main != "undefined") ? bg(weather.weather[0].icon,weather.main.temp) : 'App'}>
             
      <main>

        {/* Search Box */}
        <div className="row">
          <div className="col-12 col-sm-3"></div>
          <div className="col-12 col-sm-6">
          <div className="brand">
           <h1><img src="https://img.icons8.com/nolan/96/smiling-sun.png"/>WeatherFind </h1>
         </div>
         <div className="search-box">
           <input 
           type="text"
           className= "search-bar "
           placeholder = "search.... (city name) and press enter"
           onChange= {e => setQuery(e.target.value)}
           value ={query}
           onKeyPress= {search}
           size="50"
           />
           
           
         </div>
          </div>
          <div className="col-12 col-sm-3"></div>
        </div>
         {/* End of Search Box */}





         

          <div className="row">


         <div className="col-12 col-lg-4 ">
           {/* weather box */}
         {(typeof weather.main != "undefined") ?(
           <div>
              <div className="location-box">
                  <div className="location">{weather.name} , {weather.sys.country}</div>
                  <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                  <div className="temp">
                    {Math.round(weather.main.temp)}°c <br/>
                    <p>
                    Feels like : {weather.main.feels_like}°c 
                    </p>
                  </div>
                  
                  <div className="location-box">
                    <div className="desc"> 
                       
                       
                      {weather.weather[0].description} :
                      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                    </div>
                 </div>
                                 
                  
              </div>

           </div>
         ) : (
            null
         )}

           {/* End of weather box */}

           {/* description component */}
         </div>




         <div className="col-12 col-lg-4 details">
            {/* max and min component */}
            
              {(typeof weather.main != "undefined") ?(
                <div className="temperature" id="de">
                  <p>Max : {weather.main.temp_max}°c <br/></p>
                  <p>Min : {weather.main.temp_min}°c <br/></p>
                  <p>Wind : {weather.wind.speed } kmph <br/></p>
                  <p> Sunrise : { dateConverter( weather.sys.sunrise)}  <br/></p>
                  <p>  Sunset : { dateConverter( weather.sys.sunset)} </p>                
                  
                </div>
              ):(
              null
              )
              }
            
         </div>




         <div className="col-12 col-lg-4">
            
            <forecast/>   
            
         </div>

         </div>
         
 

         


           

          

          








          
            
      </main>
      <footer>
           <p>❤️ vaishnav | <a href="https://github.com/vaishnav-197/WeatherFind.git"> <i className="fa fa-github"></i></a> <a href="https://icons8.com/icon/80651/summer">icon by Icons8</a> </p>
                    
      </footer>
      
    </div>
  );
}

export default App;
