var vSelect = {
    init:function(){
        this.imgShow();
        $(".unselect").hide();
    },
    imgStop:function(e){
        e.stopPragation();   
    },
    imgShow:function(){
        $(".lessonimgbox").bind("mouseover",function(){
            var _pop = $(this).find(".img-pop");
            $(this).css({background:"gray"});
            TweenMax.to(_pop,0.5,{top:140,ease:Bounce.easeOut});
            $(".select").hide();
            $(".unselect").show();
        });

        $(".lessonimgbox").bind("mouseout",function(){
            var _pop = $(this).find(".img-pop");
            $(this).css({background:"rgba(0,0,0,0)"});
            TweenMax.to(_pop,0.5,{top:340,ease:Linear.easeNone});
            $(".select").show();
            $(".unselect").hide();
        })

    }
}

$(function(){
    vSelect.init();
})