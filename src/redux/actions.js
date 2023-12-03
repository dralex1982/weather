export const SET_WEATHER = 'SET_WEATHER';
export const SET_UPDATE_INPUT = "UPDATE_INPUT";
export const SET_ERROR_MESSAGE = 'ERROR_MESSAGE;'

export const setWeather = (weather) => ({
    type: SET_WEATHER,
    payload: weather,
});

export const updateInput = (inputValue) => ({
    type: SET_UPDATE_INPUT,
    payload: inputValue,
});

export const setErrorMessage = (message)=>({
    type: SET_ERROR_MESSAGE,
    payload: message
})