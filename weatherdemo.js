var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=955a7bba822da7d98dc29da26bacc224';

request({
  url: url,
  json: true
}, function (error, response, body) {
  if(error) {
    console.log('Unable to fetch weather.');
  } else {
    console.log('It\'s ' + body.main.temp + ' in ' + body.name + '!');
  }
});
