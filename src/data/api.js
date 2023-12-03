import {API_KEY, BASE_URL} from "../utils/constants";

export const getWeather = async (city) => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(
        `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`, requestOptions);
    return await response.text();
}