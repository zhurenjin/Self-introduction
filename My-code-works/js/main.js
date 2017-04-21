$(function(){ 

// $(window).scroll(function() {
// if($(window).scrollTop()>=400){
// $(".back-top").fadeIn(500);
// }else{
// $(".back-top").fadeOut(500);
// }
// });
//
// $('.back-top').click(function (e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop: 0}, 800);
// });

  // 服务帮助
$(".help-box .box-left ul").hide();
$(".help-box .box-left h3").on("click",function(){
     $(this).next("ul").stop().slideToggle();
     $(this).toggleClass("actived");
})


})