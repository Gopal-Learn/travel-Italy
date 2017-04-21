$(document).ready(function(){
		$("#textInput").focus(function(){
			if (this.value=='please write your comments here') {
			this.value='';
		}
	});
		$("#textInput").focusout(function(){
			if(this.value==""){
				this.value = 'please write your comments here';
			}
		});

		$(".replyText").click(function(){
			$(this).parent().next(".reply").slideDown();
		});

		$(".reply button").click(function(){
			$(".reply").slideUp();
		});
})