
 
buzz.defaults.formats = [ 'ogg', 'mp3' ];
buzz.defaults.preload = 'metadata';

var questions = [
    { sent: "In the morning while I was walking the dog near the lake [] I saw a ghost", ques:'; : . () , !', color:'#666600', word: ",", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://slides.practiceengineer.com/punctuation.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "I like movies that are science fiction comedies [] GalaxyQuest is the best.", ques:': ! () - , ?', color:'#666600', word: ":", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\".../revealslides/punctuation.html#dash\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Because she was talking on her phone and not paying attention [] Rachel missed the stop sign.", ques:'; : . - — " ,', color:'#666600', word: ",", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://slides.practiceengineer.com/punctuation.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Ginger wanted to go to Harvard [] her parents wanted Yale.", ques:'; : ? , - — "', color:'#666600', word: ";", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/punctuation.html#semicolon\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Why did the Japanese bomb Pearl Harbor []", ques:'; : . ? ! - — " ,', color:'#666600', word: "?", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/punctuation.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Jenny wants to know why it isn't raining []", ques:'; : . ? ! - — " ,', color:'#666600', word: ".", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/punctuation.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Influenza [] measles [] polio [] and chicken pox are viruses.", ques:"' ; : . ? ! () - — ,", color:'#666600', word: ",", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/punctuation.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "A mail-person is not hindered by rain[] snow[] sleet[] or hail.", ques:'; : . ? ! () - — " ,', color:'#666600', word: ",", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/punctuation.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Because it was snowing [] I was unable to make it to the store.", ques:'; : . ? ! () - — " ,', color:'#666600', word: ",", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/punctuation.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Although there was enough time [] I did not make it to the bakery.", ques:"; : . ? ! () - — ' ,", color:'#666600', word: ",", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/punctuation.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "On Christmas morning, children have one thing on their minds [] presents.", ques:'; . ? ! () - — ,', color:'#666600', word: "—", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/punctuation.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Jennifer wanted to know what time the meeting was starting []", color:'#666600', ques:'; : . ? ! () - — " ,', word: ".", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/punctuation.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Hey[] how is it going?", ques:'; : . ? ! () - — " ,', color:'#666600', word: ",", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/punctuation.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "STOP[] danger ahead.", ques:'; : . ? ! () - — " ', color:'#666600', word: "!", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/punctuation.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Maria[]s driver_s license is set to expire in May.", ques:"; : . ? ! ' () - — ", color:'#666600', word: "'", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/punctuation.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Joleeza said, []I don\'t understand all these tolls._", ques:'; : . ? ! () - — " ,', color:'#666600', word: '"', sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/punctuation.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "It[]s going to be a long day.", ques:"; : . ? ! () - — ' ,", color:'#666600', word: "'", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\".../revealslides/punctuation.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "On the morning before the last full moon[] we found circles cut out of the crops in our fields.", ques:'; : . ? ! () - — " ,', color:'#666600', word: ",", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/punctuation.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Fishing, boating[] and swimming are just a few of the outdoor activities you can do in Wisconsin.", ques:'; : . ? ! () - — " ,', color:'#666600', word: ",", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/punctuation.html\" frameborder=\"0\" allowfullscreen></iframe>' }

	
];
games = questions.sort( function() { return Math.random() < 0.5 ? -1 : 1 });

var winSound        = new buzz.sound('sounds/win' ),
    errorSound      = new buzz.sound('sounds/error' ),
    alphabetSounds  = {},
    //alphabet        = 'abcdefg'.split( '' ),
	scoreKK			= 0,
	ez				= false,
	txthlp,
	scoreK,
	gameSound;
	
	
var NumOfQues = games.length;
var ScoreTotal = NumOfQues * 10;
var PercentTotal;



/*for( var i in alphabet ) {
    var letter = alphabet[ i ];
    alphabetSounds[ letter ] = new buzz.sound('sounds/kid/'+ letter );
}*/

$( function() {
    if ( !buzz.isSupported() ) {
        $('#warning').show();
    }

    var idx = 0,
        $container  = $( '#container' ),
        $sent    	= $( '#sent' ),
        $models     = $( '#models' ),
        $letters    = $( '#letters' );

    $( 'body' ).bind('selectstart', function() { 
        return false 
    });

    $( '#next' ).click( function() {
		NumOfQues = NumOfQues - 1;
		PercentTotal = (scoreKK / ScoreTotal) * 100;
		document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
		refreshGame();
        buildGame( ++idx ); 
		return false;
		
    });
	
    $( '#previous' ).click( function() {
       refreshGame();
       buildGame( --idx ); 
       return false;
    });

	
	$( '#helptxt' ).click( function() {
        if ( $( this ).text() == 'click for help' ) {
            $( this ).text( 'click for no help' );
            } else {
            $( this ).text( 'click for help' );
			$('#help').text('');
			refreshGame(); 
			buildGame( idx );
			return false;
        }
        return false;
    });

    function refreshGame() {
		//gameSound.stop();
        $( '#models' ).html( '' );
        $( '#letters' ).html( '' );
        $( '#sent' ).html('');
		document.getElementById("sent").style.textAlign = "left";
    }

    function buildGame( x ) {
        if ( x > games.length - 1 ) {
            idx = 0;
        }
        if ( x < 0 ) {
            idx = games.length - 1;
        }
		

		if (NumOfQues == games.length) {
			PercentTotal = (scoreKK / ScoreTotal) * 100;
		document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
		}
		
        var game  = games[ idx ],
		scoreK = 0;
		
        //gameSound = new buzz.sound( game.sound );
		//gameSound.load().play();

         var gmclr = "#"+((1<<24)*Math.random()|0).toString(16);
        // Fade the background color
        $( 'body' ).stop().animate({
            backgroundColor: gmclr
        }, 1000);
        $( '#header a' ).stop().animate({
            color: gmclr
        }, 1000);


        // Update the picture
		txthlp = game.helptext + '<br><a href="#" onclick="popup(\'popUpDiv\')" >click to close</a>';
		document.getElementById( "popUpDiv" ).innerHTML = txthlp; 
		PercentTotal = (scoreKK / ScoreTotal) * 100;
		document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
        //document.getElementById( "helptxt" ).innerHTML = "click for help";
		//$sent.attr( 'html', game.sent )
        //    .unbind( 'click' )
        //    .bind( 'click', function() {
		//		gameSound.increaseVolume(100);
		//		gameSound.play();
        //    });
		var quessplit = game.sent.split('[]');
        // Build model
        var modelLetters = game.word.split(' ');
 		var letter = modelLetters;//[ i ];
        //$models.append( '<li>' + letter + '</li>' );
        //document.getElementById( "score" ).innerHTML = letter; 
        $sent.append("<p>" + quessplit[0] + "<ulm>" + letter + "</ulm>" + quessplit[1] + "</p>");

        var letterWidth = 50;
		var letterHeight = 40;

        $models.width( letterWidth * $models.find( 'li' ).length );

        // Build shuffled letters
		var letters = game.ques.split(' ');
		
		
		 
		var shuffled = letters.sort( function() { return Math.random() < 0.5 ? -1 : 1 });

        for( var i in shuffled ) {
            $letters.append( '<li class="draggable">' + shuffled[ i ] + '</li>' );
        }

       $letters.find( 'li' ).each( function( i ) {
				var top   = "10px",
					left  = (($models.offset().left + $container.offset().left) / (letters.length - 1)) + (i * (letterWidth + 10)),
					angle = 0;
			
            $( this ).css({
                top:  top  + 'px',
                left: left + 'px'
            });

            rotate( this, angle );

            $( this ).mousedown( function() {
            	
   				
            });
        });

        $letters.find( 'li.draggable' ).draggable({
            zIndex: 9999,
            stack: '#letters li'
        });
		
        
        $sent.find( 'ulm' ).droppable( {
            accept:     '.draggable',
            hoverClass: 'hover',
            drop: function( e, ui ) {
                var modelLetter      = $( this ).text(),
                    droppedLetter = ui.helper.text(); 

				
					if ( modelLetter == droppedLetter ) {
						ui.draggable.animate( {
							top:     $( this ).position().top,
							left:     $( this ).position().left
						} ).removeClass( 'draggable' ).draggable( 'option', 'disabled', true );
						
						rotate( ui.draggable, 0 );
						
						scoreK++;
						
						if ( scoreK == modelLetters.length ) {
							winGame();
						}    
					} else {
						ui.draggable.draggable( 'option', 'revert', true );
						scoreKK = scoreKK - 10;
						var question = $sent.find("p").detach();
						document.getElementById("sent").style.textAlign = "center";
						$sent.append('<p><font style="color:red; font-size:2em;">Incorrect<br><br>-10</font></p>'); 
						PercentTotal = (scoreKK / ScoreTotal) * 100;
						document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; errorSound.play();
						
						setTimeout( function() {
							ui.draggable.draggable( 'option', 'revert', false );
						}, 100 );
						
						setTimeout( function() {
							$sent.find("p").remove();
							question.appendTo( "#sent" );
						}, 1000 );
					}
				
            }
        });
    
    }

    function winGame() {
        winSound.play();
		scoreKK = scoreKK + 10;
		NumOfQues = NumOfQues - 1;
		$sent.empty();
		if ( NumOfQues < 1) {
			PercentTotal = (scoreKK / ScoreTotal) * 100;
			document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
			document.getElementById("sent").style.textAlign = "center";
			document.getElementById( "sent" ).innerHTML = '<font style="color:#00FF00; font-size:2em;"></br>Percent Correct</br></br>' + PercentTotal.toFixed(2) + '%</font>'; 
			document.getElementById( "previous" ).innerHTML = "";
			document.getElementById( "next" ).innerHTML = "";
		} else {
		PercentTotal = (scoreKK / ScoreTotal) * 100;
		document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
		document.getElementById("sent").style.textAlign = "center";
		document.getElementById( "sent" ).innerHTML = '<font style="color:#00FF00; font-size:2em;"></br>Correct</br></br>+10</font>'; 
        $( '#letters li' ).each( function( i ) {
            var $$ = $( this );
            setTimeout( function() {
                $$.animate({
                    top:'+=60px'
                });
            }, i * 300 );
        });


        setTimeout( function() {
            refreshGame();
            buildGame( ++idx );
        }, 3000);
    }
	}

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
