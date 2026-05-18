async function getWeather() {

  const city = document.getElementById("cityInput").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const apiKey = "7a1e9ab661b846ca9b670356261405";

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  try {

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("weatherCard").style.display = "block";

    document.getElementById("cityName").innerText =
      data.location.name + ", " + data.location.country;

    document.getElementById("temperature").innerText =
      data.current.temp_c + "°C";

    document.getElementById("condition").innerText =
      data.current.condition.text;

    document.getElementById("weatherIcon").src =
      "https:" + data.current.condition.icon;

  } catch (error) {
    alert("City not found!");
  }
}