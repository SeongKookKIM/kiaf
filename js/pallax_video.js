$(function () {
  var page2_top = $("#video").position().top;

  $(window).scroll(function () {
    //
    var scr_val = $(this).scrollTop();

    $("#video").css({
      "background-position-y": scr_val,
    });

    if (scr_val > page2_top) {
      $("#video").css({
        "background-position-y": scr_val - page2_top,
      });
      console.log(scr_val - page2_top);
    } else {
      $("#video").css({
        "background-position-y": 0,
      });
    }
  });
});
