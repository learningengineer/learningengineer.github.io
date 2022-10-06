$("div").click(function(){
    let xid = $(this).next().prop("id");
    xid = "#" + xid; 
    let myaudio = $(xid).prop("controls"); 
    if (myaudio == false) {
      $(xid).prop("controls",true);
    } else {
       $(xid).prop("controls",false);
    }
  });