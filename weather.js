const apiURl = "https://api.weatherapi.com/v1/current.json?q=Cancun&key=4e5e576e864142e780a45600252403"

  fetch(apiURl)
    .then(response => {
    if(!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json();
    })
    .then(data => {
    console.log(data);
    var weatherInfo = data;
    document.getElementById("location").innerText = `Location : ${weatherInfo.location.name} - ${weatherInfo.location.country}`;
    condition.src = "https:" + weatherInfo.current.condition.icon
    temp.innerHTML = "Temperature: " + weatherInfo. current.temp_c + "°C";
    })
    .catch(error => {
    console.error("Error:", error);
    })

