





$( document ).ready(function() {
    $('.btn').click(function() {
          let newSource =  $(this).attr("data");
          console.log(newSource);
          $("#iframeSource").attr("src", newSource);
          $(".popUp").css('visibility', 'visible');

      });

      $("#closePopup").click(function() {
        $(".popUp").css('visibility', 'hidden');
        $("#iframeSource").attr("src", "");
      })
    



});