const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=45.84053&lon=-119.28587&appid=97736a7ce7990381579bf806d4bb426f&units=imperial";

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        }else {
            throw Error(await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt",desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();