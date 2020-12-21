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
      var date = new Date(response.dt*1000).toLocaleDateString("en-US");
      var cityTitle = $("<h1>").text(city + "(" + date + ")");
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
        
        // Day one forecast

        var dayOne = $("<div>");

        var dateOne = new Date(response.daily[1].dt*1000).toLocaleDateString("en-US");
        var dateOneTitle = $("<h4>").text(dateOne);
        dayOne.append(dateOneTitle);

        // Pulling the icon image from url on Open Weather
        var icon =
          "http://openweathermap.org/img/wn/" +
          response.daily[1].weather[0].icon +
          "@2x.png";

        // Creating and storing an image tag
        var iconImage = $("<img>");
        iconImage.attr("src", icon);
        iconImage.attr("alt", "weather image");
        dayOne.append(iconImage);

        var dtempOne = response.daily[1].temp.day;
        var dtempOneTitle = $("<p>").text("Temp: " + dtempOne);
        dayOne.append(dtempOneTitle);

        var humidityOne = response.daily[1].humidity;
        var humidityOneTitle = $("<p>").text("Humidity: " + humidityOne);
        dayOne.append(humidityOneTitle);

        $("#day-one").append(dayOne);

        // Day two forecast
        var dayTwo = $("<div>");

        var dateTwo = new Date(response.daily[2].dt*1000).toLocaleDateString("en-US");
        var dateTwoTitle = $("<h4>").text(dateTwo);
        dayTwo.append(dateTwoTitle);

        // Pulling the icon image from url on Open Weather
        var icon =
          "http://openweathermap.org/img/wn/" +
          response.daily[2].weather[0].icon +
          "@2x.png";

        // Creating and storing an image tag
        var iconImage = $("<img>");
        iconImage.attr("src", icon);
        iconImage.attr("alt", "weather image");
        dayTwo.append(iconImage);

        var dtempTwo = response.daily[2].temp.day;
        var dtempTwoTitle = $("<p>").text("Temp: " + dtempTwo);
        dayTwo.append(dtempTwoTitle);

        var humidityTwo = response.daily[2].humidity;
        var humidityTwoTitle = $("<p>").text("Humidity: " + humidityTwo);
        dayTwo.append(humidityTwoTitle);



        $("#day-two").append(dayTwo);

        // Day three forecast

        var dayThree = $("<div>");

        var dateThree = new Date(response.daily[3].dt*1000).toLocaleDateString("en-US");
        var dateThreeTitle = $("<h4>").text(dateThree);
        dayThree.append(dateThreeTitle);

        // Pulling the icon image from url on Open Weather
        var icon =
          "http://openweathermap.org/img/wn/" +
          response.daily[3].weather[0].icon +
          "@2x.png";

        // Creating and storing an image tag
        var iconImage = $("<img>");
        iconImage.attr("src", icon);
        iconImage.attr("alt", "weather image");
        dayThree.append(iconImage);

        var dtempThree = response.daily[3].temp.day;
        var dtempThreeTitle = $("<p>").text("Temp: " + dtempThree);
        dayThree.append(dtempThreeTitle);

        var humidityThree = response.daily[3].humidity;
        var humidityThreeTitle = $("<p>").text("Humidity: " + humidityThree);
        dayThree.append(humidityThreeTitle);



        $("#day-three").append(dayThree);

        // Day four forecast
        var dayFour = $("<div>");

        var dateFour = new Date(response.daily[4].dt*1000).toLocaleDateString("en-US");
        var dateFourTitle = $("<h4>").text(dateFour);
        dayFour.append(dateFourTitle);

        // Pulling the icon image from url on Open Weather
        var icon =
          "http://openweathermap.org/img/wn/" +
          response.daily[4].weather[0].icon +
          "@2x.png";

        // Creating and storing an image tag
        var iconImage = $("<img>");
        iconImage.attr("src", icon);
        iconImage.attr("alt", "weather image");
        dayFour.append(iconImage);

        var dtempFour = response.daily[4].temp.day;
        var dtempFourTitle = $("<p>").text("Temp: " + dtempFour);
        dayFour.append(dtempFourTitle);

        var humidityFour = response.daily[4].humidity;
        var humidityFourTitle = $("<p>").text("Humidity: " + humidityFour);
        dayFour.append(humidityFourTitle);



        $("#day-four").append(dayFour);

        // Day five forecast
        var dayFive = $("<div>");

        var dateFive = new Date(response.daily[5].dt*1000).toLocaleDateString("en-US");
        var dateFiveTitle = $("<h4>").text(dateFive);
        dayFive.append(dateFiveTitle);

        // Pulling the icon image from url on Open Weather
        var icon =
          "http://openweathermap.org/img/wn/" +
          response.daily[5].weather[0].icon +
          "@2x.png";

        // Creating and storing an image tag
        var iconImage = $("<img>");
        iconImage.attr("src", icon);
        iconImage.attr("alt", "weather image");
        dayFive.append(iconImage);

        var dtempFive = response.daily[5].temp.day;
        var dtempFiveTitle = $("<p>").text("Temp: " + dtempFive);
        dayFive.append(dtempFiveTitle);

        var humidityFive = response.daily[5].humidity;
        var humidityFiveTitle = $("<p>").text("Humidity: " + humidityFive);
        dayFive.append(humidityFiveTitle);



        $("#day-five").append(dayFive);
      });
    });
  });

 
});
