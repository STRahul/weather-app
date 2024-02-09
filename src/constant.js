
import clear_icon from "./Components/Assets/clear.png";
import cloud_icon from "./Components/Assets/cloud.png";
import drizzle_icon from "./Components/Assets/drizzle.png";
import rain_icon from "./Components/Assets/rain.png";
import snow_icon from "./Components/Assets/snow.png";
import thunderstorm_icon from "./Components/Assets/thunderstorm.png";
const API_KEY = process.env.REACT_APP_API_KEY

export const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=Metric&appid=${API_KEY}&q=`

export const weathers = {
        "Clouds": cloud_icon,
        "Rain": rain_icon,
        "Snow": snow_icon,
        "Drizzle": drizzle_icon,
        "Clear": clear_icon,
        "Thunderstorm": thunderstorm_icon,
        "Mist": thunderstorm_icon,
    }

