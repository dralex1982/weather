import React from 'react';
import {useSelector} from "react-redux";
import weatherInfo from "../redux/slice/weatherSlice";

const Weather = () => {
    const {weatherInfo, message} = useSelector(state => state);

    return (
        <div style={{width: '60%', fontSize: '20px', color: '#fff'}}>
            {!message && <div>
                <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
                <p>Temp: {weatherInfo.temp}</p>
                <p>Pressure: {weatherInfo.pressure}</p>
                <p>Sunset: {new Date(weatherInfo.sunset * 1000).toLocaleTimeString()}</p>
            </div>}
            <p>{message}</p>
        </div>

    )
};

export default Weather;