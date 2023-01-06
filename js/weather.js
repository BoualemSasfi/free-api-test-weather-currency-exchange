//////////////////////////////////////////////////
// weather
const settings2 = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherapi-com.p.rapidapi.com/current.json?q=Algiers",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "b4666f199amsh2ef859881f07a80p113f1djsndb5791f20742",
		"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
	}
};

$.getJSON(settings2).done(function (response) {
	console.log(response);

	$('#blad').append('Pays: ' + response.location.country);
	$('#willaya').append('Willaya: ' +response.location.region);
	$('#lwakt').append('Date et Heure: ' +response.location.localtime);

	// $( "#sma" ).attr( "src", response.current.condition.icon ).appendTo( "#sma" );
	$('#sma').attr("src",'https:'+response.current.condition.icon);
	console.log(response.current.condition.icon);
	$('#kifach').append(response.current.condition.text);
	$('#temp').append('Température: ' +response.current.temp_c+' C°');
});

