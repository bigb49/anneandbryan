(() => {
    const container = document.getElementById('weather');
    if (!container) return;

    const LAT = 37.39;
    const LON = -122.08;
    const API = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FLos_Angeles`;

    const weatherCodes = {
        0: ['Clear', '☀️'],
        1: ['Mostly Clear', '🌤️'],
        2: ['Partly Cloudy', '⛅'],
        3: ['Overcast', '☁️'],
        45: ['Foggy', '🌫️'],
        48: ['Foggy', '🌫️'],
        51: ['Light Drizzle', '🌦️'],
        53: ['Drizzle', '🌦️'],
        55: ['Heavy Drizzle', '🌧️'],
        61: ['Light Rain', '🌦️'],
        63: ['Rain', '🌧️'],
        65: ['Heavy Rain', '🌧️'],
        71: ['Light Snow', '🌨️'],
        73: ['Snow', '❄️'],
        75: ['Heavy Snow', '❄️'],
        80: ['Rain Showers', '🌧️'],
        81: ['Rain Showers', '🌧️'],
        82: ['Heavy Showers', '⛈️'],
        95: ['Thunderstorm', '⛈️'],
        96: ['Thunderstorm', '⛈️'],
        99: ['Thunderstorm', '⛈️'],
    };

    fetch(API)
        .then(r => r.json())
        .then(data => {
            const c = data.current;
            const temp = Math.round(c.temperature_2m);
            const humidity = c.relative_humidity_2m;
            const wind = Math.round(c.wind_speed_10m);
            const code = c.weather_code;
            const [desc, icon] = weatherCodes[code] || ['Unknown', '🌡️'];

            container.innerHTML = `
                <h2>Mountain View, CA</h2>
                <div class="weather-details">
                    <span class="weather-icon">${icon}</span>
                    <span class="weather-temp">${temp}°F</span>
                    <span class="weather-desc">${desc}</span>
                </div>
                <p class="weather-extra">Humidity ${humidity}% · Wind ${wind} mph</p>
            `;
        })
        .catch(() => {
            container.querySelector('.weather-loading').textContent = 'Weather unavailable';
        });
})();
