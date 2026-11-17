const apiKey = "1e962117d2bb59645c6d34fd096d2c5c"; 
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const cityInput = document.getElementById("cityInput");
        const searchBtn = document.getElementById("searchBtn");
        const tempVal = document.getElementById("tempVal");
        const cityVal = document.getElementById("cityVal");
        const humidityVal = document.getElementById("humidityVal");
        const windVal = document.getElementById("windVal");
        const weatherIcon = document.getElementById("weatherIcon");
        const errorMsg = document.getElementById("errorMsg");

        async function checkWeather(city) {
            try {
                const response = await fetch(apiUrl + city + &appid=${apiKey});
                
                if (!response.ok) {
                    errorMsg.style.display = "block";
                    return;
                }

                errorMsg.style.display = "none";const data = await response.json();
                updateUI(data);
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        }

        function updateUI(data) {
            cityVal.innerHTML = data.name;
            tempVal.innerHTML = Math.round(data.main.temp) + "°C";
            humidityVal.innerHTML = data.main.humidity + "%";
            windVal.innerHTML = data.wind.speed + " m/s";

           
            const weatherCondition = data.weather[0].main;
            if (weatherCondition === "Clouds") {
                weatherIcon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
            } else if (weatherCondition === "Clear") {
                weatherIcon.innerHTML = '<i class="fa-solid fa-sun" style="color: #ffd700;"></i>';
            } else if (weatherCondition === "Rain") {weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
            } else if (weatherCondition === "Snow") {
                weatherIcon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
            } else {
                weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
            }
        }

        searchBtn.addEventListener("click", () => {
            if (cityInput.value.trim() !== "") {
                checkWeather(cityInput.value);
            }
        });

        cityInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter" && cityInput.value.trim() !== "") {
                checkWeather(cityInput.value);
            }
        });

        checkWeather("Toshkent");
        <!Doctype html>
<html>

<head>
    <title>js dars</title>
    
</head>
<body>
    <script src="obuhavo.js"></script>
    ...
</body>
</html>
