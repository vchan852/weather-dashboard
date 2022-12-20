// var loadDateTime = setInterval(() => {
//     $("#currentDay").text(dayjs ().format("MMMM D, dddd, ")); //h:mm:ss a
    
// }, 1000);

function initPage() {
// my unique API so i can easily call back
const APIKey = "eb11b651862feb056f1b8461d8892a0a"


initPage();


var APIKey = "&appid=eb11b651862feb056f1b8461d8892a0a=imperial"
    //fetch api
    fetch(
            "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={eb11b651862feb056f1b8461d8892a0a}"
            "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=eb11b651862feb056f1b8461d8892a0a=
