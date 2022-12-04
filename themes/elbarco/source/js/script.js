$(function () {
  let headNav = $("header");
	$(window).on('load scroll', function () {
		if($(this).scrollTop() > 200 && headNav.hasClass('fixed') == false) {
			headNav.css({"top": '-100px'});
			headNav.addClass('fixed');
			headNav.animate({"top": 0},300);
		}
		else if($(this).scrollTop() < 100 && headNav.hasClass('fixed') == true){
			headNav.removeClass('fixed');
		}
  });

  $(window).scroll(function (){
    $('.fadein').each(function(){
      let elemPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight +100){
        $(this).addClass('scrollin');
      }
    });
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


(function($) {
  $(function() {
      var $header = $('#top-head');
      $('#nav-toggle').click(function(){
          $header.toggleClass('open');
      });
  });
})(jQuery);

$(function () {
  $('#nav-toggle').on('click', function () {
      if ($(".nav-toggle-txt").text() === '閉じる') {
          $(".nav-toggle-txt").text('メニュー');
      } else {
          $(".nav-toggle-txt").text('閉じる');
      }
  });
});

var date = new Date();
var start_year = 1990;
var estimate_year;
estimate_year = date.getFullYear()-start_year;
var elem = document.getElementById("year");
elem.innerHTML = estimate_year;ß 