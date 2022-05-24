// JavaScript Document
let iptext = "";


//Change line 124 from false to true before packaging.  


$(document).ready(() => {
iptext = $( "#ipaddress" ).text(); 
iptext = iptext.trim();
console.log(iptext);

if(iptext == "172.98.92.108"){
	document.getElementById('pgStyle').setAttribute('href', 'css/le1style.css');//light style 1
} else if (iptext === "172.98.92.111") {
	document.getElementById('pgStyle').setAttribute('href', 'css/le2style.css');//dark style 2
};

$('#changeStyleSheet').click(function(){
	let StyleSheetDefault = '';
	StyleSheetDefault = document.getElementById('pgStyle').getAttribute('href');
	console.log(StyleSheetDefault);
	if (StyleSheetDefault === 'css/le1style.css'){
		document.getElementById('pgStyle').setAttribute('href', 'css/le2style.css');
	} else {
		document.getElementById('pgStyle').setAttribute('href', 'css/le1style.css');
	}
});

});





