import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_KEY, BASE_URL} from "../utils/constants";

export const getWeatherActions =
    createAsyncThunk('weather/fetchWeather', (city) => {
        return fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => ({
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
            }));
    })
