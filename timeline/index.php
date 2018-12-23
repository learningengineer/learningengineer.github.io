<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Introduction to College Writing Timeline</title>
<script
  src="js/jquery-3.3.1.min.js"></script>
<script src="js/moment.js"></script>
<script src="js/sweetalert.js"></script>


<script type="text/javascript">


 
$(document).ready(function() {
		let idPick = "#0";
		let textSwal = "";
		for (i = 1; i < 118; i++) { 
				startdate = "01.13.2019";
				var new_date = moment(startdate, "MM.DD.YYYY");
				new_date.add(i, 'd');
				//alert(new_date);
				let newDateFormat = new_date.format("ddd, MMM D YYYY");
				//let checkDayOfWeek = newDateFormat.split(" ");
				switch (i) { 
					case 1:
					$("#content").append("<div class='day' id='day" + i + "'>" + i + " <br><strong>" + newDateFormat + "</strong></div><div data='" + newDateFormat  + "' id='info" + i + "' class='inform'>Welcome to <br />Introduction to College Writing<br><br><a class='myButton' href='https://1drv.ms/w/s!AunAKdok7zx4mBesfHBBRHjZKIdh' target='_blank'>Click to read syllabus</a>");
					break;
					case 57:
					$("#content").append("<div class='day' id='day" + i + "'>" + i + " <br><strong>" + newDateFormat + "<br>Mid-term</strong></div><div data='" + newDateFormat  + "' id='info" + i + "' class='inform'>Welcome to <br />Introduction to College Writing<br><br><button class='button' onClick='swal(\"Hello world! 57\");' id='syllabusLink'>Click to Read the Syllabus</button>");
					$(".day:contains(" + i + ")").css( "background-color", "#66ff33" );
					break;
					case 58:
					case 59:
					case 60:
					case 61:
					$("#content").append("<div class='day' id='day" + i + "'>" + i + " <br><strong>" + newDateFormat + "<br>Spring Break No Classes</strong></div><div data='" + newDateFormat  + "' id='info" + i + "' class='inform'>Welcome to <br />Introduction to College Writing<br><br><button class='button' onClick='swal(\"Hello world! 58\");' id='syllabusLink'>Click to Read the Syllabus</button>");
					$(".day:contains(" + i + ")").css( "background-color", "#66ff33" );
					break;
					case 113:
					case 114:
					case 115:
					case 116:
					case 117:
					$("#content").append("<div class='day' id='day" + i + "'>" + i + " <br><strong>" + newDateFormat + "<br>Final Exam Week</strong></div><div data='" + newDateFormat  + "' id='info" + i + "' class='inform'>Welcome to <br />Introduction to College Writing<br><br><button class='button' onClick='swal(\"Hello world! 113\");' id='syllabusLink'>Click to Read the Syllabus</button>");
					$(".day:contains(" + i + ")").css( "background-color", "#66ff33" );
					break;
					default:
					$("#content").append("<div class='day' id='day" + i + "'>" + i + " <br><strong>" + newDateFormat + "</strong></div><div data='" + newDateFormat  + "' id='info" + i + "' class='inform'></div>");
					};
				
					
					
				
		}

		$(".day").hover(function() {
				console.log(idPick);
				$( this ).css( "background-color", "black" );
				$( this ).css( "color", "yellow" );
				$(idPick).css("background-color", "red");
			}, function() {
				$( this ).css( "background-color", "yellow" );
				$( this ).css( "color", "black" );
				$(idPick).css("background-color", "red");
				$(".day:contains(57)").css( "background-color", "#66ff33" );
				$(".day:contains(58)").css( "background-color", "#66ff33" );
				$(".day:contains(59)").css( "background-color", "#66ff33" );
				$(".day:contains(60)").css( "background-color", "#66ff33" );
				$(".day:contains(61)").css( "background-color", "#66ff33" );
				$(".day:contains(113)").css( "background-color", "#66ff33" );
				$(".day:contains(114)").css( "background-color", "#66ff33" );
				$(".day:contains(115)").css( "background-color", "#66ff33" );
				$(".day:contains(116)").css( "background-color", "#66ff33" );
				$(".day:contains(117)").css( "background-color", "#66ff33" );
				
			});

		$(".day").click(function() {	
			$(idPick).css("background-color", "yellow");
			$(idPick).css("color", "black");	
			idPick = '#' + this.id;	
			console.log("clicked " + idPick)
			let dayPick = $(this).html().split(" ");
			$('.inform').slideUp(500);
			$(this).next('.inform').slideDown(500);
			$( this ).css( "background-color", "red" );
			//$( ".day" ).css( "background-color", "yellow" );
			//alert($(this).attr("id"));
			
			switch (dayPick[0]) { 
				case '112': 
				alert(dayPick[0]);	
				$("#info").html( "Welcome to <br />Introduction to College Writing<br><br><button class='button' onClick=\"swal({\"  title: '<strong>HTML <u>example</u></strong>', type:'info',  html:'You can use <b>bold text</b><a href=\"//github.com\">links</a> and other HTML tags' showCloseButton: true,   showCancelButton: true,  focusConfirm: false,  confirmButtonText:'<i class=\"fa fa-thumbs-up\"></i> Great!', confirmButtonAriaLabel: 'Thumbs up, great!', cancelButtonText: '<i class=\"fa fa-thumbs-down\"></i>', cancelButtonAriaLabel: 'Thumbs down', })\");\" id='syllabusLink'>Click to Read the Syllabus</button>");
				break;
				case '113':
				$(this).next('.inform').html("<h1>Final Exam Week</h1>");
				break;
				case '114':
				$(this).next('.inform').html("<h1>Final Exam Week</h1>");
				break;
				case '115':
				$(this).next('.inform').html("<h1>Final Exam Week</h1>");
				break;
				case '116':
				$(this).next('.inform').html("<h1>Final Exam Week<br>Thursday Night 6:00 to 9:00 pm</h1>");
				break;
				default:
				$("#info").html(textSwal);
				};
		});

		$("#mon9").click(function() {
			shwAll(); 
			$(".day:contains(Tue)").hide();
			$(".day:contains(Sat)").hide();
			$(".day:contains(Sun)").hide();
			$(".day:contains(Wed)").hide(); 
			$(".day:contains(Thu)").hide(); 
			$(".day:contains(Fri)").hide(); 
			//$(".inform").hide();
			$(".inform").hide();
		})

		$("#wed9").click(function() {
			shwAll(); 
			$(".day:contains(Tue)").hide();
			$(".day:contains(Sat)").hide();
			$(".day:contains(Sun)").hide();		 
			$(".day:contains(Mon)").hide(); 
			$(".day:contains(Thu)").hide(); 
			$(".day:contains(Fri)").hide(); 
			$(".inform").hide();
		})

		$("#monWed1").click(function() {
			shwAll(); 
			$(".day:contains(Sat)").hide();
			$(".day:contains(Sun)").hide();
			$(".day:contains(Tue)").hide();
			$(".day:contains(Thu)").hide(); 
			$(".day:contains(Fri)").hide(); 
			$(".inform").hide();
		})
		function shwAll() {
			$(".day:contains(Sat)").show();
			$(".day:contains(Sun)").show();
			$(".day:contains(Mon)").show();
			$(".day:contains(Tue)").show();
			$(".day:contains(Wed)").show(); 
			$(".day:contains(Thu)").show(); 
			$(".day:contains(Fri)").show(); 
			$(".inform").hide();
		}

		$("#showAll").click(function() {
			shwAll(); 
		})

		$("#tuesNight").click(function() {
			shwAll(); 
			$(".day:contains(Mon)").hide();
			$(".day:contains(Sat)").hide();
			$(".day:contains(Sun)").hide();	 
			$(".day:contains(Wed)").hide(); 
			$(".day:contains(Thu)").hide(); 
			$(".day:contains(Fri)").hide(); 
			//$(".inform").hide();
			$(".inform").hide();
		})

		$("#thuNight").click(function() {
			shwAll(); 
			$(".day:contains(Mon)").hide();
			$(".day:contains(Sat)").hide();
			$(".day:contains(Sun)").hide();
			$(".day:contains(Wed)").hide(); 
			$(".day:contains(Tue)").hide(); 
			$(".day:contains(Fri)").hide(); 
			$(".inform").hide();
		})

		$(".inform").hide();
})
	
 
</script>
<link href="https://fonts.googleapis.com/css?family=Caveat|Indie+Flower|Special+Elite" rel="stylesheet">
 <style>


 #bodyContainer {
 	background-image:url(chalkboardCloseup.jpeg);
	 background-size: 100% 100%;
	 font-family: "Special Elite", serif, georgia; 
	 padding: 5px 20px 20px 20px; 
	 
}
 
h1 {
	font-size: 1em;

}
 #container {
 width: 100%;
 display: grid;
 grid-template-rows:1fr 1fr;
 grid-column-gap: 2rem;
 
 }
 strong {
 	font-size: 2em;
 
 }
 #content {
 
 }

 button {
	 margin: 0px 5px 5px 0px;

 }
 
 
 
 .button {
  font-size: 14px;
  font-weight: bold; 
  text-decoration: none;
  background-color: #EEEEEE;
  color: #333333;
  padding: 5px 10px 5px 10px;
  border-top: 2px solid #CCCCCC;
  border-right: 2px solid #333333;
  border-bottom: 2px solid #333333;
  border-left: 2px solid #CCCCCC;
  margin: 5px; 
}

header {
	font-size:2em;
	color: yellow; 
	text-align: center; 
	margin: .4em 0px .7em 0px; 
	height: auto; 
	text-shadow: 2px 2px #666666;
}

 .day { 
	width: 100%; 
	padding: 4px 4px 4px 4px;
	text-align: center;
	border-style: solid;
  	border-width: 3px;
	border-color:#CCCCCC;
	background-color: yellow; 
	cursor: pointer;
	}

	a {
		color: yellow;
		border: 5px, solid, black !important ; 
		border-radius: 3px; 
	}
		
 
 
 #backToTop:hover
 {
 	background-color:black;
	color:yellow; 
 }
	
	#backToTop {
		width:auto;
		height:auto;
		font-family:Verdana, Arial, Helvetica, sans-serif;
		font-size: 38px;
		position:fixed;
		bottom: 5px;
		right: 5px;
		background-color:red;
		color:blue;
		}

   .inform {
	color: yellow; 
	height: 300px;
	font-weight: 900; 
	font-size: 2em;
	text-align: center; 
	padding: 1em 1em 1em 1em; 
	text-shadow: 2px 2px #666666;
	

   }

   

.myButton {
	-moz-box-shadow: 0px 1px 0px 0px #fff6af;
	-webkit-box-shadow: 0px 1px 0px 0px #fff6af;
	box-shadow: 0px 1px 0px 0px #fff6af;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffec64), color-stop(1, #ffab23));
	background:-moz-linear-gradient(top, #ffec64 5%, #ffab23 100%);
	background:-webkit-linear-gradient(top, #ffec64 5%, #ffab23 100%);
	background:-o-linear-gradient(top, #ffec64 5%, #ffab23 100%);
	background:-ms-linear-gradient(top, #ffec64 5%, #ffab23 100%);
	background:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffec64', endColorstr='#ffab23',GradientType=0);
	background-color:#ffec64;
	-moz-border-radius:6px;
	-webkit-border-radius:6px;
	border-radius:6px;
	border:1px solid #ffaa22;
	display:inline-block;
	cursor:pointer;
	color:#333333;
	font-family:Arial;
	font-size:.5em;
	font-weight:bold;
	padding:3px 10px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffee66;
}
.myButton:hover {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffab23), color-stop(1, #ffec64));
	background:-moz-linear-gradient(top, #ffab23 5%, #ffec64 100%);
	background:-webkit-linear-gradient(top, #ffab23 5%, #ffec64 100%);
	background:-o-linear-gradient(top, #ffab23 5%, #ffec64 100%);
	background:-ms-linear-gradient(top, #ffab23 5%, #ffec64 100%);
	background:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffab23', endColorstr='#ffec64',GradientType=0);
	background-color:#ffab23;
}
.myButton:active {
	position:relative;
	top:1px;
}

.title {
	top: 50%;
	left: 50%;
	display: block; 
	animation-name: moveInTop;
	animation-duration: 3s;
}



@keyframes moveInTop {
	0% {
		opacity: 0;
		transform: translateY(-100px);
	}
	100% {
		opacity: 1;
		transform: translate(0);
	}
}

	
 </style>
</head>
<body id="bodyContainer">
	<header id="header" class="header">
		<h1>
			<span class="title">Introduction to College Writing Timeline</span>
		</h1>
		<span>
			<a href="#" id="mon9" class="myButton">Mon 9 to Noon</a>
			<a href="#" class="myButton" id="monWed1">Mon and Wed 1 - 2:30pm</a>
			<a href="#" class="myButton" id="tuesNight">Tue Night</a>
			<a href="#" class="myButton" id="wed9">Wed 9 to Noon</a>
			<a href="#" class="myButton" id="thuNight">Thu Night</a>
			<a href="#" class="myButton" id="showAll">Show all dates</a>
		</span>
</header>
<div id="container">
 <div id="content">
 </div>
 
</div>
 </div>
 <div id="backToTop"><a href="#bodyContainer">^</a></div>
</body>
</html>