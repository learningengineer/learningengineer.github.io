let callSucceededData; //SCORM call back variable for data that has been submitted to the LMS.
let callSucceededSave;  //SCORM call back for if it saved properly. 
let callSucceededQuit; //SCORM call back for quitting the application.
//let scorm = pipwerks.SCORM; //Scorm initializer. 
let callSucceeded; //SCORM call back for initial access
let scorm = pipwerks.SCORM; //Scorm initializer. 

$(document).ready(() => {
    window.onbeforeunload = function() { //When the user closes the window, do this.  

		let callSucceededQuit = scorm.quit(); //Quit the quiz. The LMS will now store the data.  
		return "Did you remember to save your answers?";  //This doesn't do much but it will ask the user if they're sure that they want to leave and not the string above.  
}
	scorm.version = "2004"; //Tells the LMS the scorm version being used. 
	
	callSucceeded = scorm.init(); //initializes the scorm. 

    
    $('#submit-checkboxes').on('click'); //Turns on the ability to click on words.  

	$( "#submit-checkboxes" ).click(function() {
        if ($('.chkbx').is(':not(:checked)')) {
            pleasecheck(); 
        } else {
            checkcomplete(); 
        }
    });

    function pleasecheck(){
        Swal.fire({
            title: '<img class="logo-img" src="logole.png">', //logo image
            html: //text in html
              'Please read the checklist items and then check all boxes to signify that you have answered yes to all the questions.  If not, please go back and review your assignment. ',
            showCloseButton: true,  //sets the close button on the window to true
            focusConfirm: true, //sets the focus to true
            confirmButtonText:  //sets the text of the start quiz button
              'Ok', //sets the text of the start quiz button
            confirmButtonAriaLabel: 'Ok' //sets the text of the start quiz button
          });
          
        };

    
    function checkcomplete(){
        callSucceeded = scorm.set("cmi.score.scaled", 1); //Provides the final score number. 
	    callSucceeded = scorm.set("cmi.completion_status", "completed"); //Tells the LMS that it's completed.  
        callSucceeded = scorm.set("cmi.success_status", "passed");  
        callSucceededQuit = scorm.quit(); //Now quits the SCORM which tells the LMS to do a final save. 


        Swal.fire({
            title: '<img class="logo-img" src="logole.png">', //logo image
            html: //text in html
                'You have checked all the boxes for revision.  You can now proceed to the assignment.',
            showCloseButton: true,  //sets the close button on the window to true
            focusConfirm: true, //sets the focus to true
            confirmButtonText:  //sets the text of the start quiz button
                'Ok', //sets the text of the start quiz button
            confirmButtonAriaLabel: 'Ok' //sets the text of the start quiz button
            }).then(function() {
                window.top.close();
            });        
        };
          
   
   /* if (RawTotal < .8 ) { //Looks for an 80% score.  
         callSucceeded = scorm.set("cmi.success_status", "failed");//if less than 80% the user failed.  
	  } else { //anything else and it sets it to passed.             
         callSucceeded = scorm.set("cmi.success_status", "passed");  
      }
    callSucceededQuit = scorm.quit(); //Now quits the SCORM which tells the LMS to do a final save. 
	  setTimeout( function() { //setTimeout means to wait to run the code.
			window.top.close(); //Closes the SCORM browser window
		}, 3000); //This is how long to wait to run the code: 3 seconds
        return false; //Don't return any messages. 




    window.onbeforeunload = function() { //When the user closes the window, do this.  

		let callSucceededQuit = scorm.quit(); //Quit the quiz. The LMS will now store the data.  
		return "Did you remember to save your answers?";  //This doesn't do much but it will ask the user if they're sure that they want to leave and not the string above.  
}*/

});