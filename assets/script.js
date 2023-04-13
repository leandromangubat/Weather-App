$(document).ready(function () {
  function getCityName(ev) {
    ev.preventDefault();
    var cityName = $("#cityId").val().trim();
    console.log(cityName);

    var cityData = [""];
    // var cardData = [""];
    var apiUrl =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityName +
      "&appid=f6e5a7d6ad505fc9528b2883b4c7d555";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        cityData = [
          (temperature =
            Math.round(Number(data.list[0].main.temp - 273.15)).toFixed(1) +
            "C"),
          (cloud = data.list[0].weather[0].description),
          (windSpeed = Math.round(data.list[0].wind.speed * 3.6) + "km/hr"),
        ];
        displayCity();
        console.log(cityData);
        // saveData();

        $("#temp-card-1").text(
          Math.round(Number(data.list[1].main.temp - 273.15)).toFixed(1) + "C"
        );
        $("#climate-card-1").text(data.list[1].weather[0].description);
        $("#wind-spd-card-1").text(
          Math.round(data.list[1].wind.speed * 3.6) + "km/hr"
        );

        $("#temp-card-2").text(
          Math.round(Number(data.list[2].main.temp - 273.15)).toFixed(1) + "C"
        );
        $("#climate-card-2").text(data.list[2].weather[0].description);
        $("#wind-spd-card-2").text(
          Math.round(data.list[2].wind.speed * 3.6) + "km/hr"
        );

        $("#temp-card-3").text(
          Math.round(Number(data.list[3].main.temp - 273.15)).toFixed(1) + "C"
        );
        $("#climate-card-3").text(data.list[3].weather[0].description);
        $("#wind-spd-card-3").text(
          Math.round(data.list[3].wind.speed * 3.6) + "km/hr"
        );

        $("#temp-card-4").text(
          Math.round(Number(data.list[4].main.temp - 273.15)).toFixed(1) + "C"
        );
        $("#climate-card-4").text(data.list[4].weather[0].description);
        $("#wind-spd-card-4").text(
          Math.round(data.list[4].wind.speed * 3.6) + "km/hr"
        );

        $("#temp-card-5").text(
          Math.round(Number(data.list[5].main.temp - 273.15)).toFixed(1) + "C"
        );
        $("#climate-card-5").text(data.list[5].weather[0].description);
        $("#wind-spd-card-5").text(
          Math.round(data.list[5].wind.speed * 3.6) + "km/hr"
        );

        function displayCity() {
          $("#city").text(cityName);
          $("#temp").text(cityData[0]);
          $("#climate").text(cityData[1]);
          $("#wind-spd").text(cityData[2]);
        }
        // function saveData(){
        // localStorage.setItem(cityName);
        // console.log(cityName);
        // }
      }); //localStorage.getItem("")
  }
 
  
  
  $(".city-search").submit(getCityName);
});
//dispCityBtns();
// function dispCityBtns() {
//     console.log("ran");
//     var cityHistory = ["New York", "Toronto", "Los Angeles"];//TODO: Remove dummy data
//     for (var i=0; i<cityHistory.length; i++){
//         var cityNames = cityHistory[i]
//         var cityBtnEl = $("button").text(cityNames);
//         cityBtnEl.text(cityNames);
//         cityBtnEl.attr("type", "button");
//         console.log(cityBtnEl);
//         $("#cityBtnList").appendChild(cityBtnEl);
//     }
    
// }