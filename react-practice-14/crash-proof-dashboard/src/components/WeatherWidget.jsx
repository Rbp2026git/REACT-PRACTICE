import {useEffect, useState} from "react";
import useThrowError from "../hooks/useThrowError";

export const CITIES = {
    Patna: [25.59, 85.13],
    Delhi: [28.61, 77.20],
    Mumbai: [19.07, 72.87],
    Kolkata: [22.57, 88.36],
};

function WeatherWidget({city}) {
    const [data, setData] = useState(null);
    const throwError = useThrowError();

    useEffect(() => {

        setData(null);
        const [lat, lon] = CITIES[city];
        const controller = new AbortController();

        fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`,
            { signal: controller.signal }
        ).then((res) => {
            if(!res.ok) throw new Error(`Weather API rejected "${city} (${res.status})`);
            return res.json();
        }).then((json) => setData(json.current))
        .catch((err) => {
            if(err.name !== "AbortError") throwError(err);
        });

        return () => controller.abort();
    }, [city]);

    if(!data) return <p>Loading Wether for {city}...</p>

    return (
        <div>
            <p>{data.temperature_2m}°C</p>
            <p>{data.wind_speed_10m} km/h in {city}</p>
        </div>
    )
}
export default WeatherWidget;