var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();
document.getElementById('time').innerHTML = n + ' ' + time;
