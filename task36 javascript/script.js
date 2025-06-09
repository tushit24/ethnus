function getWeather() {
  const city = document.getElementById("search-box").value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const encodedCity = encodeURIComponent(city); // <-- This line fixes it

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=778facb90692c34a3fbb8b5718908c6e&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const temperature = Math.round(data.main.temp);
      const weatherDescription = data.weather[0].description;
      const cityName = data.name;

      document.getElementById("temp").textContent = temperature;
      document.getElementById("city").textContent = cityName;
      document.getElementById("desc").textContent = weatherDescription;

      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const day = now.toLocaleDateString("en-US", { weekday: 'long' });

      document.getElementById("time").textContent = `${hours}:${minutes} ${day}`;
    })
    .catch(error => {
      alert(error.message);
    });
}
