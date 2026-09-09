function WeatherCard({temperature, city}) {
            let weatherContent;
    let bgColor;

    if (temperature <= 10) {
        weatherContent = (
            <>
                <h3>Freezing</h3>
                <p>Bundle up! It's really cold outside.</p>
            </>
        );
        bgColor = 'lightblue';
    }else if (temperature <=25) {
        weatherContent = (
            <>
                <h3>Pleasant</h3>
                <p>Nice weather to go for a walk.</p>
            </>
        );
        bgColor = 'lightgreen';
    }else if (temperature <= 35) {
        weatherContent = (
            <>
                <h3>Warm</h3>
                <p>It's quite warm outside. Stay hydrated!</p>
            </>
        );
        bgColor = 'khaki';
    }else {
        weatherContent = (
            <>
                <h3>Heatwave</h3>
                <p>It's extremely hot outside. Take precautions to stay cool and hydrated!</p>
            </>
        );
        bgColor = 'salmon';
    }


    return (
        <div style={{ backgroundColor: bgColor, padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
            <h2>Location: {city}</h2>
            <p>Temperature: {temperature}°C</p>
            {weatherContent}
        </div>
    );
}
export default WeatherCard;