/////////////////////////////////////////////
// currrency
const settings = {
	"async": true,
	"crossDomain": true,
     "url" : "https://currency-exchange.p.rapidapi.com/exchange?to=DZD&from=EUR&q=1",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "b4666f199amsh2ef859881f07a80p113f1djsndb5791f20742",
		"X-RapidAPI-Host": "currency-exchange.p.rapidapi.com"	
}
};

$('input[name=quantite]').change(function(){

	if ($('input[name=quantite]').val() > 0){

	$.getJSON(settings).done(function (response) {
	var dz = $('input[name=quantite]').val();
	var total = dz * response;
	console.log(total);
	$('#taux').val(total+' DZD');
	});	
		alert('--Montant converti--');
	}

});




