$(function () {
  var page2_top = $("#video").position().top;

  $(window).scroll(function () {
    //
    var scr_val = $(this).scrollTop(); //현재 스크롤값

    $("#video").css({
      "background-position-y": scr_val,
    });

    if (scr_val > page2_top) {
      //현재 스크롤값이 page2_top 값 보다 크면실행
      $("#video").css({
        "background-position-y": scr_val - page2_top,
        //scr_val - page2_top 현재 스크롤 값에서 두번쨰 페이지의 top 값을 뺀값
      });
      console.log(scr_val - page2_top);
    } else {
      //현재 스크롤값이 page2_top 값 보다 작으면 실행
      $("#video").css({
        "background-position-y": 0,
      });
    }
  });
});
