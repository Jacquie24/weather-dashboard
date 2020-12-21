$(document).ready(function () {
  console.log("Document is ready");

  //   var cityName = ("#city-name");

  $("#run-search").on("click", function (event) {
    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    var cityName = $("#search-city").val();

    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&units=imperial&appid=365123eba1af25b06512788f470f09e4";

    $.ajax({
      method: "GET",
      url: queryURL,
    }).then(function (response) {
      console.log(response);
      var cityList = $("<div>");

      var city = response.name;
      var cityTitle = $("<h1>").text(city);
      cityList.append(cityTitle);
      var temp = response.main.temp;
      var tempTitle = $("<p>").text("Temperature: " + temp + " ℉");

      cityList.append(tempTitle);
      var speed = response.wind.speed;
      var speedTitle = $("<p>").text("Wind speed: " + speed);
      cityList.append(speedTitle);

      var humidity = response.main.humidity;
      var humidityTitle = $("<p>").text("Humidity: " + humidity + "%");
      cityList.append(humidityTitle);

      $("#city-name").append(cityList);

      var longitude = response.coord.lon;
      var latitude = response.coord.lat;

      var oneCallUrl =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&exclude=minutely,hourly&units=imperial&appid=365123eba1af25b06512788f470f09e4";

      $.ajax({
        method: "GET",
        url: oneCallUrl,
      }).then(function (response) {
        console.log(response);

        var uvi = response.current.uvi;
        var uviTitle = $("<p>").text("UV Index: " + uvi);
        cityList.append(uviTitle);

        var dayOne = $("<div>");

        var dateOne = new Date(response.daily[0].dt*1000).toLocaleDateString("en-US");
        var dateOneTitle = $("<h2>").text(dateOne);
        dayOne.append(dateOneTitle);

        // Pulling the icon image from url on Open Weather
        var icon =
          "http://openweathermap.org/img/wn/" +
          response.daily[0].weather[0].icon +
          "@2x.png";

        // Creating and storing an image tag
        var iconImage = $("<img>");

        // Setting the icon src attribute
        iconImage.attr("src", icon);
        iconImage.attr("alt", "weather image");

        // Appending the iconImage to the dayOne div
        dayOne.append(iconImage);

        var dtempOne = response.daily[0].temp.day;
        var dtempOneTitle = $("<p>").text("Temp: " + dtempOne);
        dayOne.append(dtempOneTitle);

        var humidityOne = response.daily[0].humidity;
        var humidityOneTitle = $("<p>").text("Humidity: " + humidityOne);
        dayOne.append(humidityOneTitle);



        $("#day-one").append(dayOne);
      });
    });
  });

  // $.ajax({
  //     method: "GET",
  //     url: oneCallUrl,
  //   }).then(function (response) {
  //     console.log(response);
  //   });
});
