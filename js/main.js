$(window).on( "load", function() {
       if ($('#preloader').length) {
      $('#preloader').delay(1000).fadeOut('slow', function () {
        $(this).remove();
      });
    }
});
