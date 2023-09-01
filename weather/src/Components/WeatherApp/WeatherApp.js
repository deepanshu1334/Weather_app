import React, { useState } from 'react'
import './WeatherApp.css'

// import all these images
import search_icon from "../Assets/search.png"
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"
import humidity_icon from "../Assets/humidity.png"



const WeatherApp = () => {

    let api_key="dd94f859a0e52d6e4767fddf735f04a7";
    
    //icons update akrenge 
    // const [Wicon,setWicon]=useState()





    const  search=async ()=>{

        const element=document.getElementsByClassName("cityInput");
        //if input emplty then function dont execute
        // if(element[0].value== "")
        // {
        //     return 0;
        // }
        //input ma jo enter kara woh url ka ppass aage dynamically , url ko 
        //dynamic bana diya 
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response=await fetch(url);
        let data=response.json()

        console.log(data);
        const humidity=document.getElementsByClassName("humidity-percent");
        console.log(humidity)
        const wind=document.getElementsByClassName("wind-rate") ;
        const temp=document.getElementsByClassName("weather-temp");
        const location=document.getElementsByClassName('weather-location')

        //updating elements
        humidity[0].innerHTML=data.main.humidity+ "%";
        console.log(data.main.humidity);
        wind[0].innerHTML=data.wind.speed+"km/h";
        temp[0].innerHTML=data.main.temp;
        location[0].innerHTML=data.name;
    }


  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityInput' placeholder='search'/>
            <div className="search-icon" onClick={search}>
                <img src={search_icon} alt=""/>
            </div>

        </div>
        {/* topbar ends */}
        {/* weather iimgae */}
        <div className='weather-image'>
            <img src={cloud_icon} alt="" />
        </div>

        <div className="weather-temp">34°C</div>
        <div className='weather-location'>London</div>
        <div className="data-container">
            <div className='element'>
                <img src={humidity_icon} alt="" className="icon"/>
                <div className="data">
                    <div className="humidity-percent">56%</div>
                    <div className='text'>Humidity</div>

                </div>
            </div>
            <div className='element'>
                <img src={wind_icon} alt="" className="icon"/>
                <div className="data">
                    <div className="humidity-percent">18 km/hr</div>
                    <div className='text'>Wind Speed</div>

                </div>
            </div>
        </div>
        




        
    </div>
    // container div
  )
}

export default WeatherApp