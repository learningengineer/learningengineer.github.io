
$( document ).ready(function() {

    let items = "";
   

     $.getJSON('js/portfolio.json', function (data) {  
        items = data; 
        items.forEach((element, index) => {
          $( "#portgrid" ).append('<div class="row"><div class="col-1-of-2">' + items[index].title + '<br> <button class="btn" data="'  + items[index].link + '">Click here to see it</button></div><div class="col-2-of-2">' + items[index].explanation + '</div></div>' );
        });
     });


    $(document).on('click','.btn',function(){
      let newSource =  $(this).attr("data");
      $("#iframeSource").attr("src", newSource);
      $(".popUp").css('visibility', 'visible');
    })

    $("#closePopup").click(function() {
      $(".popUp").css("visibility", "hidden");
      $("#iframeSource").attr("src", "");
  });

  });