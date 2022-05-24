
function stopspk() {
	
	responsiveVoice.cancel();
	document.getElementById('plybttn').value = "Read";
	document.getElementById('plybttn').name = "play";
	
	
}
function spktxt(){ 
				var bttnvl = document.getElementById('plybttn').name;
				t2sp = tinyMCE.get('essay').getContent({ format: 'text' });
				var t2sprd = t2sp.slice(44, t2sp.length - 15);
				switch(bttnvl) {
					case "play":
							responsiveVoice.speak(t2sprd); 
							document.getElementById('plybttn').value = "Pause Reading";
							document.getElementById('plybttn').name = "pause"; 
						break;
					case "pause":
						 responsiveVoice.pause();
						 document.getElementById('plybttn').value = "Resume Reading";
						 document.getElementById('plybttn').name = "resume";
						break; 
					case "resume":
						 responsiveVoice.resume();
						 document.getElementById('plybttn').value = "Pause Reading";
						 document.getElementById('plybttn').name = "pause";
						break;
					} 
				}
				
	function bphelp(hlpnm){ 
		switch(hlpnm) {
	case "essay":
        swal({   title: "essayduction Help",   text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/k5jgNh4FwBU" frameborder="0" allowfullscreen></iframe>', html: true, confirmButtonText: "Continue" }); 
        break;
	case "helpmenu":
        swal({   title: "Writing Help",   text: '<iframe width="600" height="450" src="../rvlslds/" frameborder="0" allowfullscreen></iframe>', html: true, confirmButtonText: "Exit" }); 
        break; 
	} 
}   
  
  function store(){ 
	 var inputessay = tinyMCE.get('essay').getContent(); //document.getElementById("essay");
     localStorage.setItem("essay", inputessay);
	 swal({   title: "Success!",   text: "Your essay has been saved!",   type: "success",   confirmButtonText: "Continue" }); 
	 
    } 
	function retrieve() {
			var storedessay = localStorage.getItem("essay");   
			tinymce.get('essay').setContent(storedessay); 
			swal({   title: "Success!",   text: "Your essay has been retrieved!",   type: "success",   confirmButtonText: "Continue" }); 
	 
	} 
	 
"<!DOCTYPE html><html><head></head><body>testing</body></html>"
