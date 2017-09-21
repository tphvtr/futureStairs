 $(document).ready(function() {
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal_1'); 
    var close = $('.modal_close, #overlay'); 
    var modal = $('.modal_div'); 
     open_modal.click( function(event){
         event.preventDefault(); 
         modal_div = $(this).css({"z-index": '6'});
         var div = $(this).attr('href');
         console.log(div);
         overlay.fadeIn(400, 
             function(){ 
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '19%'}, 200); 
         });
     });

     close.click( function(){ 
            modal
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400);
                      modal_div.css({"z-index": '6'}); 
                 }
             );
     });
});

  $(document).ready(function() {
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal_2'); 
    var close = $('.modal_close, #overlay'); 
    var modal = $('.modal_div'); 
     open_modal.click( function(event){
         event.preventDefault(); 
         modal_div = $(this).css({"z-index": '6'});
         var div = $(this).attr('href');
         console.log(div);
         overlay.fadeIn(400, 
             function(){ 
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '19%'}, 200); 
         });
     });

     close.click( function(){ 
            modal
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400);
                      modal_div.css({"z-index": '5'}); 
                 }
             );
     });
});

   $(document).ready(function() {
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal_3'); 
    var close = $('.modal_close, #overlay'); 
    var modal = $('.modal_div'); 
     open_modal.click( function(event){
         event.preventDefault();
         modal_div = $(this).css({"z-index": '6'}); 
         var div = $(this).attr('href');
         console.log(div);
         overlay.fadeIn(400, 
             function(){ 
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '19%'}, 200); 
         });
     });

     close.click( function(){ 
            modal
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400);
                      modal_div.css({"z-index": '4'}); 
                 }
             );
     });
});

    $(document).ready(function() {
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal_4'); 
    var close = $('.modal_close, #overlay'); 
    var modal = $('.modal_div'); 
     open_modal.click( function(event){
         event.preventDefault(); 
         modal_div = $(this).css({"z-index": '6'});
         var div = $(this).attr('href');
         console.log(div);
         overlay.fadeIn(400, 
             function(){ 
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '19%'}, 200); 
         });
     });

     close.click( function(){ 
            modal
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400);
                      modal_div.css({"z-index": '5'}); 
                 }
             );
     });
});