$(document).ready(function() {
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal_1'); 
    var close = $('.modal_close, #overlay'); 
    var modal = $('.modal_div'); 
     open_modal.click( function(event){
         event.preventDefault(); 
         $('.blog_article-second').css("z-index", '7')
         var div = $(this).attr('href');
         console.log(div);
         overlay.fadeIn(400, 
             function(){ 
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '28%'}, 200);
         });
     });

     close.click( function(){ 
            modal
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400);
                 }
             );
     });
     $('#show_1').click(function() {
    $('#second-post').css('display', 'none');
  $('div#first-post').css('display', 'block');
  modal.css('display','none');
});
});


$(document).ready(function() {
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal_2'); 
    var close = $('.modal_close, #overlay'); 
    var modal = $('.modal_div'); 
     open_modal.click( function(event){
         event.preventDefault(); 
         $('.blog_article-second').css("z-index", '5')
         var div = $(this).attr('href');
         console.log(div);
         overlay.fadeIn(400, 
             function(){ 
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '28%'}, 200);
         });
     });

     close.click( function(){ 
            modal
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400);
                 }
             );
     });
     $('#show_2').click(function() {
    $('#first-post').css('display','none');
  $('#second-post').css('display', 'block');
  modal.css('display', 'none');
});
});


$(document).ready(function() {
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal_3'); 
    var close = $('.modal_close, #overlay'); 
    var modal = $('.modal_div'); 
     open_modal.click( function(event){
         event.preventDefault();
         $('.open_modal_3').css("z-index", '8')
         $('.blog_article-third').css("z-index", '7')
         var div = $(this).attr('href');
         console.log(div);
         overlay.fadeIn(400, 
             function(){ 
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '28%'}, 200);
         });
     });

     close.click( function(){ 
         $('.open_modal_3').css("z-index", '2')
         $('.blog_article-third').css("z-index", '1')
            modal
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400);
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
          $('.open_modal_4').css("z-index", '9')
         $('.blog_article-fourth').css("z-index", '8')
         var div = $(this).attr('href');
         console.log(div);
         overlay.fadeIn(400, 
             function(){ 
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '28%'}, 200);
         });
     });

    close.click( function(){ 
            modal
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400);
                 }
             );
     });
});
