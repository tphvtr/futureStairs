var Lutsk = $("#Lutsk");

Lutsk.mouseenter(
	function(){
		$(this).attr({
			style: "fill: yellow",
			opacity: .52
		});
	});

Lutsk.mouseleave(
	function(){
		$(this).attr("style", "fill: transparent");
	});
