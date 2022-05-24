
 
buzz.defaults.formats = [ 'mp3' ]; //Initializes buzz.js for audio
buzz.defaults.preload = 'metadata'; //Initializes buzz.js for audio
//var scorm = pipwerks.SCORM;



var questions = [
    { img: 'play.png', color:'#666600', word: 'probable', sound: 'sounds/probable' },
	{ img: 'play.png', color:'#808000', word: 'entrance', sound: 'sounds/entrance' }, 
	{ img: 'play.png', color:'#999900', word: 'carpe diem', sound: 'sounds/carpediem' }, 
	{ img: 'play.png', color:'#B2B200', word: 'megabytes', sound: 'sounds/megabyte' }, 
	{ img: 'play.png', color:'#CCCC00', word: 'gigabytes', sound: 'sounds/gigabytes' }, 
	{ img: 'play.png', color:'#E6E600', word: 'kilobytes', sound: 'sounds/kilobytes' }, 
	{ img: 'play.png', color:'#FFFF00', word: 'kilometers', sound: 'sounds/kilometers' }, 
	{ img: 'play.png', color:'#FFFF19', word: 'kilograms', sound: 'sounds/kilograms' }, 
	{ img: 'play.png', color:'#FFFF33', word: 'terabyte', sound: 'sounds/terabyte' },
	{ img: 'play.png', color:'#666600', word: 'fibre optics', sound: 'sounds/fibreoptics' }, 
	{ img: 'play.png', color:'#808000', word: 'javascript', sound: 'sounds/javascript' }, 
	{ img: 'play.png', color:'#999900', word: 'browser', sound: 'sounds/browser' }, 
	{ img: 'play.png', color:'#B2B200', word: 'medium', sound: 'sounds/medium' }, 
	{ img: 'play.png', color:'#CCCC00', word: 'psuedo', sound: 'sounds/psuedo' }, 
	{ img: 'play.png', color:'#E6E600', word: 'faux', sound: 'sounds/faux' }, 
	{ img: 'play.png', color:'#FFFF00', word: 'quantitative', sound: 'sounds/quantitative' }, 
	{ img: 'play.png', color:'#FFFF19', word: 'qualitative', sound: 'sounds/qualitative' }, 
	{ img: 'play.png', color:'#FFFF33', word: 'statistics', sound: 'sounds/statistics' },
	{ img: 'play.png', color:'#666600', word: 'improbable', sound: 'sounds/improbable' }, 
	{ img: 'play.png', color:'#808000', word: 'thesis', sound: 'sounds/thesis' }, 
	{ img: 'play.png', color:'#999900', word: 'theocracy', sound: 'sounds/theocracy' }, 
	{ img: 'play.png', color:'#B2B200', word: 'delusions', sound: 'sounds/delusions' }, 
	{ img: 'play.png', color:'#CCCC00', word: 'evolution', sound: 'sounds/evolution' }, 
	{ img: 'play.png', color:'#E6E600', word: 'genetics', sound: 'sounds/genetics' }, 
	{ img: 'play.png', color:'#FFFF00', word: 'geothermal', sound: 'sounds/geothermal' }, 
	{ img: 'play.png', color:'#FFFF19', word: 'hydraulic', sound: 'sounds/hydraulic' }, 
	{ img: 'play.png', color:'#FFFF33', word: 'sonography', sound: 'sounds/sonography' },
	{ img: 'play.png', color:'#666600', word: 'license', sound: 'sounds/license' }, 
	{ img: 'play.png', color:'#808000', word: 'ligament', sound: 'sounds/ligament' }, 
	{ img: 'play.png', color:'#999900', word: 'ignorance', sound: 'sounds/ignorance' }, 
	{ img: 'play.png', color:'#B2B200', word: 'inductive', sound: 'sounds/inductive' }, 
	{ img: 'play.png', color:'#CCCC00', word: 'deductive', sound: 'sounds/deductive' }, 
	{ img: 'play.png', color:'#E6E600', word: 'infrared', sound: 'sounds/infrared' }, 
	{ img: 'play.png', color:'#FFFF00', word: 'distillation', sound: 'sounds/distillation' }, 
	{ img: 'play.png', color:'#FFFF19', word: 'fermentation', sound: 'sounds/fermentation' }, 
	{ img: 'play.png', color:'#FFFF33', word: 'hemoglobin', sound: 'sounds/hemoglobin' },
	{ img: 'play.png', color:'#666600', word: 'economics', sound: 'sounds/economics' }, 
	{ img: 'play.png', color:'#808000', word: 'acumen', sound: 'sounds/acumen' }, 
	{ img: 'play.png', color:'#999900', word: 'enterprise', sound: 'sounds/enterprise' }, 
	{ img: 'play.png', color:'#B2B200', word: 'abandoned', sound: 'sounds/abandoned' }, 
	{ img: 'play.png', color:'#CCCC00', word: 'nuclear', sound: 'sounds/nuclear' }, 
	{ img: 'play.png', color:'#E6E600', word: 'null', sound: 'sounds/null' }, 
	{ img: 'play.png', color:'#FFFF00', word: 'refurbished', sound: 'sounds/refurbished' }, 
	{ img: 'play.png', color:'#FFFF19', word: 'aerodynamic', sound: 'sounds/aerodynamic' }, 
	{ img: 'play.png', color:'#FFFF33', word: 'embarrassing', sound: 'sounds/embarrassing' },
	{ img: 'play.png', color:'#666600', word: 'inconvenience', sound: 'sounds/inconvenience' }, 
	{ img: 'play.png', color:'#808000', word: 'empathetic', sound: 'sounds/empathetic' }, 
	{ img: 'play.png', color:'#999900', word: 'numerous', sound: 'sounds/numerous' }, 
	{ img: 'play.png', color:'#B2B200', word: 'anonymous', sound: 'sounds/anonymous' }, 
	{ img: 'play.png', color:'#CCCC00', word: 'onomatopoeia', sound: 'sounds/onomatopoeia' }, 
	{ img: 'play.png', color:'#E6E600', word: 'rendition', sound: 'sounds/rendition' }, 
	{ img: 'play.png', color:'#FFFF00', word: 'protein', sound: 'sounds/protein' }, 
	{ img: 'play.png', color:'#FFFF19', word: 'carbohydrates', sound: 'sounds/carbohydrates' }, 
	{ img: 'play.png', color:'#FFFF33', word: 'mitochondria', sound: 'sounds/mitochondria' },
	{ img: 'play.png', color:'#666600', word: 'bacteria', sound: 'sounds/bacteria' }, 
	{ img: 'play.png', color:'#808000', word: 'biochemical', sound: 'sounds/biochemical' }, 
	{ img: 'play.png', color:'#999900', word: 'membrane', sound: 'sounds/membrane' }, 
	{ img: 'play.png', color:'#B2B200', word: 'techniques', sound: 'sounds/techniques' }, 
	{ img: 'play.png', color:'#CCCC00', word: 'chromosomes', sound: 'sounds/chromosomes' }, 
	{ img: 'play.png', color:'#E6E600', word: 'linear', sound: 'sounds/linear' }, 
	{ img: 'play.png', color:'#FFFF00', word: 'molecule', sound: 'sounds/molecule' }, 
	{ img: 'play.png', color:'#FFFF19', word: 'speculation', sound: 'sounds/speculation' }, 
	{ img: 'play.png', color:'#FFFF33', word: 'algorithm', sound: 'sounds/algorithm' },
	{ img: 'play.png', color:'#666600', word: 'referendums', sound: 'sounds/referendums' }, 
	{ img: 'play.png', color:'#808000', word: 'meta-analysis', sound: 'sounds/meta-analysis' }, 
	{ img: 'play.png', color:'#999900', word: 'commercial', sound: 'sounds/commercial' }, 
	{ img: 'play.png', color:'#B2B200', word: 'cognitive', sound: 'sounds/cognitive' }, 
	{ img: 'play.png', color:'#CCCC00', word: 'perceived', sound: 'sounds/perceived' }, 
	{ img: 'play.png', color:'#E6E600', word: 'consequence', sound: 'sounds/consequence' }, 
	{ img: 'play.png', color:'#FFFF00', word: 'terrestrial', sound: 'sounds/terrestrial' }, 
	{ img: 'play.png', color:'#FFFF19', word: 'malignant', sound: 'sounds/malignant' }, 
	{ img: 'play.png', color:'#FFFF33', word: 'peculiar', sound: 'sounds/peculiar' }, 
	{ img: 'play.png', color:'#FFFF33', word: 'revitalize', sound: 'sounds/revitalize' },
	{ img: 'play.png', color:'#666600', word: 'consciousness', sound: 'sounds/consciousness' }, 
	{ img: 'play.png', color:'#808000', word: 'programmable', sound: 'sounds/programmable' }, 
	{ img: 'play.png', color:'#999900', word: 'numerous', sound: 'sounds/numerous' }, 
	{ img: 'play.png', color:'#B2B200', word: 'neuroscience', sound: 'sounds/neuroscience' }, 
	{ img: 'play.png', color:'#CCCC00', word: 'extraordinary', sound: 'sounds/extraordinary' }, 
	{ img: 'play.png', color:'#E6E600', word: 'nowadays', sound: 'sounds/nowadays' }, 
	{ img: 'play.png', color:'#FFFF00', word: 'spectacular', sound: 'sounds/spectacular' }, 
	{ img: 'play.png', color:'#FFFF19', word: 'infection', sound: 'sounds/infection' }, 
	{ img: 'play.png', color:'#FFFF33', word: 'infrastructure', sound: 'sounds/infrastructure' },
	{ img: 'play.png', color:'#666600', word: 'assessment', sound: 'sounds/assessment' }, 
	{ img: 'play.png', color:'#808000', word: 'legislation', sound: 'sounds/legislation' }, 
	{ img: 'play.png', color:'#999900', word: 'orwellian', sound: 'sounds/orwellian' }, 
	{ img: 'play.png', color:'#B2B200', word: 'linguist', sound: 'sounds/linguist' }, 
	{ img: 'play.png', color:'#CCCC00', word: 'ostentatiously', sound: 'sounds/ostentatiously' }, 
	{ img: 'play.png', color:'#E6E600', word: 'idiosyncratic', sound: 'sounds/idiosyncratic' }, 
	{ img: 'play.png', color:'#FFFF00', word: 'vigorous', sound: 'sounds/vigorous' }, 
	{ img: 'play.png', color:'#FFFF19', word: 'canonized', sound: 'sounds/canonized' }, //no audio
	{ img: 'play.png', color:'#FFFF33', word: 'analogy', sound: 'sounds/analogy' },
	{ img: 'play.png', color:'#666600', word: 'fallacy', sound: 'sounds/fallacy' }, 
	{ img: 'play.png', color:'#808000', word: 'exonerative', sound: 'sounds/exonerative' }, 
	{ img: 'play.png', color:'#999900', word: 'unassertiveness', sound: 'sounds/unassertiveness' }, 
	{ img: 'play.png', color:'#B2B200', word: 'culpable', sound: 'sounds/culpable' }, 
	{ img: 'play.png', color:'#CCCC00', word: 'dispossessed', sound: 'sounds/dispossessed' }, 
	{ img: 'play.png', color:'#E6E600', word: 'cadence', sound: 'sounds/cadence' }, 
	{ img: 'play.png', color:'#FFFF00', word: 'inhabitants', sound: 'sounds/inhabitants' }, 
	{ img: 'play.png', color:'#FFFF33', word: 'narcissistic', sound: 'sounds/narcississtic' } 
]; /*This is the array for the program.  There is the image file, which is replaying the word and the sentence it appears in.  Then, there is the color of the background.  
Next, is the word that you want the student to spell.  And last, is the location and name of the sound file minus the extension which will be added later */
var games = questions.sort(function() { return Math.random() < 0.5 ? -1 : 1 }); //This randomizes the order of the spelling questions.

var winSound        = new buzz.sound('sounds/win' ), //This variable represents the sound made when you get an answer correct
    errorSound      = new buzz.sound('sounds/error' ), //This variable represents the sound made when you make a mistake
    alphabetSounds  = {}, //This is the variable for the array of sounds used for the names of the letters of the alphabet.
    alphabet        = 'abcdefghijklmnopqrstuvwxyz'.split( '' ), //This is the variable for the array of alphabet letters.
	scoreKK			= 0, //This is the variable for scoring
	ez				= false, //This is the variable used to determine the level--easy or hard
	scoreK,	//Another variable for scoring
	gameSound;  //variable for the Buzz game engine

	var NumOfQues = games.length;  //Variable for the number of spelling words or questions available.
	var ScoreTotal = NumOfQues * 10; //Variable for the raw score.  Each answer is worth 10 points.
	var PercentTotal; //Variable for determining the percent correct.
	var RawTotal; 
	var incorrectLetter = 0;
	var modelLetter;
	var game; 
	var numcorrect = 0;
	var wavesurfer; 
	
for( var i in alphabet ) {
    var letter = alphabet[ i ];
    alphabetSounds[ letter ] = new buzz.sound('sounds/kid/'+ letter );  //This loads the alphabet array into the letter variable and the loads the sounds into the alphabetSounds array.  
}

$( function() {
    if ( !buzz.isSupported() ) {  //This line determines if Buzz is supported by the browser, and if it doesn't, it shows a warning.
        $('#warning').show();
    }

    var idx = 0,
        $container  = $( '#container' ), //This creates and assigns the variables for the div in the index.html file this is attached to.
        $picture    = $( '#picture' ),
        $models     = $( '#models' ),
        $letters    = $( '#letters' );
        
    


    
    $( '#next' ).click( function() {  //next button which is the greater than sign located on the right hand side of the web page.
		NumOfQues = NumOfQues - 1; //subtracts one question from the total
		PercentTotal = (scoreKK / ScoreTotal) * 100; //generates a score
		document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; //sets the score at the top of the web page
		refreshGame(); //refreshes the game
        buildGame( ++idx ); //builds the page with new information adding one to the idx array.
		return false;
    });

    $( '#previous' ).click( function() { //previous button which is the less than symbol located on the left side of the web page
       refreshGame(); //refreshes the game
       buildGame( --idx ); //builds the page with the new information subtracting one in the idx array.
       return false;
    });
	
	
	
	
    $( '#level' ).click( function() {   //this sets the ez variable and then changes the text from hard to easy or easy to hard.
	
    });

    function refreshGame() {  //this is the refresh game function.  
		wavesurfer.stop();  //stops whatever sound is playing
		wavesurfer.empty();
        $( '#models' ).html( '' ); //empties these div tags in the index.html file
        $( '#letters' ).html( '' );
        $( '#sent' ).html('');
        incorrectLetter = 0;
    }
	
	
    function buildGame( x ) {  //this is the build game function
		

        game  = games[ idx ]; //sets the game variable to where we are at in the games array

	
	
        if ( x > games.length - 1 ) { //checks the game array to see where the player is at in the array.  This prevents the game from having a negative number of questions. 
            idx = 0;
        }
        if ( x < 0 ) { 
            idx = games.length - 1;
        }
		
		
		scoreK = 0;  //sets the scoreK variable to zero
		wavesurfer = WaveSurfer.create({
	    container: '#sent',
	    waveColor: 'black',
	    progreesColor: 'gray',
	    interact: true, 
		normalize: true
	});
		
        //gameSound = new buzz.sound( game.sound ); 
		//gameSound.load().play();
		wavesurfer.empty(); 
		wavesurfer.load(game.sound + ".ogg");
		wavesurfer.on('ready', function () {
			wavesurfer.zoom(65);
		    wavesurfer.play();
		});

        // Fade the background color
        $( 'body' ).stop().animate({
            backgroundColor: game.color
        }, 1000);
        $( '#header a' ).stop().animate({
            color: game.color
        }, 1000);
		
		//Updates the score

		//reinserts the image because winGame function removes it.
		//document.getElementById("sent").innerHTML = '<img id="picture" src="play.png">';

        // Puts the letters of the word into the modelLetters array
         $( '#sent' ).click( function() {
        	
			//if (wavesurfer.isPlaying()){
				//console.log(wavesurfer.isPlaying());
				wavesurfer.stop();
			//} else {
				wavesurfer.play(); 
		
         //}
         });
        
        
        
        var modelLetters = game.word.split( '' );

        // Appeneds the letters into index.html
		for( var i in modelLetters ) {
            var letter = modelLetters[ i ];
			$models.append( '<li>' + letter + '</li>' ); 
        }
		
		//Sets the letterWidth variable to the outWidth of the models combined
        var letterWidth = $models.find( 'li' ).outerWidth( true );
		//Centers the models and the letters in the approximate middle of the web page.  
        $models.width( letterWidth * $models.find( 'li' ).length + 19 );

        // Build shuffled letters
		
		var letters = game.word.split('');
		//This adds extra letters if the game is set to hard using the most common letters
		if ( ez == false ) {
            letters.push('a','e','i','s','h','o','u');
			
        }
		//Shuffles the letters in a random pile
		var shuffled = letters.sort( function() { return Math.random() < 0.5 ? -1 : 1 });
		//Places the letters into the pile
        for( var i in shuffled ) {
            $letters.append( '<li class="draggable">' + shuffled[ i ] + '</li>' );
        }
		//Assigns values to the variables top and left
        $letters.find( 'li' ).each( function( i ) {
            //if then statement checking if the variable ez is equal to false and if it is, it assigns the variables.
			if (ez == false) {
				var top   = ( $models.position().top ) + ( Math.random() * 200 ) + 80,
					left  = ( $models.offset().left - $container.offset().left - 10) + ( Math.random() * 20 ) + ( i * letterWidth / 2),  //this line divides by two because of the extra letters added to the more difficult class
					angle = ( Math.random() * 30 ) - 10;		
			} else {
				var top   = ( $models.position().top ) + ( Math.random() * 100 ) + 80,
                left  = ( $models.offset().left - $container.offset().left ) + ( Math.random() * 20 ) + ( i * letterWidth ),
                angle = ( Math.random() * 30 ) - 10;
			
			}
			//Places the letters on the web page
            $( this ).css({
                top:  top  + 'px',
                left: left + 'px'
            }); 
			//rotates the letters so they look randomly placed. 
            rotate( this, angle );
			//If you click on the letter, it identifies the letter with audio using the alphabetSounds array and the letter variable.
            $( this ).mousedown( function() {
				wavesurfer.stop(); //stops any sound being played
                var letter = $( this ).text();  //assigns the letter variable based on the letter that the user clicks.
                if ( alphabetSounds[ letter ] ) { //checks to make sure that the letter has a value
                    alphabetSounds[ letter ].play(); //plays the audio.  
                }
            });
			
			
        });
		//If the user clicks the picker it plays the audio attached to the gameSound variable
		
		//Identifies that all the letters are draggable
        $letters.find( 'li.draggable' ).draggable({ 
            zIndex: 9999,
            stack: '#letters li'
        });
		//Identifies that all the models are droppable
        $models.find( 'li' ).droppable( {
            accept:     '.draggable',
            hoverClass: 'hover',
            drop: function( e, ui ) { //Identifies what to do if dropped onto
                	modelLetter      = $( this ).text(), //sets the modelLetter variable to the letter that has been dropped upon
                    droppedLetter = ui.helper.text(); //identifies the letter being dropped 
				
                if ( modelLetter == droppedLetter ) { //checks to see if the two variables or letters are a match and if they are continues on.
                    ui.draggable.animate( {  //drops the letter and removes the ability to drag it.
                        top:     $( this ).position().top,
                        left:     $( this ).position().left
                    } ).removeClass( 'draggable' ).draggable( 'option', 'disabled', true );
                    //rotates the letter so that it is straight
                    rotate( ui.draggable, 0 );
                    
                    scoreK++; //Adds one to the scoreK++ variable
                    //checks to see if the scoreK variable is equal to the modelLetters variable length.  If it is true it means that all the letters in the word are a match, and the user wins
                    console.log(scoreK)
                    console.log(game.word.length)
                    if ( scoreK == game.word.length ) {
                        if (incorrectLetter > 0) {
                        	console.log(incorrectLetter);
                        	loseGame();
                        } else { winGame(); } //run the winGame function
                    }    
                } else if (modelLetter != droppedLetter) {
                	scoreK++ //if it doesn't match do this
                	incorrectLetter++
                	console.log(incorrectLetter);
					ui.draggable.animate( {  //drops the letter and removes the ability to drag it.
                        top:     $( this ).position().top,
                        left:     $( this ).position().left
                    } ).removeClass( 'draggable' ).draggable( 'option', 'disabled', true );
                    //rotates the letter so that it is straight
                    rotate( ui.draggable, 0 );
					if ( scoreK == game.word.length ) {
						if (incorrectLetter > 0) {
                        loseGame();
                        }//run the winGame function
                    }
					
                }
            }
        });
    }
	function loseGame() {
			
			PercentTotal = (numcorrect / games.length) * 100; //sets the percent score
			//Adds the changes to the document
			document.getElementById("sent").style.textAlign = "center";
			document.getElementById( "sent" ).innerHTML = '<font style="color:red;  font-size:1em;"></br>Incorrect +10</font>'; 
			
			errorSound.play();
			nextWord();
		
		
	}
	
	//This function plays when all the letters match
    function winGame() {
    	numcorrect++
		winSound.play(); //plays the win sound which is Chris Hardwick saying points.
		document.getElementById("sent").style.textAlign = "center";
		document.getElementById( "sent" ).innerHTML = '<font style="color:#00FF00;  font-size:1em;"></br>Correct</font>'; 
		nextWord();
	} 
	
	function nextWord() {
		NumOfQues = NumOfQues - 1; //substracts one from the total number of questions
		//Asks if the number of question is greater than 1, and if so sets the score
		if ( NumOfQues < 1) {  
			PercentTotal = (numcorrect / games.length) * 100;
			document.getElementById( "score" ).innerHTML = "Number Correct = " + numcorrect + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
			document.getElementById("sent").style.textAlign = "center";
			document.getElementById( "sent" ).innerHTML = '<font style="color:#00FF00; font-size:1em;"></br>Percent Correct</br></br>' + PercentTotal.toFixed(2) + '%</font>'; 
			document.getElementById( "previous" ).innerHTML = "";
			document.getElementById( "next" ).innerHTML = "";
			RawTotal = numcorrect / games.length;
		} else { //If the number of questions is not greater than one do this. 
			PercentTotal = (numcorrect / games.length) * 100;
			//var setTotal = scorm.set("scorep", PercentTotal);
			document.getElementById( "score" ).innerHTML = "Number Correct = " + numcorrect.toFixed(2) + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
			
			
			//drops all the letters down away from the model frames
			$( '#letters li' ).each( function( i ) {
				var $$ = $( this );
				setTimeout( function() {
					$$.animate({
						top:'+=60px'
					});
				}, i * 300 );
			});
			//this is a timeout function for generating the next set of letters--set to three seconds
			setTimeout( function() {
				refreshGame();
				buildGame( ++idx );
			}, 3000);
		}
		
	}
	//This is the rotate function that is called previously
    function rotate( el, angle ) {
        $( el ).css({
            '-webkit-transform': 'rotate(' + angle + 'deg)',
            '-moz-transform': 'rotate(' + angle + 'deg)',
            '-ms-transform': 'rotate(' + angle + 'deg)',
            '-o-transform': 'rotate(' + angle + 'deg)',
            'transform': 'rotate(' + angle + 'deg)'
        });
    }
	
    buildGame( idx );
    
});