import { useState } from "react";
function DependentSelect () {
    const data = {
        India: ["Patna", "Mumbai", "Delhi", "Kolkata", "Bengaluru"],
        USA: ["New York", "California", "Florida", "Washington", "Texas"],
        Japan: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Sapporo"],
        China: ["Beijing", "Shanghai", "Chongqing", "Shenzhen", "Guangzhou"],
        Russia: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Kazan"],
    };
    // console.log(Object.keys(data));
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    // console.log(selectedCountry, selectedCity);

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedCity("");
    };
    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    return (
        <div>
            <select value={selectedCountry} onChange={handleCountryChange}>
                <option value={""}>--Select Country--</option>
                {Object.keys(data).map((country) => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select>

            {selectedCountry && (
                <select value={selectedCity} onChange={handleCityChange}>
                    <option value={""}>--Select City--</option>
                    {data[selectedCountry].map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
            )}

            <p>Country: {selectedCountry}</p>
            <p>City: {selectedCity}</p>
        </div>
    );
}
export default DependentSelect;