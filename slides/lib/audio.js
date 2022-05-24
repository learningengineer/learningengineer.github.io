
 
buzz.defaults.formats = [ 'ogg', 'mp3' ];
buzz.defaults.preload = 'metadata';

var winSound        = new buzz.sound('sounds/win' ),
    errorSound      = new buzz.sound('sounds/error' ),
    alphabetSounds  = {},
    alphabet        = 'abcdefghijklmnopqrstuvwxyz'.split( '' ),
	scoreK			= 0,
	ez				= false, 
	gameSound;



$( function() {
    if ( !buzz.isSupported() ) {
        $('#warning').show();
    }

    var idx = 0,
        $container  = $( '#container' ),
        $picture    = $( '#picture' ),
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
        $picture.attr( 'src', game.img )
            .unbind( 'click' )
            .bind( 'click', function() {
				gameSound.increaseVolume(100);
				gameSound.play();
            });

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
            letters.push('a','e','i','s','h','o','u');
			
        }
		
		var shuffled = letters.sort( function() { return Math.random() < 0.5 ? -1 : 1 });

        for( var i in shuffled ) {
            $letters.append( '<li class="draggable">' + shuffled[ i ] + '</li>' );
        }

        $letters.find( 'li' ).each( function( i ) {
            if (ez == false) {
				var top   = ( $models.position().top ) + ( Math.random() * 200 ) + 80,
					left  = ( $models.offset().left - $container.offset().left - 10) + ( Math.random() * 20 ) + ( i * letterWidth / 2),
					angle = ( Math.random() * 30 ) - 10;		
			} else {
				var top   = ( $models.position().top ) + ( Math.random() * 100 ) + 80,
                left  = ( $models.offset().left - $container.offset().left ) + ( Math.random() * 20 ) + ( i * letterWidth ),
                angle = ( Math.random() * 30 ) - 10;
			
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