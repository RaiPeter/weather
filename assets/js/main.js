$(document).ready(function () {

    var lat;
    var long;

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position) {

            lat = position.coords.latitude;
            long = position.coords.longitude;
// var searchCity=London;
            var api = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=8a34617aa63f8cbbc902e61fbbc566f0';

            // var searchCityApi='https://api.openweathermap.org/data/2.5/weather?q='+ searchCity +'&appid=8a34617aa63f8cbbc902e61fbbc566f0';
            $.getJSON(api, function (res) {

                var celsius = (res.main.temp) - 273.15;
                var farenheit = (celsius * 1.8) + 32;
                var maxTemp=(res.main.temp_max) - 273.15;
                var minTemp=(res.main.temp_min) - 273.15;

                var location = res.name;
                


                $('.city-name').html(location);
                $('.temperature').html(Math.floor(celsius)+"°C");
                $('.weather').html(res.weather[0].description.toUpperCase());
                $('.high-temp').html(Math.floor(maxTemp)+"°C");
                $('.low-temp').html(Math.floor(minTemp)+"°C");
                
                $('.temperature').on('click', function () {
                    if ($('.temperature').html() == (Math.floor(celsius)+"°C")) {
                        $('.temperature').html(Math.floor(farenheit)+"°F");


                    } else {
                        $('.temperature').html(Math.floor(celsius)+"°C");

                    }
                });

            });

           
        });
    }
  
});