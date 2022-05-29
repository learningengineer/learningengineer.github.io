
$( document ).ready(function() {

    let items = "";
   

     $.getJSON('js/portfolio.json', function (data) {  //This gets the question, answer, explanation data from the json file and dumbps it into the items variable. 
        items = data; 
        loadEntries();  //invokes the newQuestion function. 
     });


   $("#closePopup").click(function() {
    $(".popUp").css('visibility', 'hidden');
    $("#iframeSource").attr("src", "");
    });



    function loadEntries() {
 
              items.forEach((element, index) => {
                $( "#portgrid" ).append('<div class="row"><div class="col-1-of-2">' + items[index].title + '<br> <button class="btn" data="'  + items[index].link + '">Click here to see it</button></div><div class="col-2-of-2">' + items[index].explanation + '</div><div class="link">' + items[index].link + '</div></div>' );
              });

    }

    $(document).on('click','.btn',function(){
      let newSource =  $(this).attr("data");
      console.log(newSource);
      $("#iframeSource").attr("src", newSource);
      $(".popUp").css('visibility', 'visible');


    })

  });