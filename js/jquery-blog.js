
$(document).ready(function() {
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal_1'); 
    var close = $('.modal_close, #overlay'); 
    var modal = $('.modal_div'); 
     open_modal.click( function(event){
         event.preventDefault(); 
         var div = $(this).attr('href');
         console.log(div);
         overlay.fadeIn(400, 
             function(){ 
                modal.hide();
                   $('html, body').animate({
                 scrollTop:
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '28%'}, 200).offset().top
    }, 1000);
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
    $('.wrap_post').hide(300);
  $('div#first-post').show(300);
   $('html, body').animate({
        scrollTop: $("#blog-date").offset().top
    }, 400);
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
         var div = $(this).attr('href');
         console.log(div);
         overlay.fadeIn(400, 
             function(){ 
                modal.hide();
                open_modal.css("z-index", '3');
                $('.blog_article-second').css("z-index", '2');
                $('.open_modal_3').css("z-index", '1');
                  $('html, body').animate({
                 scrollTop:
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '28%'}, 200).offset().top
    }, 1000);
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
    $('.wrap_post').hide(300);
  $('#second-post').show(300);
   $('html, body').animate({
        scrollTop: $("#blog-date").offset().top
    }, 300);
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
         var div = $(this).attr('href');
         console.log(div);
         overlay.fadeIn(400, 
             function(){ 
                modal.hide();
                open_modal.css("z-index", '3');
                $('.blog_article-third').css("z-index", '2');
                $('.open_modal_2').css("z-index", '1');
                  $('html, body').animate({
                 scrollTop:
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '28%'}, 200).offset().top
    }, 1000);
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
      $('#show_3').click(function() {
    $('.wrap_post').hide(300);
  $('#third-post').show(300);
   $('html, body').animate({
        scrollTop: $("#blog-date").offset().top
    }, 300);
  modal.css('display', 'none');
});
});


$(document).ready(function() {
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal_4'); 
    var close = $('.modal_close, #overlay'); 
    var modal = $('.modal_div'); 
     open_modal.click( function(event){
         event.preventDefault(); 
         var div = $(this).attr('href');
         console.log(div);
         overlay.fadeIn(400, 
             function(){ 
                 modal.hide();
                  open_modal.css("z-index", '3');
                $('.blog_article-fourth').css("z-index", '2');
                $('.open_modal_3').css("z-index", '1');
            $('html, body').animate({
                 scrollTop:
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '28%'}, 200).offset().top
    }, 1000);
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
     $('#show_4').click(function() {
    $('.wrap_post').hide(300);
  $('#fourth-post').show(300);
   $('html, body').animate({
        scrollTop: $("#blog-date").offset().top
    }, 300);
  modal.css('display', 'none');
});
});
