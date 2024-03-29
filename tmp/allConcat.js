$(document).ready(function(){
  $('#time').text(moment());
});

var apiKey = '296a696907c2ed5c09cc9be7c62de78b';

$(document).ready(function() {
  $('form').submit(function(event) {
    $('#temperature').empty();
    $('#sunset').empty();
    event.preventDefault()
    var city = $('#city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey).then(function(response) {
      console.log(response)
      $('#humidity').text('The humidity in ' + city + ' is ' + response.main.humidity + '%');
      $('#temperature').text('The temperature in ' + city + ' is ' + response.main.temp + ' degrees');
      time = new Date(response.sys.sunset * 1000);
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      var sunsetTime = hours + ':' + minutes;
      $('#sunset').text('The sunset in ' + city + ' will be at ' + sunsetTime);
    })

    .fail(function(error) {
      $('#humidity').text(error.responseJSON.message);
    });
  });
});

// response.main.temp
// response.main.humidity
// response.sys.sunset
