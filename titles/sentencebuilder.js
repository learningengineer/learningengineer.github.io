
 
buzz.defaults.formats = [ 'ogg', 'mp3' ];
buzz.defaults.preload = 'metadata';

var questions = [
    { sent: "To Kill a Mockingbird", color:'#666600', ques: "<i>Italics</i> Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "So Close, Yet So Far", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Another Level", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Catcher in the Rye", color:'#666600', ques: "Italics Quotes", word : "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "No Diggity", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The Star Spangled Banner", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The New York Times", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The New Yorker", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Super Freak", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "House of Pain", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The Journal of Behavioral Psychology", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Using Machine Teaching to Identify Optimal Training-Set Attacks on Machine Learners", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Advances in Neural Information Processing Systems", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Nature", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Science", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Scientific American", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The Journal of Law Enforcement", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "POLICE Magazine", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Police Quarterly", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Journal of Police and Criminal Psychology", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "NOVA", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Vaccines: Calling the Shots", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The Great Math Mystery", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Cook's Illustrated", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "American Pickers", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Accounting Today", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "CPA Magazine", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Art Culinaire", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Bon Appetit", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Journal of Professional Nursing", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Pediatric Nursing Journal", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Fire Engineering", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Applied Radiology", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Radiologic Technology", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "PC World", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Early Childhood Education Journal", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Teaching Young Children", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Is Sensory Processing Disorder for Real?", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Helping Sensitive Children Thrive", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Superconductivity record sparks wave of follow-up physics", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Structural integration in hypoxia-inducible factors", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "TH2 and TH17 inflammatory pathways are reciprocally regulated in asthma", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Bring Your Own Toy: Socialisation of Two-Year-Olds Through Tool-Mediated Activities in an Australian Early Childhood Education Context", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "The Checklist Manifesto", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Silent Spring", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Emotions Revealed", color:'#666600', ques: "Italics Quotes", word: "Italics", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "An Exploratory Qualitative Study of Ethical Beliefs Among Early Childhood Teachers", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Improving ECW Tactics and Policies", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "No Hat or Tie Required: Examining Minor Changes to the Police Uniform", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Perceptions of the Role of the Doctor of Nursing Practice-Prepared Nurse: Clarity or Confusion", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Sense Making and Knowledge Transfer: Capturing the Knowledge and Wisdom of Nursing Leaders", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
    { sent: "Make Healthy Pancakes for Breakfast", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Tax Perspective on Nonpublic Education", color:'#666600', ques: "Italics Quotes", word: "Quotes", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/quotesitalics.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' }


	
];
var games = questions.sort( function() { return Math.random() < 0.5 ? -1 : 1 });

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
        $sent    = $( '#sent' ),
        $models     = $( '#models' ),
        $letters    = $( '#letters' );

    $( 'body' ).bind('selectstart', function() { 
        return false 
    });

    $( '#next' ).click( function() {
        refreshGame();
        buildGame( ++idx ); 
		return false;
    });

    $( '#previous' ).click( function() {
       refreshGame();
       buildGame( --idx ); 
       return false;
    });

    $( '#level' ).click( function() {
        if ( $( this ).text() == 'easy' ) {
            $( this ).text( 'hard' );
            $models.addClass( 'hard' );
			ez = false;
        } else {
            $( this ).text( 'easy' );
            $models.removeClass( 'hard' );
			ez = true;
			refreshGame(); 
			buildGame( idx );
			return false;
        }
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
		gameSound.stop();
        $( '#models' ).html( '' );
        $( '#letters' ).html( '' );
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
			document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Remaining questions = " + NumOfQues;
		}
		
        var game  = games[ idx ],
		scoreK = 0;
		
        gameSound = new buzz.sound( game.sound );
		gameSound.load().play();

         var gmclr = "#"+((1<<24)*Math.random()|0).toString(16);
        // Fade the background color
        $( 'body' ).stop().animate({
            backgroundColor: gmclr
        }, 1000);
        $( '#header a' ).stop().animate({
            color: gmclr
        }, 1000);


        // Update the picture
        document.getElementById( "sent" ).innerHTML = game.sent; 
		txthlp = game.helptext + '<br><a href="#" onclick="popup(\'popUpDiv\')" >click to close</a>';
		document.getElementById( "popUpDiv" ).innerHTML = txthlp; 
		document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Remaining questions = " + NumOfQues; 
		//document.getElementById( "helptxt" ).innerHTML = "click for help";
		//$sent.attr( 'html', game.sent )
        //    .unbind( 'click' )
        //    .bind( 'click', function() {
		//		gameSound.increaseVolume(100);
		//		gameSound.play();
        //    });

        // Build model
        var modelLetters = game.word.split(' ');

        //for( var i in modelLetters ) {
            var letter = modelLetters;//[ i ];
            $models.append( '<li>' + letter + '</li>' );
        //}

        var letterWidth = $models.find( 'li' ).outerWidth( true );
		var letterHeight = $models.find( 'li' ).outerHeight(true);

        $models.width( letterWidth * $models.find( 'li' ).length );

        // Build shuffled letters
		var letters = game.ques.split(' ');
		
		
		 
		var shuffled = letters.sort( function() { return Math.random() < 0.5 ? -1 : 1 });

        for( var i in shuffled ) {
            $letters.append( '<li class="draggable">' + shuffled[ i ] + '</li>' );
        }

       $letters.find( 'li' ).each( function( i ) {
			var top   = ($models.offset().top - $container.offset().top * 2) + (i * letterHeight + 100),			
				left  = ($sent.width() / 2 - 30),
				angle = 0;
			
            $( this ).css({
                top:  top  + 'px',
                left: left + 'px'
            });

            rotate( this, angle );

            $( this ).mousedown( function() {
				gameSound.stop();
                var letter = $( this ).text();
                if ( alphabetSounds[ letter ] ) {
                    alphabetSounds[ letter ].play();
                }
            });
        });

        $letters.find( 'li.draggable' ).draggable({
            zIndex: 9999,
            stack: '#letters li'
        });

        $models.find( 'li' ).droppable( {
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
						document.getElementById("sent").style.textAlign = "center";
						document.getElementById( "sent" ).innerHTML = '<font style="color:red; font-size:2em;"></br>Incorrect</br></br>-10</font>'; 
						document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Remaining questions = " + NumOfQues;
						errorSound.play();
						
						setTimeout( function() {
							ui.draggable.draggable( 'option', 'revert', false );
						}, 100 );
						
						setTimeout( function() {
							document.getElementById( "sent" ).innerHTML = game.sent;
						}, 1000 );
					}
				
            }
        });
    }

    function winGame() {
        winSound.play();
		scoreKK = scoreKK + 10;
		NumOfQues = NumOfQues - 1;
		document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Remaining questions = " + NumOfQues; 
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
