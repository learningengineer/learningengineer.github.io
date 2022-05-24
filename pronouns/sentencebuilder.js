
 
buzz.defaults.formats = [ 'ogg', 'mp3' ];
buzz.defaults.preload = 'metadata';

var questions = [
     { sent: "[] and her friends believe that they will be friends forever.", color:'#666600', ques: "She Her Herself", word: "She", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "[] and I buy our milk from the same farmer.", color:'#666600', ques: "He Him Himself", word: "He", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Hello? Yes, it is [].", color:'#666600', ques: "I me myself", word: "I", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The supervisor ordered [] to reorganize the boxes.", color:'#666600', ques: "they them themselves", word : "them", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "They decided that [] weren't going to go with them.", color:'#666600', ques: "we us ourselves", word: "we", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Between you and [], he is getting the promotion.", color:'#666600', ques: "I me myself", word: "me", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Could you bring that wrench to []?", color:'#666600', ques: "I me myself", word: "me", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Jim burned [] when he dropped the torch.", color:'#666600', ques: "he him himself", word: "himself", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Both the CEO and CFO of the company addressed [] about the state of the company. ", color:'#666600', ques: "them they themselves", word: "them", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Everyone was unhappy with [] test scores.", color:'#666600', ques: "her your their", word: "her", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "People can always vote with [] pocket books.", color:'#666600', ques: "their his our", word: "their", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "[] are going to see that new movie with Gerry Busy and Dick McNolte.", color:'#666600', ques: "We Our Your", word: "We", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Maura, Peppi, and [] think that spaghetti grows on trees.", color:'#666600', ques: "she her them", word: "she", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Does anybody know who left [] phone in the conference room.", color:'#666600', ques: "his your our", word: "his", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The restaurant owner [] interviewed Alice for the position.", color:'#666600', ques: "him himself", word: "himself", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: '"The motorcycle belongs to my sister and []," said Marco.', color:'#666600', ques: "me myself", word: "me", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Chelsea could not wait until winter when [] and her friends could go skiing on the moutain every weekend.", color:'#666600', ques: "she herself", word: "she", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Angela gazed at [] in the mirror and concluded that she looked just fine.", color:'#666600', ques: "her herself", word: "herself", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The crisis eventually brought together the entire neighborhood, but it started between Elizabeth and [].", color:'#666600', ques: "me myself", word: "me", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The luggage had no tag, so the airline baggage handlers weren't sure to [] it belonged.", color:'#666600', ques: "whom who", word: "whom", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The person for [] the house was built backed out of the deal at the last minute", color:'#666600', ques: "who whom", word: "whom", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "[] dug this hole so close to the gasoline?", color:'#666600', ques: "Who Whom", word: "Who", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Harold could be sure [] to distrust", color:'#666600', ques: "who whom", word: "who", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The fires radiated sun-speckled colors as Jonas meandered through the fair and pondered [] tended to the fires.", color:'#666600', ques: "who whom", word: "who", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Some guy explained to Jethro and  [] that the nature preserve was worth a look see.", color:'#666600', ques: "I me", word: "me", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "I could have berated Sally, but I wasn't positive that it was [].", color:'#666600', ques: "she her", word: "she", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "She stated that you were looking for your keys. Are these []?", color:'#666600', ques: "they them", word: "they", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Jeff heard that Sally-Mae and [] had made the highest scores on the exam.", color:'#666600', ques: "he him", word: "he", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Do you think that you and [] could rehearse our lines tomorrow before tryouts?", color:'#666600', ques: "I me", word: "I", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: " Both of the coffee shop customers had finished [] doughnut.", color:'#666600', ques: "there their", word: "their", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Each participant in the contest took away [] own gift from the show.", color:'#666600', ques: "his their", word: "his", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: '"Yes", she said when she answered the phone, "it is []"', color:'#666600', ques: "I me", word: "I", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "To [] it may concern, this letter is for your eyes only.", color:'#666600', ques: "who whom", word: "whom", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "[] accountants thought the new computers were a good idea.", color:'#666600', ques: "We Us", word: "We", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "James and [] thought you were not going to show.", color:'#666600', ques: "I me", word: "I", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The managers invited [] faculty members to have lunch.", color:'#666600', ques: "we us", word: "us", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Perhaps they will invite you and [] next time.", color:'#666600', ques: "me I", word: "me", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "If you were [], what would you do?", color:'#666600', ques: "he him", word: "he", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Would you be willing to help Irene and []?", color:'#666600', ques: "me I", word: "I", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Is Stark better qualified than []?", color:'#666600', ques: "us we", word: "we", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Why are there so many disagreements between you and []?", color:'#666600', ques: "he him", word: "him", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "[] taking the initiative is appreciated.", color:'#666600', ques: "You Your", word: "You", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "What is the reason for [] settling in Arizona?", color:'#666600', ques: "them their", word: "them", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "I think the decision should be [].", color:'#666600', ques: "their's theirs", word: "theirs", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Everyone believed in [] way of doing the job.", color:'#666600', ques: "their his", word: "his", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Tom cut [] on the saw.", color:'#666600', ques: "hisself himself", word: "himself", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "[] leaving work caused a serious delay.", color:'#666600', ques: "His Him", word: "His", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Frank and [] checked the invoices.", color:'#666600', ques: "I myself", word: "I", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The company is planning to give [] employees a bonus.", color:'#666600', ques: "their its", word: "its", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Neither of the notebooks is [].", color:'#666600', ques: "hers her's", word: "hers", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Each of us is entitled to [] opinion.", color:'#666600', ques: "her their", word: "their", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Harold or [] will be waiting for you at the airport.", color:'#666600', ques: "I myself", word: "I", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Each of the managers submitted [] report.", color:'#666600', ques: "his their", word: "their", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Everyone should feel free to express [] opinion.", color:'#666600', ques: "her their", word: "her", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Lee is the candidate [] will endorse the proposal.", color:'#666600', ques: "who whom", word: "who", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "You are the one [] should be hired.", color:'#666600', ques: "who whom", word: "who", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Tom is as tall as [] is.", color:'#666600', ques: "him he", word: "he", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The delegates were surprised at [] voting for Bush.", color:'#666600', ques: "his him", word: "his", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"http://learningengineer.altervista.org/rvlslds/partsofspeech.html#/pronouns" frameborder=\"0\" allowfullscreen></iframe>' }

	
	
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

        var letterWidth =58;
		var letterHeight = 40;

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
