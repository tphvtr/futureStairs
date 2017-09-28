$('#hide_1').css('display', 'none');
$('#hide_2').css('display', 'none');
$('#hide_3').css('display', 'none');

$('#show_1').click(function() {
	$('#show_1').hide();
 	$('.news_article:nth-child(2) .news_text').show(300);
 	$('#hide_1').show(300);
});

$('#hide_1').click(function() {
	$('#hide_1').hide();
 	$('.news_article:nth-child(2) .news_text').hide(300);
 	$('#show_1').show(300);
 	 $('html, body').animate({
        scrollTop: $("#canvas_light-blue").offset().top
    }, 300);
});

$('#show_2').click(function() {
	$('#show_2').hide();
 	$('.news_article:nth-child(4) .news_text').show(300);
 	$('#hide_2').show(300);
});

$('#hide_2').click(function() {
	$('#hide_2').hide();
 	$('.news_article:nth-child(4) .news_text').hide(300);
 	$('#show_2').show(300);
 	 $('html, body').animate({
        scrollTop: $("#canvas_green").offset().top
    }, 300);
});

$('#show_3').click(function() {
	$('#show_3').hide();
 	$('.news_article:nth-child(6) .news_text').show(300);
 	$('.news_article:nth-child(6) ul').show(300);
 	$('#hide_3').show(300);
});

$('#hide_3').click(function() {
	$('#hide_3').hide();
 	$('.news_article:nth-child(6) .news_text').hide(300);
 	$('.news_article:nth-child(6) ul').hide(300);
 	$('#show_3').show(300);
 	 $('html, body').animate({
        scrollTop: $("#canvas_dark-blue").offset().top
    }, 300);
});