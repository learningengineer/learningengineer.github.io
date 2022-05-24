// JavaScript Document
const pointsperanswer = 5; //Number of points for a correct answer
const numberofattemtps = 3; //Number of attempts user gets per question
let numQuestion = 0; // question number
let splitwordarray = []; //This is the array that will hold the words in the sentences so that they can be clicked on for the correct answer.  
let splitanswerarray = [];  //This is the array that will hold the correct answers for comparison.  
let explanationtxt = ""; //This is the text that will explain the answer to the student. 
let totalpossible = 100; //The total number of points available for the entire quiz. 
let scoretotal = 0;  //The total score the user earns with correct answers.  
let attempts = 0; //Number of attempts taken per quiz item. 
let barWidth = 0; //The percentage the completion bar will be at. 
let percentCorrect = 0; //The percentage of questions answered correctly. 
let linkwords = ""; //The link for further information. 
let callSucceededData; //SCORM call back variable for data that has been submitted to the LMS.
let callSucceededSave;  //SCORM call back for if it saved properly. 
let callSucceededQuit; //SCORM call back for quitting the application.
let scorm = pipwerks.SCORM; //Scorm initializer. 
let callSucceeded; //SCORM call back for initial access
let items = []; //The array for all the words in the question entry. 





$(document).ready(() => {
	scorm.version = "2004"; //Tells the LMS the scorm version being used. 
	
	callSucceeded = scorm.init(); //initializes the scorm. 
	
	
	let nidx = scorm.get("cmi.suspend_data"); //This gets the question number data from the scorm if it exists.  Otherwise it comes up null. 
	if (nidx === "null"){   //checks to see if the data from the LMS is null. 
		nidx = parseInt(0);  //Sets the null data to the number zero. 
	} else {
		nidx = parseInt(nidx); //Converts a string to a number from the data. 
	}

	if (nidx > 0) { // If the variable nidx is greater than zero, meaning that the student didn't complete the quiz. 
		scoretotal = scorm.get("cmi.score.raw"); //Get the score data.
		scoretotal = Math.round(scoretotal * 100); //convert to a positive whole number from a decimal. 
		numQuestion = nidx; //Push the number from the nidx variable into the numQuestion variable. 
	}		
	
	 window.onbeforeunload = function() { //When the user closes the window, do this.  

		let callSucceededQuit = scorm.quit(); //Quit the quiz. The LMS will now store the data.  
		return "Did you remember to save your answers?";  //This doesn't do much but it will ask the user if they're sure that they want to leave and not the string above.  
}

	
$.getJSON('js/subverbagreement.json', function (data) {  //This gets the question, answer, explanation data from the json file and dumbps it into the items variable. 
     	items = data; 
		newQuestion();  //invokes the newQuestion function. 
    });


function newQuestion() {  //This is the function that runs when you click on the next-question button.  
			$('#correct_incorrect').html("").css("background-color", "yellow"); //This changes the background color of the div whose id is correct_incorrect.  
			$('#sentences').html("");  //Removes text from the div with the id sentences
			$('#explanation').html("");//Removes text from the div with the id explanation
			$('#link').html(""); //Removes text from the div with the id link
			splitwordarray = items[numQuestion].sentence.split(" "); //This takes the sentence entry in the array and pushes each word separated by a space into an array.  
			splitanswerarray = items[numQuestion].correct_answer.split(" "); //This takes the correct_answer entry in the array and pushes each number separated by a space into an array.  
			explanationtxt = items[numQuestion].explanation; //The xplanationtext variable takes the explanation entry from the array. 
			linkwords = items[numQuestion].link;  //The linkwords variable takes the explanation entry from the array. 
			splitwordarray.forEach(splitSentence); //This says to apply the myFunction function to each entry in the splitwordarray.  
			function splitSentence(item, index) {
				$("#sentences").append("<div class='words' id=" + index + " >" + item + "</div> ");};
// The splitSentence function takes each element (word) in the array and creates a divider with a numbered id.  
			$('#score').html("Score: " + scoretotal + " out of " + totalpossible); //Sets the score for the user. 

			barWidth = Math.round(((numQuestion + 1) / items.length) * 100); //creates the percentage for the completion bar.  
			barWidth = barWidth + "%";  //adds the percent symbol to the label on the percentage completion bar. 
			$("#myBar").width(barWidth).html(barWidth); //Sets the width and html.  


			$('.words').on('click'); //Turns on the ability to click on words.  

			$( ".words" ).click(function() {//this function runs when you click on one of the words.  
				let checkID = this.id; //this gets the id of the word being clicked. 
				if (splitanswerarray.includes(checkID)) {//This checks to see if the word's ID is in the splitanswerarray, and then it does what is below.  This checks to see if the user got the correct answer.   
					scoretotal = scoretotal + pointsperanswer; //This adds points to the users score.
					$('#correct_incorrect').css("background-color", "#B8F70C");//Changes the correct_incorrect div to background color green.  
					$('#correct_incorrect').html("Correct:"); //Adds the word 'Correct' to the correct_incorrect div
					$('#score').html("Score: " + scoretotal + " out of " + totalpossible); //Changes the score div to reflect the new score. 
					$('#explanation').html(explanationtxt); //Provides the explanation text in the explanation div. 
					$('#link').html("<a href=" + linkwords + " target='_blank'>" + linkwords + "</a>"); //creates a link in the link div using the linkwords entry from the json array. 
					$('.words'). off('click'); //This turns off the ability to click on words until the user moves to the next-question. 
				} else { //The below code runs if the user gets the question wrong. 
					attempts++;  //This counts the number of attempts the user takes. .   
					$('#correct_incorrect').css("background-color", "pink");//This changes the background color of the correction_incorrect div to pink.  
					$('#correct_incorrect').html("Incorrect: " + attempts + " attempts out of " + numberofattemtps + ". Try again?"); //This tells the user how many attempts they've made, how many they have, and to Try again. 
					if (numberofattemtps === attempts) {  //This runs when the user reaches the number of attempts allowed.  
						$('#correct_incorrect').html("Incorrect"); //Tells the reader that they got the question wrong. 
						$('#explanation').html(explanationtxt); //Adds the text to the explanation div that explains the correct answer.  
						$('.words'). off('click');//turns off the ability to click on the words. 
						attempts = 0; //Resets the number of attempts to zero. 
					}

				}
			})//end of the words click function.
			//The code below is for SCORM 
			let numQues = numQuestion; //sets the numQues variable equal to the numQuestion variable. This varible is probably unnecessary but I put it here to make these separate. 
			let rawscore = scoretotal / 100; //Turns the scoretotal into a decimal
			let setScore = scorm.set("cmi.score.raw", rawscore); //sets the score to the LMS
			let quesNum = scorm.set("cmi.suspend_data", numQues); //sets the question the user left on
			let setScoreSave = scorm.save(); //saves these items to the LMS 




			//Change setScoreSave to true when packaged for SCORM.  

			if (setScoreSave == false) { //Checks to see that it was saved.  If true, the saveIndicator div flashes a green .   
					$("#saveIndicator").html("Saved").css("background-color", "green").fadeIn(100); //Fades the color green into the div at 1/10 of a second 
					$("#saveIndicator").html("Saved").css("background-color", "green").fadeOut(1000); //Fades the color green out of the div in 1 second.  
					
					numQuestion = numQuestion + 1; //Adds 1 to the number of questions viewed.  
			} else { //If it didn't save it does this.  It doesn't move on to the next-question.  
					$("#saveIndicator").html("Not Saved").css("background-color", "red").fadeIn(100);//Fades the color red into the div at 1/10 of a second 
					$("#saveIndicator").html("Not Saved").css("background-color", "red").fadeOut(1000);//Fades the color red out of the div in 1 second.  
					
			}
			
			}
			

function gameOver() { //Runs when the game is 100% complete.  
	percentCorrect = Math.round((scoretotal / totalpossible) * 100); //Gets the percent score using math round to a whole number.  
	let RawTotal = scoretotal / totalpossible; //gets the RawTotal in a decimal point. 
	$('#sentences').html("GAME OVER!"); //Replaces the quiz questions with GAME OVER. 
	$('#link').html(""); //Empties this div
	$('#correct_incorrect').html("Score: " + scoretotal + " out of " + totalpossible); //Reveals the final score.
	$('#explanation').html(percentCorrect + "%"); //Presents the percentage correct in the explanation div. 
	$('#next-question').hide(); //Hides the next-question button. 
	//The code below completes the SCORM application and closes the window after 3 seconds
	callSucceeded = scorm.set("cmi.score.scaled", RawTotal); //Provides the final score number. 
	callSucceeded = scorm.set("cmi.completion_status", "completed"); //Tells the LMS that it's completed.  
    if (RawTotal < .8 ) { //Looks for an 80% score.  
         callSucceeded = scorm.set("cmi.success_status", "failed");//if less than 80% the user failed.  
	  } else { //anything else and it sets it to passed.             
         callSucceeded = scorm.set("cmi.success_status", "passed");  
      }
    callSucceededQuit = scorm.quit(); //Now quits the SCORM which tells the LMS to do a final save. 
	  setTimeout( function() { //setTimeout means to wait to run the code.
			window.top.close(); //Closes the SCORM browser window
		}, 3000); //This is how long to wait to run the code: 3 seconds
        return false; //Don't return any messages. 
}
	
	
	
	
	$('#next-question').on('click'); //Turns the ability to click on this button to on. 
	$('#score').html("Score: 0 out of " + totalpossible); //Resets the score div
	$('#next-question').click(function() { //Do this when the user clicks on the button labeled "next-question"
		attempts = 0; //resets the number of attemtps to zero. 
		if (barWidth === "100%") { //checks the barwidth.  If 100% then the game is over and run the function gameOver
			gameOver(); //runs the gameOver function
		} else { //if the barWidth is anything else move on to a new question. 
			newQuestion(); //run the newQuestion function
		}
		
		});
	
	
//The code below is used with SweeAlert2 javascript library and creates the popup window at the beginning of the SCORM application. 	

	Swal.fire({
  title: '<img class="logo-img" src="logole.png">', //logo image
  html: //text in html
	'For this quiz, you are to read the passage and then locate the grammatical error by clicking the word involved. If it involves a phrase or a clause, you only need to click on a word in the phrase or clause. You get three attempts at each passage.  Your score and place are saved when you move on to the next question.',
  showCloseButton: true,  //sets the close button on the window to true
  focusConfirm: true, //sets the focus to true
  confirmButtonText:  //sets the text of the start quiz button
    'Start Quiz', //sets the text of the start quiz button
  confirmButtonAriaLabel: 'Start Quiz' //sets the text of the start quiz button
});



	
});