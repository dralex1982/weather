export class Weather {
    constructor(data) {
        if (data.cod === 200) {
            this._temperature = data.main.temp || '';
            this._city = data.name || '';
            this._country = data.sys.country || '';
            this._pressure = data.main.pressure || '';
            this._sunset = data.sys.sunset || '';
        } else
            this._message = data.message;
    }

    get temperature() {
        return this._temperature;
    }

    get city() {
        return this._city;
    }

    get country() {
        return this._country;
    }

    get pressure() {
        return this._pressure;
    }

    get sunset() {
        return this._sunset;
    }

    get message() {
        return this._message;
    }
}