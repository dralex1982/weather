import React, {Component} from 'react';
import Form from "./Form";
import Weather from "./Weather";
import {api_key, base_url} from "../utils/constants";

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: {
                temperature: null,
                city: null,
                country: null,
                pressure: null,
                sunset: null,
                error: 'Enter city name'
            }
        }
    }

    getWeather = async city => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await response.json();
            this.setState({
                weatherInfo: {
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset,
                    message: null
                }
            })
        } catch (e) {
            this.setState({
                weatherInfo: {
                    temperature: null,
                    city: null,
                    country: null,
                    pressure: null,
                    sunset: null,
                    message: 'Enter correct city name'
                }
            })
        }
    }

    render() {
        return (
            <div>
                <Form getWeather={this.getWeather}/>
                <Weather weather={this.state.weatherInfo}/>
            </div>
        );
    }
}

export default Data;