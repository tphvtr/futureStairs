$('#show_1').click(function() {
	$('#show_1').hide();
 	$('.news_article:nth-child(2) .news_text').show(300);
});

$('#show_2').click(function() {
	$('#show_2').hide();
 	$('.news_article:nth-child(4) .news_text').show(300);
});

$('#show_3').click(function() {
	$('#show_3').hide();
 	$('.news_article:nth-child(6) .news_text').show(300);
 	$('.news_article:nth-child(6) ul').show(300);
});