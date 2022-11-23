$(function () {
  // 비디오
  $("#video").click(function () {
    var Width = 1000;
    var Height = 500;

    var left = Math.ceil((window.screen.width - Width) / 2);
    var top = Math.ceil((window.screen.height - Height) / 2);

    window.open(
      "video.html",
      "popup01",
      "width=" + Width + ",height=" + Height + ",top=" + top + ",left=" + left
    );
  });
  //   메인 마퀴
  var lastScroll = 0;
  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > lastScroll) {
      //down
      $(".mar1").css({ opacity: "0" });
      $(".mar").css({ opacity: "1" });
    } else {
      //up
      $(".mar").css({ opacity: "0" });
      $(".mar1").css({ opacity: "1" });
    }
    lastScroll = scrollTop;
  });

  //   scroll marque
  var isFn = false;
  $(window).scroll(function () {
    if (isFn) {
      return;
    }
    var scrPos = $(this).scrollTop();

    if (scrPos >= $("#marque").position().top - 500) {
      $("#marque .text").addClass("active");
    } else if (scrPos <= $("#marque").position().top) {
      $("#marque .text").removeClass("active");
    }
    if (scrPos >= $("#marque").position().top + 2720) {
      $("#marque .text").removeClass("active");
    }
  });
});
