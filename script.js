for (let i = 1; i <= 6; i++) {
    $(document).ready(function(){
        let flipy=flip[i];
        let panely=panel[i];
        $("#flipy").click(function(){
          $("#panely").slideDown("slow");
        });
      });   
}