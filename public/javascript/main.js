$(".off-canvas-nav").on("click",function(){
	$("nav").toggleClass("mobile-nav");
	$("div#sg-wrapper").toggleClass("sg-canvas");
});

$("#code-toggle-typography").on("click",function(){
  $(".code-block-typography").toggleClass("code-show");
});

$("#code-toggle-icons").on("click",function(){
  $(".code-block-icons").toggleClass("code-show");
});

$("#code-toggle-buttons").on("click",function(){
  $(".code-block-buttons").toggleClass("code-show");
});


$("#code-toggle-forms").on("click",function(){
  $(".code-block-forms").toggleClass("code-show");
});


