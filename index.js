
function displayTime() {
    time = new Date();
    console.log(time);
    document.getElementById('footer').innerHTML = time;
}
setInterval(displayTime, 1000);
console.log(Hello)