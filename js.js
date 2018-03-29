var prvi = "http://api.openweathermap.org/data/2.5/weather?q=";
var api = "&appid=fe643d8c95acfe37d655d9a24f3a68bf&units=metric";

function myFunction(){
	var grad = document.getElementById("inputGrad").value;
	var requestURL = prvi + grad + api;
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var odgovorJSON = this.response;
			var temp = odgovorJSON.main.temp;
			var minTemp = odgovorJSON.main.temp_min;
			var maxTemp = odgovorJSON.main.temp_max;
			var name = odgovorJSON.name;
			var description = odgovorJSON.weather[0].description;

			ispis(temp, minTemp, maxTemp, name, description);
		}
	};

	request.open('GET', requestURL ,true);
	request.responseType = 'json';
	request.send();

}
  function ispis(temp, minTemp, maxTemp, name, description){
        document.getElementById("temp").innerHTML = temp + "&#8451;";
        document.getElementById("mintemp").innerHTML = minTemp + "&#8451;";
        document.getElementById("maxtemp").innerHTML = maxTemp + "&#8451;";
        document.getElementById("grad").innerHTML = name;
        document.getElementById("desc").innerHTML  = description;	
    }

    function onkey(event) {
    if (event.which == 13 || event.keyCode == 13) {
        myFunction();
        return false;
    }
    return true;
};