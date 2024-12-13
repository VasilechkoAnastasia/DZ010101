function checkWeather() {
    const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';
    const cityInput = document.getElementById("enterCiti").value;
    const weatherElement = document.getElementById('weather');
    const iconw = document.getElementById('img');
    const cit = document.getElementById('city');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
    fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error('Ошибка при получении данных. Проверьте название города.');
        }
        return response.json();
    }).then((data) => {
        weatherElement.innerHTML = `${cityInput}`;
        const temperature = data.main.temp;
        const ct = data; 
        console.log(ct);
        const description = data.weather[0].description;
        const icn = data.weather[0].icon;
        console.log(data.name);
        cit.innerText = data.name + " Страна: " + `${data.sys.country}`;
        iconw.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weatherElement.innerHTML = `Текущая температура: ${temperature}°C<br>Описание: ${description}`;
    }).catch((error) => {
        console.error('Произошла ошибка:', error);
    });
}