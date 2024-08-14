const textEl = document.querySelector("#text");
const btnEl = document.querySelector("#btn");
const detailsEl = document.querySelector(".details");
const Api_key = "509227a6bdce2840968677181331c3a4";
const city = document.querySelector(".city");

let getWeather = () => {
  let cityValue = textEl.value;
  if (cityValue.length === 0) {
    detailsEl.innerHTML = "<h3>Please Enter City name</h3>";
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${Api_key}&units=metric`;
    textEl.value = "";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.name);
        console.log(data.weather[0].icon);

        detailsEl.innerHTML = `
            <h2>${data.name}</h2>
            <h4>${data.weather[0].description}</h4>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
            <h2 class="temp">${data.main.temp} &#176;</h2>
            <h3>Humidity: ${data.main.humidity}%</h3>
            <div class="minmax">
                <div class="min">
                    
                    <h3>Min</h3>
                    <p class="min-temp">${data.main.temp_min}&#176;</p>
                </div>
                <hr>
                <div class="max">
                    
                    <h3>Max</h3>
                    <p class="min-temp">${data.main.temp_max}&#176;</p>
                </div> `;
      })
      .catch(() => {
        detailsEl.innerHTML = "<h3>City Not Found</h3>";
      });
  }
};

btnEl.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
