import { useState } from "react";
import "./App.css";

const API_KEY = "f36843cda4fa127d9931417903b69114";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // Fetch Weather (Async/Await)
  // =========================
  const fetchWeather = async () => {
  if (city.trim() === "") {
    setError("Please enter a city name.");
    return;
  }

  setLoading(true);
  setError("");
  setWeather(null);

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${API_KEY}`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch weather");
    }

    setWeather(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="app">
      <h1>Weather App</h1>

      {/* Search Input */}
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {/* Loading State */}
      {loading && <p className="info">Loading...</p>}

      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      {/* Weather Result */}
      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p>🌡 Temperature: {weather.main.temp} °C</p>
          <p>☁ Weather: {weather.weather[0].description}</p>
          <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
