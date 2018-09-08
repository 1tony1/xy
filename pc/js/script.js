/**
 * 文档就绪
 */
$(function() {
	
	//回到顶部
	var topcontrol = $('#topcontrol');
	//导航条对象
	var nav = $('.nav-wrap');
	//导航条相对于网页原点的垂直位置
	var navPos = nav.offset().top;
	//导航条高度
	var navHeight = nav.outerHeight();
	
	//滚动条事件
	$(window).scroll(function() {
		
		//获得滚动条位置
		var sTop = $(window).scrollTop();
		
		if (sTop >= 200) {
			topcontrol.fadeIn('normal');
		} else {
			topcontrol.fadeOut('normal');
		}
		
		//自动导航条fixed样式
		if (sTop >= navPos) {
			if ( !nav.hasClass('fix') ) {
				nav.addClass('fix');
				//占位
				$('.banner').css('margin-bottom',navHeight);
			}
		} else {
			if ( nav.hasClass('fix') ) {
				nav.removeClass('fix');
				//取消占位
				$('.banner').css('margin-bottom',0);
			}
		}
		
		//判断是否进入海量正版免费下区域
		var introPos = {
			start:$('#post-intro').offset().top - navHeight,
			end: $('#post-intro').offset().top + $('#post-intro').outerHeight() - navHeight
		}
		
		if (sTop >= introPos.start && sTop < introPos.end) {
			$('.intro').addClass('active');
		} else {
			$('.intro').removeClass('active');
		}
		
		//判断是否进入无需苹果账号区域
		var usagePos = {
			start:$('#post-usage').offset().top - navHeight,
			end: $('#post-usage').offset().top + $('#post-usage').outerHeight() - navHeight
		}
		
		if (sTop >= usagePos.start && sTop < usagePos.end) {
			$('.usage').addClass('active');
		} else {
			$('.usage').removeClass('active');
		}
		
		//判断是否进入手机瘦身区域
		var choicenessPos = {
			start:$('#choiceness').offset().top - navHeight,
			end: $('#choiceness').offset().top + $('#choiceness').outerHeight() - navHeight
		}
		
		if (sTop >= choicenessPos.start && sTop < choicenessPos.end) {
			$('.choice').addClass('active');
		} else {
			$('.choice').removeClass('active');
		}
		
	});
	
	topcontrol.click(function() {
		
		$('html,body').animate({scrollTop:0},1000);
		
	});
	
	
	//网页内部锚点链接跳转
	$('.nav-wrap a').click(function() {
		
		//获得对应区域相对于网页原点的位置
		var top = $(this.hash).offset().top - navHeight + 7;
		$('html,body').animate({scrollTop:top},1000);
		return false;
		
	});
	
});
