
 
buzz.defaults.formats = [ 'ogg', 'mp3' ];
buzz.defaults.preload = 'metadata';

var games = [
    { sent: "In the morning while I was walking the dog near the lake_ I saw a ghost", color:'#666600', word: ",", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.com/rvlslds/punctuation.html#commas\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "I like movies that are science fiction comedies_ GalaxyQuest is the best.", color:'#666600', word: ":—", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.com/rvlslds/punctuation.html#dash\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Because she was talking on her phone and not paying attention_ Rachel missed the stop sign and ran over a child", color:'#666600', word: ",", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.com/rvlslds/punctuation.html#commas\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Ginger wanted to go to Harvard_ her parents wanted Yale.", color:'#666600', word: ";", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.com/rvlslds/punctuation.html#semicolon\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Why did the Japanese bomb Pearl Harbor_", color:'#666600', word: "?", sound: 'sounds/probable' },
	{ sent: "Jenny wants to know why it isn't raining_", color:'#666600', word: ".", sound: 'sounds/probable' },
	{ sent: "Influenza_ measles_ polio_ and chicken pox are viruses.", color:'#666600', word: ",", sound: 'sounds/probable' },
	{ sent: "A mail-person is not hindered by rain_ snow_ sleet_ or hail.", color:'#666600', word: ",", sound: 'sounds/probable' },
	{ sent: "Because it was snowing_ I was unable to make it to the store.", color:'#666600', word: ",", sound: 'sounds/probable' },
	{ sent: "Although there was enough time_ I did not make it to the bakery.", color:'#666600', word: ",", sound: 'sounds/probable' },
	{ sent: "On Christmas morning, children have one thing on their minds_ presents.", color:'#666600', word: ":", sound: 'sounds/probable' },
	{ sent: "Jennifer wanted to know what time the meeting was starting_", color:'#666600', word: ".", sound: 'sounds/probable' },
	{ sent: "Hey_ how is it going?", color:'#666600', word: ";", sound: 'sounds/probable' },
	{ sent: "STOP_ danger ahead.", color:'#666600', word: "!", sound: 'sounds/probable' },
	{ sent: "Maria_s driver_s license is set to expire in May.", color:'#666600', word: "'", sound: 'sounds/probable' },
	{ sent: "Joleeza said, _I dont understand all these tolls._", color:'#666600', word: '"', sound: 'sounds/probable' }

	
];

var winSound        = new buzz.sound('sounds/win' ),
    errorSound      = new buzz.sound('sounds/error' ),
    alphabetSounds  = {},
    alphabet        = 'abcdefg'.split( '' ),
	scoreK			= 0,
	ez				= false,
	txthlp,
	gameSound;

for( var i in alphabet ) {
    var letter = alphabet[ i ];
    alphabetSounds[ letter ] = new buzz.sound('sounds/kid/'+ letter );
}

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
    }

    function buildGame( x ) {
        if ( x > games.length - 1 ) {
            idx = 0;
        }
        if ( x < 0 ) {
            idx = games.length - 1;
        }

        var game  = games[ idx ],
		scoreK = 0;
		
        gameSound = new buzz.sound( game.sound );
		gameSound.load().play();

        // Fade the background color
        $( 'body' ).stop().animate({
            backgroundColor: game.color
        }, 1000);
        $( '#header a' ).stop().animate({
            color: game.color
        }, 1000);

        // Update the picture
        document.getElementById( "sent" ).innerHTML = game.sent; 
		txthlp = game.helptext + '<br><a href="#" onclick="popup(\'popUpDiv\')" >click to close</a>';
		document.getElementById( "popUpDiv" ).innerHTML = txthlp; 
		//document.getElementById( "helptxt" ).innerHTML = "click for help";
		//$sent.attr( 'html', game.sent )
        //    .unbind( 'click' )
        //    .bind( 'click', function() {
		//		gameSound.increaseVolume(100);
		//		gameSound.play();
        //    });

        // Build model
        var modelLetters = game.word.split( '' );

        for( var i in modelLetters ) {
            var letter = modelLetters[ i ];
            $models.append( '<li>' + letter + '</li>' );
        }

        var letterWidth = $models.find( 'li' ).outerWidth( true );

        $models.width( letterWidth * $models.find( 'li' ).length );

        // Build shuffled letters
		var letters = game.word.split('');
		if ( ez == false ) {
            letters.push(";",":",".","?","!","'","( )","-","—");
			
        }
		
		var shuffled = letters.sort( function() { return Math.random() < 0.5 ? -1 : 1 });

        for( var i in shuffled ) {
            $letters.append( '<li class="draggable">' + shuffled[ i ] + '</li>' );
        }

        $letters.find( 'li' ).each( function( i ) {
            if (ez == false) {
				var top   = $models.position().top + 150,
					left  = ($models.offset().left - $container.offset().left * 2) + (i * letterWidth + 40),
					angle = 0;		
			} else {
				var top   = $models.position().top + 150,
					left  = ($models.offset().left - $container.offset().left * 2) + (i * letterWidth + 40),
					angle = 0;	
			
			}
			
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
                var mLetter      = $( this ).text(),
                    ddLetter = ui.helper.text();
					
				var modelLetter = mLetter.split( '' ),
				droppedLetter = ddLetter.split( '' ); 

                if ( modelLetter[0] == droppedLetter[0] || modelLetter[1] == droppedLetter[1] || modelLetter[0] == droppedLetter[1] || modelLetter[1] == droppedLetter[0] ) {
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
                    
                    errorSound.play();
                    
                    setTimeout( function() {
                        ui.draggable.draggable( 'option', 'revert', false );
                    }, 100 );
                }
            }
        });
    }

    function winGame() {
        winSound.play();
		if (ez == false) {
			scoreK = scoreK + 20;
		} else {
			scoreK = scoreK + 10;
		}
		
		document.getElementById( "score" ).innerHTML = "Score = " + scoreK; 
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
