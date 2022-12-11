var bgurl = "https://"+window.location.hostname+"/user/plugins/random-bg/img/";
var myArray = [bg_yourls.png','bg_fuzzy_bits.png','bg_life.png','bg_fuzzy.png','bg_diag.png', 'bg_circles.png','bg_boobs.png','bg_ants.png'];


function RandArray(array){
 var rand = Math.random()*array.length | 0;
 var randSelect = array[rand];
 return randSelect;
 } 
var randSelect = RandArray(myArray); 

document.body.style.backgroundImage= 'url(' + bgurl + randSelect + ')';
