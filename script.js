
let temp = document.getElementById('temp')
let condition = document.getElementById('condition')
let locationInput = document.getElementById('location')
let pressure = document.getElementById('pressure')
let humidity = document.getElementById('humidity')
let searchBtn = document.getElementById('search_btn');
let content = document.getElementById('content')
searchBtn.addEventListener('click' , ()=>{
    let cityname = document.getElementById('userInput');
    let citynameValue = cityname.value
    let my_api_key = "3175b0a866fd28fbef6c88a1f3e5c70e"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${citynameValue}&appid=${my_api_key}`
    fetch(url).then((response)=>{
    return response.json();
}).then((response)=>{
      cityname.value = ""
      locationInput.innerText = response.name;
     condition.innerText = response.weather[0].description
     temp.innerText = parseFloat(response.main.temp - 273).toFixed(2)
     humidity.innerText = response.main.humidity
     pressure.innerText = response.main.pressure

})
})