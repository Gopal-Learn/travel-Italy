$(function(){
	$(".buttonLogo1").click(function(){
		$(this).toggleClass("after");
		$(".nav").slideToggle();
	});
	$("#nav ul li.rome").hover(function(){
		$(this).find(".romeblo").show();
	},function(){
		$(this).find(".romeblo").hide();	
	});

	$("#nav ul li.milan").hover(function(){
		$(this).find(".milanblo").show();
	},function(){
		$(this).find(".milanblo").hide();	
	});

	$("#nav ul li.venice").hover(function(){
		$(this).find(".veniceblo").show();
	},function(){
		$(this).find(".veniceblo").hide();	
	});

	$(".imgRight .loveImg").hover(function(){
		$(this).find(".love").show();
		$(this).find(".unlove").hide();
	},function(){
		$(this).find(".unlove").show();
		$(this).find(".love").hide()
	});
});
