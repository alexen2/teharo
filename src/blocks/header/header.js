$(document).ready(function() {
	$('.header__btn').click(function() {
		$('.header__mobile').toggleClass('header__mobile--open');
		$('body').toggleClass('overflow-heidden ');
	});

	$('.header-mobile__btn').click(function() {
		$('.header__mobile').toggleClass('header__mobile--open');
		$('body').toggleClass('overflow-heidden ');
	});

	let scrolled = 0;

	// changeScrolled();


$(window).scroll(function(){
	let $this = $(this),
		st = $this.scrollTop();

	menuScrollDesktop(st);
});

$(window).resize(function(){
	let st = $(window).width();

	menuDesktopShow(st);
});

function menuScrollDesktop(st) {
	if(st > scrolled){
		$('body').addClass('scrolled');
	}else{
		$('body').removeClass('scrolled');
	}
};

function menuDesktopShow(st) {
	if(st > 991) {
		if($('.overflow-heidden').length) {
			$('.header__mobile').toggleClass('header__mobile--open');
			$('body').toggleClass('overflow-heidden');
		}
	}
};

function changeScrolled() {
	scrolled = 0;
};

});