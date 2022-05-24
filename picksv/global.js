var truckSound = new buzz.sound( '/demo/sounds/truck', { formats: [ 'ogg', 'mp3' ] } ),
        kidsSound = new buzz.sound( '/demo/sounds/win', { formats: [ 'ogg', 'mp3' ] } );

	$( function() {

        $( '#logo span' ).mouseenter( function() {
           truckSound.play(); 
        });

        $( '#splash' ).mouseenter( function() {
           kidsSound.play(); 
        });

		$( '.mailto' ).click( function() {
			var a = $( this ).attr( 'href' );
			e = a.replace( '#', '' ).replace( '|', '@' ) + '.com';
			document.location = 'ma' + 'il' + 'to:' + e + "?subject=[Buzz] I'd like to hire you!";
			e.preventDefault;
			return false;
		});
		
		$( '.credits, .contact' ).click( function() {
			$( '#overlay, #credits' ).fadeIn();
			return false;
		});
	
		$( '#overlay a, #credits a' ).click( function(e) {
			e.stopPropagation();
		});
	
		$( '#overlay, #credits' ).click( function() {
			$( '#overlay, #credits' ).fadeOut();
			return false;
		});

		$( "#wantmore h6" ).click( function( e ) {
			var $$ = $( this );
				$menu = $( '#wantmore ul' ),
				$arrow = $( '#wantmore .arrow' );
	
			e.stopPropagation();
			
			if ( $menu.is( ':visible' ) ) {
				$menu.hide();
				$arrow.hide();
				$( '#wantmore' ).removeClass( 'active' );
			} else {
				$menu.fadeIn( 200 );
				$arrow.fadeIn( 200 );
				$( '#wantmore' ).addClass( 'active' );
				$( 'body' ).one( 'click', function() {
					$menu.hide();
					$arrow.hide();
					$( '#wantmore' ).removeClass( 'active' );
				});
			}
		});
		$( "#wantmore li" ).click( function( e ) {
			document.location = $( this ).find( 'a' ).attr( 'href' );
		});

    	$( '.author' ).hover( function(e) {
    		$( '#hire' ).show();

    	}, function(e) {
    		$( '#hire' ).hide();		
    	});
		
		if ( !buzz.isSupported() ) {
			$('#warning').fadeIn( "slow" );	
		}
	});