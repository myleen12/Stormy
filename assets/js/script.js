var APIkey = '91739a09f6b5cd87988f3fbe99ab2d30'
var livecity = '';
var lon;
var lat;
var urlGeo = 'http://api.openweathermap.org/geo/1.0/direct?lat=${lat}&lon=${lon}&appid=${APIkey}&units=${metric}&lang=${lang}';
var search = document.getElementById('#search');
var searchBtn = document.getElementById('.btn')
var urlforcast = 'https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid={APIkey}&units=metric`;'


searchBtn.addEventListener('click', All);







function All() {
    var urlGeo = 'http://api.openweathermap.org/geo/1.0/direct?lat=${lat}&lon=${lon}&appid=${APIkey}&units=${metric}&lang=${lang}';
    
    fetch(urlGeo)
         .then(function (response) {
            return response.json();
        })
         .then(function (data) {
         console.log(data);
        });
    };








































