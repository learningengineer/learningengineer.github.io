$(function(){
	let mySound = new buzz.sound("assets/keyboard.mp3", {
		preload: true,
		autoplay: false,
		loop: true
	});

	let ndRtrnSnd = new buzz.sound("assets/carriagereturn.mp3", {
		preload: true,
		autoplay: false,
		loop: false
	}); 

	$( '#typers' ).dblclick( function() { //mutes the sound if you click on the page
		mySound.toggleMute();
		ndRtrnSnd.toggleMute();
	
	});

	$( '#typeNow' ).click( function() { //mutes the sound if you click on the page
		$(".enter-type").css("visibility","hidden");
		$(".typed-type ").css("visibility","visible");
		var pauseTime = "^" + String($("#pause").val() * 1000) + "\n";
		console.log(pauseTime);
		var typeSpeedTime = Number($("#typespeed-id").val());
		console.log(typeSpeedTime);
		var docCode = String($("#enter-type-id-textarea").val());
		docCode = docCode.replace(/\n/g, pauseTime);
		console.log(docCode);
			$("#typed").typed({
				strings: [docCode],
				contentType: 'text',
				typeSpeed: typeSpeedTime,
				loop: false,
				loopCount: false,
				callback: function(){
					mySound.stop(); //stops the typewriter when it encounters a carat.
					ndRtrnSnd.play();  //plays the carriage return
				},
				restartPlay: function() {
					ndRtrnSnd.stop(); //stops the carriage return
					mySound.play(); //begins typing again
				},
				resetCallback: function() {
					mySound.stop();  //stops everything when complete
					ndRtrnSnd.stop(); //stops everything when complete
				}
			})
	})
	
});