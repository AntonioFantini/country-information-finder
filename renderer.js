var ke = require('key-emit')(document);
ke.pressed.on('enter', function() {
    findCoordinates();
});
ke.down.on('ctrl I', function() {
    document.getElementById('location').focus();
});
var coordinatesFinder = require("./lib/coordinates_finder.js");
document.getElementById('search-btn').addEventListener('click',function(){
    findCoordinates();
});

function logPlace(location){
    console.log(JSON.stringify(location));
    document.getElementById('locationName').innerHTML=location.name;
    document.getElementById('topLevelDomain').innerHTML=location.topLevelDomain;
    document.getElementById('alpha3Code').innerHTML=location.alpha3Code;
    document.getElementById('currencies').innerHTML=location.currencies;
    document.getElementById('callingCodes').innerHTML="+"+location.callingCodes;
    document.getElementById('capital').innerHTML=location.capital;
    document.getElementById('region').innerHTML=location.region;
    document.getElementById('languages').innerHTML=location.languages;
   document.getElementById('population').innerHTML=location.population;
   document.getElementById('borders').innerHTML= location.borders;
   document.getElementById('timezones').innerHTML=location.timezones;
   
   document.getElementById('container').style="display:block;";
}

function findCoordinates(){
     coordinatesFinder.findCoordinates(document.getElementById('location').value, logPlace);
}