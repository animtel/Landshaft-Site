var p = document.createElement('p');
p.className = 'hidden-sm hidden-xs';
p.id='watch';

setInterval(function () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    p.innerText = hours + ":" + minutes + ":" + seconds;
    document.getElementById('navik').appendChild(p);
}, 1000);