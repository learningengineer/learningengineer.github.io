$(document).ready(function(){

let timeleft;

let setTime; 

let downloadTimer; 

let stIntrvl;  


$(".quicksetTime").click(function(){

	stIntrvl = $("#intervalNumberIn").val();

	$("#countdownInt").val(stIntrvl);

	timeleft = $(this).text(); 

	timeleft = timeleft.split(" ");

	switch (timeleft[1]) { 

	case 'seconds':

		switch (timeleft[0]){

			case 'Start':

				setTime = $("#cntDownTimeMin").val();

				startTimerBut(setTime);

			break;

			default:

				setTime = timeleft[0];

				startTimerBut(setTime);

		}

		break;

	case 'minutes': 

		switch (timeleft[0]){

			case 'Start':

				setTime = $("#cntDownTimeMin").val();

				setTime = setTime * 60;

				startTimerBut(setTime);

			break;

			default:

				setTime = timeleft[0];

				setTime = setTime * 60;

				startTimerBut(setTime);

		}

		break;

}

 

})	
	
	
$("#strtButSecs").click(function(){

	setTime = $("#cntDownTimeSecs").val();

				startTimerBut(setTime);
	
	
})
	
$("#strtButMin").click(function(){

	setTime = $("#cntDownTimeMin").val() * 60;

				startTimerBut(setTime);
	
	
})
	

function chckIntrvl(){

	stIntrvl = $("#countdownInt").val();

	if (stIntrvl > 1){

		$("#countdownInt").val(stIntrvl - 1);

		startTimerBut(setTime); 

	} else {

		$("#countdownInt").val(stIntrvl - 1);

	}

	

}





function startTimerBut(settingTimer){

timeleft = settingTimer; 

setTime = timeleft; 

clearInterval(downloadTimer);

document.getElementById("progressBar").max = setTime; 

downloadTimer = setInterval(runtimer, 1000);

}



function runtimer(){

	if(timeleft <= 0){

		clearInterval(downloadTimer);

		document.getElementById("countdown").innerHTML = timeleft;

		var x = document.createElement("AUDIO");

		  if (x.canPlayType("audio/wav")) {

			x.setAttribute("src","shortring.wav");

		  } else {

			x.setAttribute("src","shortring.wav");

		  }

		x.play(); 

		chckIntrvl(); 

	} else {

		document.getElementById("countdown").innerHTML = timeleft;

	}

	document.getElementById("progressBar").value = setTime - timeleft;	

	timeleft -= 1;

}

})