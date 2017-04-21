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

$(function(){
	var imgContainer = new Array();
	var toWidth = 0;

	$(".slides .slide1").each(function(i){
		imgContainer[i] = toWidth;
		toWidth += $(this).width();
	});

	$(".slides").width(toWidth);

	$(".menu .menuItem:first").addClass('act').siblings().addClass('inact');
	//设置自动轮播
	var index = 0;
	var timer = setInterval(func,3000);

	function func(){
		$(".slides").stop().animate({marginLeft:-imgContainer[index]+'px'},450);
		$('li.menuItem').eq(index).addClass('act').siblings().removeClass('act');
		index++;
		if(index==5){
			index=0;
		}
	}

	$(".slide1 img").mouseenter(function(){
		$(this).parent().next().show();
		clearInterval(timer);
	});

	$(".slide1 img").mouseleave(function(){
		$(this).parent().next().hide();
		timer = setInterval(func,3000);
	});


	$(".menu ul li").click(function(e){
		$('li.menuItem').removeClass('act').addClass('inact');
		$(this).addClass('act');

		var pos = $(this).prevAll('.menuItem').length;

		$(".slides").stop().animate({marginLeft:-imgContainer[pos]+'px'},450);
		e.preventDefault();
	});
});