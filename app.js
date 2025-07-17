const cityInput = document.querySelector("#cityInput");
const searchButton = document.querySelector("#searchBtn");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const cityLocation = document.querySelector("#location");
const locationTime = document.querySelector("#locTime");
const wicon = document.querySelector("#icon");
const weatherResult = document.querySelector("#weatherResult");


const weather = new Weather();

const runEventListeners = () => {
    searchButton.addEventListener("click", searchCountry)
}

const searchCountry = async () => {
    const cityValue = cityInput.value.trim();

    if (!cityValue) {
        alert("Lutfen sehir bilgisi giriniz.");
        return;
    }

    const values = await weather.fetchWeather(cityValue);

    if (!values) {
        alert("Veri alınamadı.");
        return;
    }

    const {
        tempC: sicaklik,
        locName: lokasyon,
        locTime: yerelSaat,
        desc: aciklama,
        icon: ikon
    } = values;


    temperature.innerHTML = sicaklik+"°C";
    cityLocation.innerHTML = lokasyon;
    locationTime.innerHTML = yerelSaat;
    description.innerHTML = aciklama;
    wicon.src = "https:" + ikon;

    weatherResult.classList.remove("d-none");



}

runEventListeners();



