import {getWeather} from "../data/api";
import {setErrorMessage, setWeather} from "./actions";
import {Weather} from "../model/Weather";

export const getWeatherAction = (city) => {
    return dispatch => {
        getWeather(city).then(
            result => {
                const resObj = JSON.parse(result);
                const newWeather = new Weather(resObj)
                dispatch(setWeather(newWeather));
            },
            err => {
                dispatch(setErrorMessage(err.message));
            }
        ).catch(err => {
            dispatch(setErrorMessage(err.message));
        })
    }
}