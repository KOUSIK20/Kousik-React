import React,{useState} from 'react'
//import clear from '../../public/Files/clear.png'
/* import cloud from '../../public/Files/cloud.png'
import drizzle from '../../public/Files/drizzle.png'
import humidity from '../../public/Files/humidity.png'
import rain from '../../public/Files/rain.png'
import search from '../../public/Files/search.png'
import snow from '../../public/Files/snow.png'
import wind from '../../public/Files/wind.png' */
export const WeatherApp = () => {
  const [wIcon,setWicon] = useState('../Files/cloud.png');
   let api_key="57151e10b57c5bb7b3066cb942e111ef";
   const search= async ()=>{
      const element = document.getElementsByClassName("cityInput")
   
   if(element[0].value===""){
return 0;
   }
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
   //let url= `https://api.openweathermap.org/data/2.5/weather?zip=${element[0].value}&units=Metric&appid=${api_key}`
  // let url = `https://api.openweathermap.org/data/2.5/weather?zip={638002},{IND}&units=Metric&appid=${api_key}` 
   let response = await fetch(url);
    let data= await  response.json()
    console.log(data.cod);
    if(data.cod === "404"){
      alert('please search with correct city name')
    }else{
    const humidity = document.getElementsByClassName("humidity-percent")
    const wind = document.getElementsByClassName("wind-rate")
    const temperature= document.getElementsByClassName("weather-temp")
    const location = document.getElementsByClassName("weather-location")
    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = data.wind.speed;
    temperature[0].innerHTML = data.main.temp.toFixed() + "°C";
    location[0].innerHTML = data.name;
    //data.weather[0].icon = '10d'

    if(data.weather[0].icon==='01d'|| data.weather[0].icon==='01n')
    {
      setWicon('../Files/clear.png')
    }
    else if(data.weather[0].icon==='02d'|| data.weather[0].icon==='02n')
    {
      setWicon('../Files/cloud.png')
    }
    else if(data.weather[0].icon==='03d'|| data.weather[0].icon==='03n')
    {
      setWicon('../Files/cloud.png')
    }
    else if(data.weather[0].icon==='04d'|| data.weather[0].icon==='04n')
    {
      setWicon('../Files/cloud.png')
    }
    else if(data.weather[0].icon==='05d'|| data.weather[0].icon==='05n')
    {
      setWicon('../Files/cloud.png')
    }
    else if(data.weather[0].icon==='09d'|| data.weather[0].icon==='09n')
    {
      setWicon('../Files/rain.png')
    }
    else if(data.weather[0].icon==='10d'|| data.weather[0].icon==='10n')
    {
      setWicon('../Files/rain.png')
    }
    else if(data.weather[0].icon==='13d'|| data.weather[0].icon==='13n')
    {
      setWicon('../Files/snow.png')
    }else {
      setWicon('../Files/clear.png')
    }
  }
    

  }
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type= 'text' className='cityInput' placeholder='Search'></input>
        
        <div className='search-icon' onClick={()=>{search()}}>
        <img src='../Files/search.png' alt=''></img>
        </div>
        </div>
        <div className='cloud'>
          <img src={wIcon} alt=''></img>
        </div>
        <div className='weather-temp'>24°C</div>
        <div className='weather-location'>London</div>
        <div className='data-container'>
          <div className='element'>
            <img src='../Files/humidity.png ' alt='' className='icon'/>
            <div className='data'>
              <div className='humidity-percent'>64%</div>
              <div className='text'>Humidity</div>
            </div>
          </div>
          <div className='element'>
            <img src='../Files/wind.png ' alt='' className='icon'/>
            <div className='data'>
              <div className='wind-rate'>18 km/hr</div>
              <div className='text'> Wind Speed</div>
            </div>
          </div>
        </div>

    </div>
  )
}


