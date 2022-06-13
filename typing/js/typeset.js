$(function(){
	let mySound;
	let ndRtrnSnd;
	

	$("#theme-style").change(function() {
		checkTheme();
	});

	function checkTheme(){
		let pgStyleValue = String($("#theme-style").val());
		console.log(pgStyleValue);
		$("#pgStyle").attr("href", pgStyleValue);
		if (pgStyleValue === "css/papertyper.css") {
			var kysound = "assets/typewriter.mp3";
			var carsound = "assets/typewritercarriagereturn.mp3"
		} else {
			var kysound = "assets/keyboard.mp3";
			var carsound = "assets/carriagereturn.mp3"
		};
		console.log(kysound);
		mySound = new buzz.sound(kysound, {
			preload: true,
			autoplay: false,
			loop: true
		});
		console.log(mySound);
		console.log(carsound);
		ndRtrnSnd = new buzz.sound(carsound, {
			preload: true,
			autoplay: false,
			loop: false
		}); 
		console.log(ndRtrnSnd);
	}

	$('#enter-type-id-textarea').on('paste', function(e){
		$(this).val().replace(/\n\r?/g, '\n');	

	});




	/*$( '#typers' ).dblclick( function() { //mutes the sound if you click on the page

		mySound.toggleMute();
		ndRtrnSnd.toggleMute();
	
	});*/

	$( '#typeNow' ).click( function() { 
		checkTheme();
		$(".enter-type").css("visibility","hidden");
		$(".typed-type ").css("visibility","visible");
		var pauseTime = "^" + String($("#pause").val() * 1000) + "\n";
		console.log(pauseTime);
		var typeSpeedTime = Number($("#typespeed-id").val());
		console.log(typeSpeedTime);
		var docCode = String($("#enter-type-id-textarea").val());
		docCode = docCode.replace(/\n/g, pauseTime);
		console.log(docCode);
		var contentType = String($("#switch").val());
		console.log(contentType);
		var deStart = Number($("#delaystart-id").val());
		console.log(deStart);
			$("#typed").typed({
				strings: [docCode],
				contentType: contentType,
				typeSpeed: typeSpeedTime,
				startDelay: deStart,
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