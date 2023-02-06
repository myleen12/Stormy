var APIkey = "91739a09f6b5cd87988f3fbe99ab2d30";
var search = document.getElementById("search");
var searchBtn = document.getElementById("wee-btn");
var byeCity = document.getElementById("city");
var weekday
searchBtn.addEventListener("click", display);

function display() {
    console.log(search.value);
  var urlGeo =
    'http://api.openweathermap.org/geo/1.0/direct?q=' + search.value + '&limit=1&appid=91739a09f6b5cd87988f3fbe99ab2d30'

  fetch(urlGeo)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
       var lat = data[0].lat;
       var lon = data[0].lon;
       var urlforcast = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon='+ lon + '&appid=' + APIkey + '&units=imperial';

      fetch(urlforcast)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          byeCity.textContent = data.city.name;
          for (var i = 0; i < 6; i++) {
            document.getElementById("temp-" + i + "").textContent =
              "Temp: " + Number(data.list[i].main.temp).toFixed(0) + "°";
          }
          for (var i = 0; i < 6; i++) {
            document.getElementById("wind-" + i + "").textContent =
              "wind: " + Number(data.list[i].main.temp).toFixed(0) + "mph";
          }
          for (var i = 0; i < 6; i++) {
            document.getElementById("humidity-" + i + "").textContent =
              "Humidity: " + Number(data.list[i].main.temp).toFixed(0) + "%";
          }
          for (var i = 0; i < 6; i++) {
            document.getElementById("icon-" + i + "").src =
              "http://openweathermap.org/img/wn/" +
              data.list[i].weather[0].icon +
              ".png";
          }
        });
    });
}

var weekday = [
  moment().format("dddd"),
  moment().add(1, "d").format("dddd"),
  moment().add(2, "d").format("dddd"),
  moment().add(3, "d").format("dddd"),
  moment().add(4, "d").format("dddd"),
  moment().add(5, "d").format("dddd"),
  moment().add(6, "d").format("dddd"),
];
for (i = 0; i < 6; i++) {
  document.getElementById('date-' + i + "").textContent = weekday[i];
}
