const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "97629b7446msh13ed2c0a357fd58p15e46ejsn4005a8f5ceac",
		"X-RapidAPI-Host": "tasty.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});