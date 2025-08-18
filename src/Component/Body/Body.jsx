import './Body.css'
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloudIcon from '@mui/icons-material/Cloud';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import {useState , useEffect , useContext} from 'react';
import axios from 'axios';
import moment from 'moment';
import {InfoContext} from '../Context/InfoContext';
import { useTranslation } from 'react-i18next';

export default function Body() {    
    const {Region , Lang} = useContext(InfoContext);
    const { t, i18n } = useTranslation();


    const [weather, setWeather] = useState({});
    const [dateAndTime, setDateAndTime] = useState(moment().format('MMMM Do YYYY'));

    let cancelAxios=null


    useEffect(() => {
    if (Lang === "English") {
        i18n.changeLanguage("en");
        document.body.dir = "ltr";
        moment.locale("en"); 
    } else if (Lang === "Arabe") {
        i18n.changeLanguage("ar");
        document.body.dir = "rtl";
        moment.locale("ar"); 
    }
    
    }, [Lang]);


    useEffect(() => {
        setDateAndTime(moment().format('MMMM Do YYYY'));
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Region},DZ&appid=a19d6d27130459185e1bc7a0e7b5a936`
            ,{
                cancelToken: new axios.CancelToken((C)=> {
                    cancelAxios = C;
                })
            }
        )
            .then(function (response) {
                // handle success
                
                setWeather({
                    region: response.data.name,
                    temperature: `${Math.round(response.data.main.temp - 273.15)}°`,
                    TempMax: `${Math.round(response.data.main.temp_max - 273.15)}°`,
                    TempMin: `${Math.round(response.data.main.temp_min - 273.15)}°`,
                    Humidity: `${response.data.main.humidity}%`,
                    Cloudy: `${response.data.clouds.all}%`,
                    Wind: `${response.data.wind.speed}km/h`,
                    description: response.data.weather[0].description,
                    icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                    
                });
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        return () => {
            console.log("cancelling ...")
            cancelAxios();
        }
            
    },[Region])


    return(
        <div className="Body">
            <div className="Body-Up">
                <div className="Up-Degree">
                    <h1 className='h1-UP'>{weather.temperature}</h1>
                </div>
                <div className="Up-Place">
                    <div className="Place-Info">
                        <h2 className='h2-Place'>{t(weather.region)}</h2>
                        <p className='p-PlaceI'>{dateAndTime}</p>                        
                    </div>
                    <div className="Place-Image">
                        <img src={weather.icon} alt="Weather Icon" width="70px"/>
                        <p className='p-PlaceD'>{t("clear sky")}</p>
                    </div>
                </div>
            </div>
            <div className="Body-Down">
                <div className="Down-Title">
                    <p className='p-Down'>{t("Current weather conditions in")} {t(weather.region)}</p>
                </div>
                <div className="Down-Info">
                        <div className="Weather-Card" >
                            <div className="Title-Info">
                                <p className='p-Title'>{t("Temp Max")}</p>
                            </div>
                            <div className="weather-Info">
                                <div className="text-info">
                                    <p className='p-Info'>{weather.TempMax}</p>
                                </div>
                                <div className="icon-info">
                                    <ThermostatIcon className='icon-Info' />
                                </div>
                            </div>
                        </div>
                        <div className="Weather-Card" >
                            <div className="Title-Info">
                                <p className='p-Title'>{t("Temp Min")}</p>
                            </div>
                            <div className="weather-Info">
                                <div className="text-info">
                                    <p className='p-Info'>{weather.TempMin}</p>
                                </div>
                                <div className="icon-info">
                                    <ThermostatIcon className='icon-Info' />
                                </div>
                            </div>
                        </div>
                        <div className="Weather-Card" >
                            <div className="Title-Info">
                                <p className='p-Title'>{t("Humidity")}</p>
                            </div>
                            <div className="weather-Info">
                                <div className="text-info">
                                    <p className='p-Info'>{weather.Humidity}</p>
                                </div>
                                <div className="icon-info">
                                    <WaterDropIcon className='icon-Info' />
                                </div>
                            </div>
                        </div>
                        <div className="Weather-Card" >
                            <div className="Title-Info">
                                <p className='p-Title'>{t("Cloudy")}</p>
                            </div>
                            <div className="weather-Info">
                                <div className="text-info">
                                    <p className='p-Info'>{weather.Cloudy}</p>
                                </div>
                                <div className="icon-info">
                                    <CloudIcon className='icon-Info' />
                                </div>
                            </div>
                        </div>
                        <div className="Weather-Card" >
                            <div className="Title-Info">
                                <p className='p-Title'>{t("Wind")}</p>
                            </div>
                            <div className="weather-Info">
                                <div className="text-info">
                                    <p className='p-Info'>{weather.Wind}</p>
                                </div>
                                <div className="icon-info">
                                    <AirIcon className='icon-Info' />
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>

    )
}