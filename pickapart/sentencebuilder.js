
 
buzz.defaults.formats = [ 'ogg', 'mp3' ];
buzz.defaults.preload = 'metadata';

var questions = [
{ type:"art", sent: "Identify the articles in the order they occur in the following sentence.", ques:"An Easter Egg hunt at the school had a clown and an excellent magician.", color:'#666600', word: "An the a an", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }, 
{ type:"art", sent: "Identify the articles in the order they occur in the following sentence.", ques:"The game went ", color:'#666600', word: "An the a an", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"art", sent: "Identify the articles in the order they occur in the following sentence.", ques:"An Easter Egg hunt at the school had a clown and an excellent magician.", color:'#666600', word: "An the a an", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"art", sent: "Identify the articles in the order they occur in the following sentence.", ques:"An Easter Egg hunt at the school had a clown and an excellent magician.", color:'#666600', word: "An the a an", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"art", sent: "Identify the articles in the order they occur in the following sentence.", ques:"An Easter Egg hunt at the school had a clown and an excellent magician.", color:'#666600', word: "An the a an", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"art", sent: "Identify the articles in the order they occur in the following sentence.", ques:"An Easter Egg hunt at the school had a clown and an excellent magician.", color:'#666600', word: "An the a an", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"art", sent: "Identify the articles in the order they occur in the following sentence.", ques:"An Easter Egg hunt at the school had a clown and an excellent magician.", color:'#666600', word: "An the a an", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"art", sent: "Identify the articles in the order they occur in the following sentence.", ques:"An Easter Egg hunt at the school had a clown and an excellent magician.", color:'#666600', word: "An the a an", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"art", sent: "Identify the articles in the order they occur in the following sentence.", ques:"An Easter Egg hunt at the school had a clown and an excellent magician.", color:'#666600', word: "An the a an", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"art", sent: "Identify the articles in the order they occur in the following sentence.", ques:"An Easter Egg hunt at the school had a clown and an excellent magician.", color:'#666600', word: "An the a an", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"ver", sent: "Identify the verbs in the order they occur in the following sentence.", ques:'I was walking the dog near the lake.', color:'#666600', word: "was walking", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"ver", sent: "Identify the verbs in the order they occur in the following sentence.", ques:"I had a Ford Pinto that was falling apart because of rust.", color:'#666600', word: "had was falling", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }, 
{ type:"ver", sent: "Identify the verbs in the order they occur in the following sentence.", ques:"Hearing his owner call, Rex lifted his ears, turned, and ran towards his owner.", color:'#666600', word: "Hearing lifted turned ran", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }, 
{ type:"ver", sent: "Identify the verbs in the order they occur in the following sentence.", ques:"Jeff ran into Bill who declared it a miracle that they should meet.", color:'#666600', word: "ran declared meet", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }, 
{ type:"cn", sent: "Identify the nouns in the order they occur in the following sentence.", ques:'I was walking the dog near the lake.', color:'#666600', word: "dog lake.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"cn", sent: "Identify the nouns in the order they occur in the following sentence.", ques:'I found a bag of money near the oak tree outside.', color:'#666600', word: "bag money tree outside", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"cn", sent: "Identify the nouns in the order they occur in the following sentence.", ques:'There are six bottles of syrup under the stairs in the pantry.', color:'#666600', word: "bottles syrup stairs pantry", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }, 
{ type:"mn", sent: "Identify the mass nouns in the order they occur in the following sentence.", ques:"The soil in the field is sterile from the contaminated water.", color:'#666600', word: "soil water", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }, 
{ type:"cn", sent: "Identify the count nouns in the order they occur in the following sentence.", ques:"Sir, you have too many items in your cart for this line.", color:'#666600', word: "items cart line", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }, 
{ type:"prep", sent: "Identify the prepositions in the order they occur in the following sentence.", ques:'At noon, I was walking the dog near the lake behind a fence line.', color:'#666600', word: "At near behind", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech#/prepositions\" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"art", sent: "Identify the articles in the order they occur in the following sentence.", ques:'I was walking the dog near the lake.', color:'#666600', word: "the the", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/articles" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"pro", sent: "Identify the pronoun in the order they occur in the following sentence.", ques:'I was walking the dog near the lake.', color:'#666600', word: "I", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"pro", sent: "Identify the pronouns in the order they occur in the following sentence.", ques:"All of the people at the rally wanted to see their favorite performer.", color:'#666600', word: "All their", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }, 
{ type:"pro", sent: "Identify the pronouns in the order they occur in the following sentence.", ques:"Everyone is quite happy that he forget the slides the family vacation.", color:'#666600', word: "Everyone he", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }, 
{ type:"adverbs", sent: "Identify the adverbs in the order they occur in the following sentence.", ques:"I immediately saw the problem sitting very quietly in the corner.", color:'#666600', word: "immediately very quietly", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }, 
{ type:"adverbs", sent: "Identify the adverbs in the order they occur in the following sentence.", ques:"I almost lent my brother $200, but I instantly saw that I would probably never get my money back.", color:'#666600', word: "almost instantly probably", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }, 
{ type:"adj", sent: "Identify the adjectives in the order they occur in the following sentence.", ques:"The old, red, Russian, cargo plane was stuck on the runway because of black ice.", color:'#666600', word: "old, red, Russian, cargo black", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }, 
{ type:"adj", sent: "Identify the adjectives in the order they occur in the following sentence.", ques:"The thick, light-orange frosting dripped from the side of the large, ornate, wedding cake.", color:'#666600', word: "thick, light-orange large ornate wedding", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }, 
{ type:"adj", sent: "Identify the adjectives in the order they occur in the following sentence.", ques:"The old, red, Russian, cargo plane was stuck on the runway because of black ice.", color:'#666600', word: "old, red, Russian, cargo black", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }, 
{ type:"pn", sent: "Identify the proper nouns in the order they occur in the following sentence.", ques:'Jerry:and:I:decided:that:we:would:walk:down:to:Fine Ribs:and:have:dinner:with:Delila:and:Arthur.', color:'#666600', word: "Jerry:Fine Ribs:Delila:Arthur.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"pn", sent: "Identify the proper nouns in the order they occur in the following sentence.", ques:'Jerry:and:I:decided:that:we:would:walk:down:to:Fine Ribs:and:have:dinner:with:Delila:and:Arthur.', color:'#666600', word: "Jerry:Fine Ribs:Delila:Arthur.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' },
{ type:"pn", sent: "Identify the proper nouns in the order they occur in the following sentence.", ques:"Harry Potter:and:Ron Weasly:are:characters:that:were:created:by:JK Rowling.", color:'#666600', word: "Harry Potter:Ron Weasly:JK Rowling.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }, 
{ type:"pn", sent: "Identify the proper nouns in the order they occur in the following sentence.", ques:"Parker:and:Craig:are:rivals:in:the:city:of:Janesville.", color:'#666600', word: "Parker:Craig:Janesville.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/nouns" frameborder=\"0\" allowfullscreen></iframe>' }
];
var games = questions.sort( function() { return Math.random() < 0.5 ? -1 : 1 });

var winSound        = new buzz.sound('sounds/win' ),
    errorSound      = new buzz.sound('sounds/error' ),
	scoreKK			= 0,
	ez				= false,
	txthlp,
	gameSound,
	scoreK;
	
var NumOfQues = games.length;
var ScoreTotal = NumOfQues * 10;
var PercentTotal;
 
//for( var i in words ) {
//    var word = words[ i ];
//    wordSounds[ word ] = new buzz.sound('sounds/'+ word );
//}

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
		gameSound.stop();
        $( '#models' ).html( '' );
        $( '#letters' ).html( '' );
    }

    function buildGame( x ) {
		document.getElementById("sent").style.textAlign = "left";
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
		PercentTotal = (scoreKK / ScoreTotal) * 100;
		document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
       //document.getElementById( "helptxt" ).innerHTML = "click for help";
		//$sent.attr( 'html', game.sent )
        //    .unbind( 'click' )
        //    .bind( 'click', function() {
		//		gameSound.increaseVolume(100);
		//		gameSound.play();
        //    });

        // Build model 
        if (game.type == "pn") {
        	var modelLetters = game.word.split(':');
        } else {
        	var modelLetters = game.word.split( ' ' );

	}	
		
		
        for( var i in modelLetters ) {
            var letter = modelLetters[ i ];
            $models.append( '<li>' + letter + '</li>' );
        }

        var letterWidth = $models.find( 'li' ).outerWidth( true );

        $models.width( letterWidth * $models.find( 'li' ).length );
		
		var modelWidth = $models.width( letterWidth * $models.find( 'li' ).length );

        // Build shuffled letters
      if (game.type == "pn") {
      	      var letters = game.ques.split(':');
      } else {
		var letters = game.ques.split(' ');     
      }	
		var shuffled = letters;
		var g = 0;
        for( var i in shuffled ) {
				$letters.append( '<li class="draggable">' + shuffled[ i ] + '</li>' );
        }

        $letters.find( 'li' ).each( function( i ) {
					if (i > 10) {
						var top   = $models.position().top + 150,
						left  = (($models.offset().left + $container.offset().left) / (letters.length - 1)-50) + (g * (letterWidth + 1)),
						angle = 0;
						g++;
					} else {
					var top   = $models.position().top + 100,
					left  = (($models.offset().left + $container.offset().left) / (letters.length - 1)-50) + (i * (letterWidth + 1)),
					angle = 0;
					}
					
			
            $( this ).css({
                top:  top  + 'px',
                left: left + 'px'
            });

            rotate( this, angle );

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
						PercentTotal = (scoreKK / ScoreTotal) * 100;
						document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
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
