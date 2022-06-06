	$(document).ready(function(){	
		var mySound = new buzz.sound( "typewriter.mp3");
		mySound.load(); 
		mySound.loop().play();
		
		var ndRtrnSnd = new buzz.sound ("carriagereturn.mp3");
		ndRtrnSnd.load();
		
		$( '#typers' ).click( function() {
		mySound.mute(); 
		ndRtrnSnd.mute();
	});
		 
	
	mySound.loop()
    .bind( "timeupdate", function() {
       var timer = buzz.toTimer( this.getTime() );
       document.getElementById( "timer" ).innerHTML = timer; 
    });
	  
	
	 
		$("#typed").typed({
			strings: ["<strong>LearnEngineer.org</strong> ^1000\nWe engineer learning for efficiency.^1000\n^1000\nLearningEngineer.org is a non-profit...^1000 \ndevoted to creating materials...^1000 \nthat promote...^1000 \nscience...^1000 \nreason...^1000 \nand learning.^1000\n^1000 \nLinks:^1000\n<a href='http://google.com'>Google.com</a>"],
			contentType: 'html',
			typeSpeed: 100,
            loop: false,
            loopCount: false, 
			callback: function(){
				mySound.stop();
				ndRtrnSnd.play(); 
			},
			restartPlay: function() {
			    ndRtrnSnd.stop(); 
				mySound.play();
			},
			resetCallback: function() {
				mySound.stop();
				ndRtrnSnd.stop();
			}
			
		}); 


function shift(){
    mySound.play();
}

function terminalHeight(){
  var termHeight = $(".terminal-height");
  var value = termHeight.text();
  value = parseInt(value);
  setTimeout(function(){
      if (value > 40){
          value = value-1;
          this.txtValue = value.toString();
          termHeight.text(this.txtValue);
          self.terminalHeight();
          
      }
      else{
          alert('stop');
          clearTimeout();
      }
  }, 40);}
})


 