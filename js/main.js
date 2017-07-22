
jQuery(document).ready(function($){
	/*Создание слайда*/
	$('.cd-testimonials-wrapper').flexslider({
		selector: ".feed1 > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		start: function(){
			$('.feed1').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
});
	/*Плавающее меню*/
	var options = {
  offset: 600
}
var header = new Headhesive('.header_menu', options);


/*Плавный переход к странице*/
	$("a.scrollto").click(function () {
        var elementClick = '#'+$(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 700);
        return false;
    });

/*Скрытие значков на полях ввода письма*/
    $("#name").focus(function(){
        $(".icon1").css("display", "inline").fadeOut(200);
    });
    $("#name").focusout(function(){
    $(".icon1").css("display", "visible").fadeIn(200);
});
        $("#email").focus(function(){
        $(".icon2").css("display", "inline").fadeOut(200);
    });
    $("#email").focusout(function(){
    $(".icon2").css("display", "visible").fadeIn(200);
});

    $("#phone").focus(function(){
        $(".icon3").css("display", "inline").fadeOut(200);
    });
    $("#phone").focusout(function(){
    $(".icon3").css("display", "visible").fadeIn(200);
});
        $("#message").focus(function(){
        $(".icon4").css("display", "inline").fadeOut(200);
    });
    $("#message").focusout(function(){
    $(".icon4").css("display", "visible").fadeIn(200);
});
}); /*Конец скрытия значков на полях ввода письма*/

