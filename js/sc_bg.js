$(function () {
  var isFn = false;
  $(window).scroll(function () {
    if (isFn) {
      return;
    }
    var scrPos = $(this).scrollTop();

    if (scrPos >= $("#footer_ad").position().top - 500) {
      $("body").css({ backgroundColor: "#333" });
    } else if (scrPos <= $("#footer_ad").position().top) {
      $("body").css({ backgroundColor: "beige" });
    }
  });
});
