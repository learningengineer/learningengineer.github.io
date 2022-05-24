



function printpdf() { 
 
	var inputName= document.getElementById("name").value;
	var splitname = {};
	splitname = inputName.split(" ");
	var inputInstructorName= document.getElementById("instructorname").value;
	var inputSchoolName = document.getElementById("schoolname").value;
	var inputCourseName= document.getElementById("coursename").value;
	var inputDate= document.getElementById("date").value;
	var inputEssayTitle= document.getElementById("essaytitle").value; 
	var inputThesis = document.getElementById("thesis").value;
	var inputIntro = tinyMCE.get('intro').getContent({ format: 'html' });
	var div = document.getElementById("lstprg"); 
	var xbody = div.getElementsByTagName("textarea").length; 
	console.log(xbody);
	var inputbody = "";  
	for (i = 0; i < xbody; i++) {
			var paragraph = 'body' + i.toString();
			console.log(paragraph);
			if (i < (xbody-1)) {
				inputbody = inputbody + ' ' + tinyMCE.get(paragraph).getContent({ format: 'html' }) + "\n \t \t \t \t \t \t ";
			} else {
				inputbody = inputbody + ' ' + tinyMCE.get(paragraph).getContent({ format: 'html' });   
			}
		} 
		inputbody = inputbody.replace(regex, "").replace(/&nbsp;/gi,'');
	var inputconclusion= tinyMCE.get('conclusion').getContent({ format: 'html' });
	if (inputconclusion.includes("<em>")) {
		var regex = /(<([^>]+)>)/ig
		inputconclusion = inputconclusion.replace(regex, "").replace(/&nbsp;/gi,'');
	} else {
		inputconclusion = tinyMCE.get('conclusion').getContent({ format: 'text' });
	}
	var styleselect = document.getElementById("slider2").value;
	if (styleselect == "MLA") {
		var docDefinition = {
			header: function(currentPage, pageCount) {
			return { text: splitname[1] + ' ' + currentPage.toString(), alignment: 'right', margin: [ 0, 20, 20, 0 ] }; 
		  },

				content: [
				{ text: inputName, lineHeight: 2},  
				{ text: inputInstructorName, lineHeight: 2}, 
				{ text: inputCourseName, lineHeight: 2},
				{ text: inputDate, lineHeight: 2},
				{ text: inputEssayTitle, alignment: 'center', bold: true, lineHeight: 2 }, 
				{ text: '\t \t \t \t \t \t ' + inputIntro + ' ' + inputThesis, lineHeight: 2},
				{ text: '\t \t \t \t \t \t ' + inputbody, lineHeight: 2},
				{ text: '\t \t \t \t \t \t ' + inputconclusion, lineHeight: 2}],
				pageMargins: 70  
				};
				 
			} else {
				
				var docDefinition = { 
				header: function(currentPage, pageCount) {  
						inputEssayTitle = inputEssayTitle.toUpperCase();
						if (inputEssayTitle.length > 50) {
								inputEssayTitle = inputEssayTitle.replace(/^(.{35}[^\s]*).*/, "$1");
							}
					
						if (currentPage < 2) {
						return {  margin : [ 20, 20, 20, 20], 
						columns : [
                    {width: 'auto', text: 'Running head: ' + inputEssayTitle, alignment: 'left'}, 
					{ text: currentPage.toString(), alignment: 'right'} ]};
						} else {
							return { margin : [ 20, 20, 20, 20],
							columns : [ {width: 'auto', text: inputEssayTitle, alignment: 'left' },
							{ text: currentPage.toString(), alignment: 'right'}
							]};
						}
			  },

					content: [
					{ text: inputEssayTitle, alignment: 'center', lineHeight: 2, margin: [0, 200, 0, 0] },
					{ text: inputName, lineHeight: 2, alignment: 'center', lineHeight: 2}, 
					{ text: inputSchoolName, lineHeight: 2, alignment: 'center', pageBreak: 'after'},
					{ text: '\t \t \t \t \t \t ' + inputIntro + ' ' + inputThesis, lineHeight: 2},
					{ text:'\t \t \t \t \t \t ' +  inputbody, lineHeight: 2},
					{ text: '\t \t \t \t \t \t ' + inputconclusion, lineHeight: 2}],
					pageMargins: 70
					};
					console.log("end" + inputbody);
	
				
			}
			pdfMake.createPdf(docDefinition).download(inputEssayTitle + '.pdf');
	


}

function spktxt(wta){ 
				var t2sp;
				if (wta == 'thesis'){
					t2sp = document.getElementById(wta).innerHTML.toString(); 
				} else {
					t2sp = tinyMCE.get(wta).getContent({ format: 'text' });
				}
				responsiveVoice.speak(t2sp); 
			} 

	function bphelp(hlpnm){ 
		switch(hlpnm) {
    case "bp":
        swal({   title: "Body Paragraph Help",   text: '<iframe width="450" height="280" src="https://www.youtube.com/embed/JibDOPVU3Lo" ></iframe>', html: true, confirmButtonText: "Continue" }); 
        break;
    case "title":
        swal({   title: "Title Help",   text: '<iframe width="500" height="200" src="essaytitle.svg" ></iframe>', html: true, confirmButtonText: "Continue" }); 
        break;
	case "con":
        swal({   title: "Conclusion Paragraph Help",   text: '<iframe width="420" height="315" src="https://www.youtube.com/embed/pvs9IpA5O2s" frameborder="0" allowfullscreen></iframe>', html: true, confirmButtonText: "Continue" }); 
        break;
	case "thesis":
        swal({   title: "Thesis Help",   text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wCzuAMVmIZ8" frameborder="0" allowfullscreen></iframe>', html: true, confirmButtonText: "Continue" }); 
        break;
	case "intro":
        swal({   title: "Introduction Help",   text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/k5jgNh4FwBU" frameborder="0" allowfullscreen></iframe>', html: true, confirmButtonText: "Continue" }); 
        break;
	case "helpmenu":
        swal({   title: "Writing Help",   text: '<iframe width="600" height="450" src="../rvlslds/" frameborder="0" allowfullscreen></iframe>', html: true, confirmButtonText: "Exit" }); 
        break; 
	} 
}   

  function store(){ 
     var inputName= document.getElementById("name"); 
     localStorage.setItem("name", inputName.value);
	  var inputDate= document.getElementById("date");
     localStorage.setItem("date", inputDate.value);
	 var inputSchoolName= document.getElementById("schoolname");
	 localStorage.setItem("schoolname", inputSchoolName.value);	  
	  var inputCourseName= document.getElementById("coursename");
     localStorage.setItem("coursename", inputCourseName.value);
	  var inputInstructorName= document.getElementById("instructorname");
     localStorage.setItem("instructorname", inputInstructorName.value);
	  var inputEssayTitle= document.getElementById("essaytitle");
     localStorage.setItem("essaytitle", inputEssayTitle.value); 
	  var inputThesis= document.getElementById("thesis");
     localStorage.setItem("thesis", inputThesis.value); 
	 var inputIntro = tinyMCE.get('intro').getContent(); //document.getElementById("intro");
     localStorage.setItem("intro", inputIntro); 
	 var div = document.getElementById("lstprg");           // Get the <div> element with id="myDIV"
	 var xbody = div.getElementsByTagName("textarea").length; 
	 for (i = 0; i < xbody; i++) {
			var paragraph = 'body' + i.toString();
			var inputbody = tinyMCE.get(paragraph).getContent();
			localStorage.setItem(paragraph, inputbody); 
		} 
	 var inputconclusion= tinyMCE.get('conclusion').getContent();
     localStorage.setItem("conclusion", inputconclusion); 
	 swal({   title: "Success!",   text: "Your essay has been saved!",   type: "success",   confirmButtonText: "Continue" }); 
	 
    } 
	function retrieve() {
		//var div = document.getElementById("lstprg");           // Get the <div> element with id="myDIV"
		//var xform = div.getElementsByTagName("textarea").length;
		var elm = document.getElementById("lstprg");
		while (elm.children.length > 7) {
			elm.removeChild(elm.lastChild); 
		}
			var storedName = localStorage.getItem("name");
			document.getElementById("name").innerHTML = storedName;
			var storedDate = localStorage.getItem("date");
			document.getElementById("date").innerHTML = storedDate;
			var storedSchool = localStorage.getItem("schoolname"); 
			document.getElementById("schoolname").innerHTML = storedSchool; 
			var storedCourseName = localStorage.getItem("coursename"); 
			document.getElementById("coursename").innerHTML = storedCourseName;
			var storedInstructorName = localStorage.getItem("instructorname");
			document.getElementById("instructorname").innerHTML = storedInstructorName;
			var storedessaytitle = localStorage.getItem("essaytitle");
			document.getElementById("essaytitle").innerHTML = storedessaytitle;
			var storedthesis = localStorage.getItem("thesis"); 
			document.getElementById("thesis").innerHTML = storedthesis;
			var storedintro = localStorage.getItem("intro");   
			tinymce.get('intro').setContent(storedintro); 
			var $lstprg    = $( '#lstprg' ); 
			var xlclStore = localStorage.length;
			for (i = 0; i < xlclStore; i++) {
				var paragraphr = "body" + i.toString();
				var storedparagraph = localStorage.getItem(paragraphr);
				if (storedparagraph){ 
					var x = i + 1; 
					if (i > 0) { 
					$lstprg.append( '<p>Body paragraph #' + x + '<a onclick=\'bphelp("bp")\'>Body paragraph HELP</a><br><textarea id="body' + i + '" name="' + i + '" class="editor" rows="8" cols="80"></textarea><br><input onclick=\'spktxt("body' + i + '")\' type=\'button\' value=\'🔊 Play\' /></p>'); 
					
					}
				//tinymce.init({selector: '.editor', browser_spellcheck: true, menubar: false, toolbar: 'undo redo italic bold', });
				tinymce.init({ selector: '.editor', plugins: "wordcount", menubar: false, browser_spellcheck: true, toolbar: 'undo redo italic bold alignleft aligncenter alignright bullist numlist outdent indent code', setup: function(ed) {ed.on('init', function(ed) {this.getDoc().body.style.fontSize = '12pt';this.getDoc().body.style.fontFamily = 'Georgia';this.getDoc().body.style.lineHeight = '2';});}}); 
				tinymce.get(paragraphr).setContent(storedparagraph);
				}
			}
			var storedconclusion = localStorage.getItem("conclusion"); 
			tinymce.get('conclusion').setContent(storedconclusion);
			swal({   title: "Success!",   text: "Your essay has been retrieved!",   type: "success",   confirmButtonText: "Continue" }); 
	 
	} 
	   
	function addparagraph() {
		var $lstprg    = $( '#lstprg' );
		var div = document.getElementById("lstprg");           // Get the <div> element with id="myDIV"
		var xform = div.getElementsByTagName("textarea").length;
		var prghnm = xform + 1; 
		$lstprg.append( '<p>Body paragraph #' + prghnm + '<a onclick=\'bphelp("bp")\'>Body paragraph HELP</a><br><textarea id="body' + xform + '" name="body' + xform + '" class="editor" required rows="8" cols="80"></textarea><br><input onclick=\'spktxt("body' + xform + '")\' type=\'button\' value=\'🔊 Play\' /></p>');
		
		tinymce.init({ selector: '.editor', plugins: "wordcount", menubar: false, browser_spellcheck: true, toolbar: 'undo redo italic bold alignleft aligncenter alignright bullist numlist outdent indent code', setup: function(ed) {ed.on('init', function(ed) {this.getDoc().body.style.fontSize = '12pt';this.getDoc().body.style.fontFamily = 'Georgia';this.getDoc().body.style.lineHeight = '2';});}});  		
		
		swal({   title: "Success!",   text: "You have added a paragraph!",   type: "success",   confirmButtonText: "Continue" }); 
	}  

function createbib() {
    var x = document.getElementById('leftmenu').style.display;
    if (!x) {
	document.getElementById("leftmenu").style.display = 'block';
	} else if (x === 'none') {
        document.getElementById("leftmenu").style.display = 'block';
    } else {
        document.getElementById("leftmenu").style.display = 'none';
    }
}