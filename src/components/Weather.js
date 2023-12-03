import React from 'react';
import {useSelector} from "react-redux";
import {Alert} from "bootstrap";

const Weather = () => {
    const weather = useSelector(store => store.weatherDetailed);
    console.log(weather.message);
    const error = useSelector(store=> store.errorMessage);
    if(error){
        return <Alert>{error}</Alert>
    }
    return (
        <div style={{width: '60%', fontSize: '20px', color: '#fff'}}>
            {weather.message ||
                (<div>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temperature: {weather.temperature}<sup>o</sup>C</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset * 1000).toTimeString()}</p>
                </div>)}
        </div>
    )
};

export default Weather;