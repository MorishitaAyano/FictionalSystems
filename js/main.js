'use strict';


// ハンバーガーメニュ―
$(".openbtn").click(function () { //ボタンがクリックされたら
  $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
  $("#h-menu").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
});

$("#h-menu a").click(function () { //メニューのリンクがクリックされたら
  $(".openbtn").removeClass('active'); //ボタンの activeクラスを除去し
  $("#h-menu").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
});


//制作実績スライド
$('.slider').slick({
  autoplaySpeed: 2500,
  speed: 1200,
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '25%',
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev"><i class="fa-solid fa-chevron-left"></i></div>',
  nextArrow: '<div class="slick-next"><i class="fa-solid fa-chevron-right"></i></div>',
  dots: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
});

//ページトップリンク
document.addEventListener("DOMContentLoaded", function () {
  const backToTopLink = document.querySelector(".footer-wrap__head__backtop a");

  backToTopLink.addEventListener("click", function (e) {
    e.preventDefault(); // ページジャンプを防止
    window.scrollTo({
      top: 0,
      behavior: "smooth" // スムーズスクロール
    });
  });
});

//タイトルアニメーション
document.addEventListener('DOMContentLoaded', () => {
  // ① Splitting.js 実行
  const results = Splitting();

  // ② .char 要素を取得
  const chars = document.querySelectorAll('.char');

  // ③ IntersectionObserver の設定
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate'); // 画面外に出たら解除
      }
    });
  }, {
    root: null,
    threshold: 0.01, // 早く発火させる
    rootMargin: '0px 0px -5% 0px' // 少し余裕を持たせる
  });

  // ④ 各 .char に observer を適用
  chars.forEach(char => observer.observe(char));
});

// フェードインについて関数でまとめる
function fadeIn() {
  $('.fadeUpTrigger').each(function () { // fadeUpTriggerクラスの各要素に対して
    let scroll = $(window).scrollTop(); // スクロール位置を取得する
    let triTop = $(this).offset().top + 50; // 要素の上部より50px下の位置を取得
    let winHeight = $(window).height(); // ウィンドウの高さを取得
    if (scroll >= triTop - winHeight) { // 画面内に要素が入ったかを判断
      $(this).addClass('fadeUp'); // fadeUpクラスを付与
    } else {
      $(this).removeClass('fadeUp'); // fadeUpクラスを削除
    }
  });
}

$(window).scroll(function () { // スクロールしたら
  fadeIn(); // 関数を実行
});







