function WebConfig(){
    var methods = this;
    methods.slider = function(){
        $('.blog-partner').slick({
            infinite: true,
            speed: 600,
            autoplaySpeed : 3000,
            autoplay:  true,
            slidesToShow: 1,
            slidesToScroll: 1,
            margin:20,
            dots:false,
        });
    }
    methods.fixedHeader = function(){
        $(window).bind('scroll load', function () {
			if ($(window).scrollTop() > $('header-navbar').height()) {
				$('.header-navbar').addClass('fixed');
			} else {
				$('.header-navbar').removeClass('fixed');
            }
		});
    }
    methods.initMenu = function(){
		var open = false;
		$('#btn-toggle').on('click' , function(){
			if( open){
				$('#menu-mobi').removeClass('open');
				$('#btn-toggle').removeClass('active');
				$('body').removeClass('menu-open');
			}else{
				$('#menu-mobi').addClass('open');
				$('#btn-toggle').addClass('active');
				$('body').addClass('menu-open');
			}
			open = !open;
		});
		$('body, html').on('click', function(event){
			var target = $(event.target);
			if( !target.is('#menu-mobi , #menu-mobi * ,#btn-toggle ,#btn-toggle *')){
				$('#menu-mobi').removeClass('open');
				$('#btn-toggle').removeClass('active');
				$('body').removeClass('menu-open');
				open = false;
            }
            if( !target.is('#btn-search , #btn-search * ,#search ,#search *')){
				$('#btn-search').parent().removeClass('active-search');
			}
		});
		$('#menu .has-submenu .icon-first-submenu').on('click' , function(event){
			event.preventDefault();
			var parent = $(this).parents('.has-submenu');
			$('#menu .has-submenu').not(parent).removeClass('open').find('.submenu').slideUp()
			$('#menu .has-submenu').not(parent).find('.has-second-submenu').removeClass('open');
			$('#menu .has-submenu').not(parent).find('.second-submenu').slideUp();
			parent.toggleClass('open').find('.submenu').slideToggle();
		});
		$('#menu .has-second-submenu .icon-second-submenu').on('click' , function(event){
			event.preventDefault();
			var parent = $(this).parents('.has-second-submenu');
			$('#menu .has-second-submenu').not(parent).removeClass('open').find('.second-submenu').slideUp();
			parent.toggleClass('open').find('.second-submenu').slideToggle();
        });
        $('#btn-search').on('click', function(event){
            event.preventDefault();
            var parent =  $(this).parent();
            if( parent.hasClass('active-search')){
                parent.removeClass('active-search');
            }else{
                parent.addClass('active-search');
                setTimeout(function(){
                    parent.find('input').focus();
                } , 500);
            }
		})
		$('.has-submenu-tab i').click(function(){
			$('.sub-tab').toggle();
		});
		$('#blog-payment .pay-box-item').hover(function(){
			var index  = $(this).data('image');
			var img = $('.pay-box-image img').attr('src',index).fadeIn();
		})
	}
    methods.init =  function(){
        methods.slider();
        methods.fixedHeader();
        methods.initMenu();
    }
    methods.init();
    return methods;
}

$(function(){
	var webSetting = new WebConfig();
	
})