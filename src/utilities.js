
const opencage = require('opencage-api-client');
async function fetchWeatherData({ lat, long }) {
    const requestUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
    const response = await fetch(requestUrl)
    const dataObj = await response.json()
    return dataObj
}


async function getAddressLocation(cityName) {
    return opencage
        .geocode({ q: cityName,key:'e17a5dddd1eb4fa2b92e1b77698c9818'})
        .then((data) => {
            return data.results [0].geometry
        })
        .catch((error) => {
            console.log('error', error.message);
        });
}

export {
    fetchWeatherData,
    getAddressLocation
}