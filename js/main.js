$(window).on( "load", function() {
       if ($('#preloader').length) {
      $('#preloader').delay(1000).fadeOut('slow', function () {
        $(this).remove();
      });
    }
});
$(document).ready(function(){
  $(".ejs--73f9b4e94a7a1fe74e11107d5ab2ef").attr("id","start");
  $(".ejs--cbcfe0a1421cadac9a04c81d6431d6").attr("id","loding");
  $(".ejs--71527b6509aa48afce3ce1a11c02f0").attr("id","naming");
  $(".ejs--057800d021995e1347ec07cb748672").addClass("backg");
  $("#loding").attr("hidden","");
  $("#loding").hide();
  $("#start").on('touchstart click', function() {
  $(".ejs--057800d021995e1347ec07cb748672").removeClass("backg");
  $("#loding").show();
  $("#loding").removeAttr("hidden");
  $("div").remove(".ejs--f3a1903d935f6cf720d4a0498db62a");
  setTimeout(
function() 
{
  $("div").remove(".ejs--cbcfe0a1421cadac9a04c81d6431d6");
}, 4500);
});
});