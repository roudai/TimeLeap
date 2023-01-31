//スムーズスクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 300;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


//ページトップ
$(function() {
    var topBtn = $('#pagetop');    
    topBtn.hide();
    //スクロールが400に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
        //ボタンの表示方法
            topBtn.fadeIn();
        } else {
        //ボタンの非表示方法
            topBtn.fadeOut();
        }
    });
});


//スクロールアニメ
$(function(){
    $(window).scroll(function (){
        $('.fade-b,.fade-b-ct').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('load');
            }
        });
    });
});


//ロード画面
window.onload = function() {
  //ロード後付加クラス
    $("#loading").addClass("loaded");
    $(".t-anime-1,.t-anime-2,.t-anime-3,.t-anime-4").addClass("load");
}

