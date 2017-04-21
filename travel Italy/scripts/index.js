$(document).ready(function(){
	var left = $(".bg1").position().left;
	var top = $(".bg1").position().top;
 
	$(".con1").css("top",top+97).css("left",left+143);
	$(".con2").css("top",top+100).css("left",left+265);
	$(".con3").css("top",top+282).css("left",left+310);

	$(".con1").hover(function(){
		$(".monsa1,.text1").delay(450).fadeIn(600);
	},function(){
		$(".monsa1,.text1").fadeOut(600);
	});
	$(".con2").hover(function(){
		$(".monsa2,.text2").delay(450).fadeIn(600);
	},function(){
		$(".monsa2,.text2").fadeOut(600);
	});
	$(".con3").hover(function(){
		$(".monsa3,.text3").delay(450).fadeIn(600);
	},function(){
		$(".monsa3,.text3").fadeOut(600);
	});
})

