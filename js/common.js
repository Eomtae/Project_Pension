$("body").prepend("<header>");
$('body').append('<footer>');
$("header").load("./inc.html header");
$('footer').load('./inc.html footer')

$(function(){
  // 스크롤 시 header fade-in
  $(document).on('scroll', function(){
      if($(window).scrollTop() > 100){
          $("header").removeClass("deactive");
          $("header").addClass("active");
      }else{
          $("header").removeClass("active");
          $("header").addClass("deactive");
      }
  })

});