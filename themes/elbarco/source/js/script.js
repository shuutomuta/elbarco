$(function () {
  var headNav = $("header");
	$(window).on('load scroll', function () {
		if($(this).scrollTop() > 350 && headNav.hasClass('fixed') == false) {
			headNav.css({"top": '-100px'});
			headNav.addClass('fixed');
			headNav.animate({"top": 0},450);
		}
		else if($(this).scrollTop() < 300 && headNav.hasClass('fixed') == true){
			headNav.removeClass('fixed');
		}
  });

  jQuery(window).scroll(function (){
    jQuery('.fadein').each(function(){
        var elemPos = jQuery(this).offset().top;
        var scroll = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();
        if (scroll > elemPos - windowHeight + 100){
            jQuery(this).addClass('scrollin');
        }
    });
  });

    $('#nav__toggle').on('click', function() {
      $('body').toggleClass('open');
    });
});
function doPost(){
  $("input[name=submitBtn]").click();
  if (form.checkValidity()){
    SendDummy();
  }else{
  }
}
function SendDummy(){
  document.getElementById('formWrapper').style.display = 'none';
  document.getElementById('thxMessage').style.display = 'block';
}
