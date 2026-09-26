import { useState } from "react";
import {locationData} from "./Locationdata";

function LocationSelector () {
    const [country, setCountry] = useState('');
    const [state, setstate] = useState('');
    const [city, setCity] = useState('');

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
        setstate("");
        setCity("");
    };

    // console.log(locationData.india.states);
    const statesForCountry = country ? locationData[country].states : {};
    const handleStateChange = (e) => {
        setstate(e.target.value);
        setCity("");
    };

    const citiesForState = country && state ? locationData[country].states[state].cities : [];
    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Location Selector</h2>

            // Level: 1 Country - sabse upar, kisi per depend nahi karta
            <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-600 mb-1">Country</label>
                <select 
                id= "country" 
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleCountryChange}
                >
                    <option value=''>--Select Country--</option>
                    {Object.entries(locationData).map(([key, value]) => (
                        <option key={key} value={key}>{value.label}</option>
                    ))}
                </select>
            </div>

            // Level: 2 State - Country per depend karta hai, tap tak disabled rahta hai
            <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-600 mb-1">States</label>
                <select 
                id= "state" 
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleStateChange}
                >
                    <option value= ''>--Select State--</option>
                    {Object.entries(statesForCountry).map(([key, value]) => (
                        <option key={key} value={key} >{value.label}</option>
                    ))}
                </select>
            </div>

            // Level: 3 City - State per depend karta hai, tap tak disabled rahta hai
            <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-600 mb-1">City</label>
                <select 
                id="city"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleCityChange}
                >
                    <option value='' >--Select City--</option>
                    {citiesForState.map((city) => (
                        <option key={city} value={city} >{city}</option>
                    ))}
                </select>
            </div>

            // Selected value ka live summary
            <div className="mt-4 p-3 bg-blue-50 rounded-md text-sm text-gray-700">
                <p>
                    <strong>Selected: </strong>{" "}
                    {country ? locationData[country].label : "_"} /{" "}
                    {state ? locationData[country].states[state].label : "_"} /{" "}
                    {city || "_"}
                </p>
            </div>
        </div>
    )
}

export default LocationSelector;