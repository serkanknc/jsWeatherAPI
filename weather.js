const apiKey = "YOUR-API-KEY";

class Weather {
    constructor() {
        this.url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
        this.results = {};
    }

    async fetchWeather(country) {
        try {
            const data = await (await fetch(this.url + country)).json();
            this.results = data;

            if (this.results.error) throw new Error(this.results.error.message);

            const tempC = this.results.current.temp_c;
            const locName = this.results.location.name;
            const locTime = this.results.location.localtime;
            const desc = this.results.current.condition.text;
            const icon = this.results.current.condition.icon;
            console.log(this.results);
            const values = {
                tempC,
                locName,
                locTime,
                desc,
                icon
            };
            return values;


        } catch (error) {
            console.log("Hava durumu bilgisi alınamadı.", error);
            return null;
        }

    }
}