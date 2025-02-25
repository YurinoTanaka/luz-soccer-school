$(function () {
  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrow: false,
  });

  // 要素を取得
  const button = document.querySelector('.js-backToTop');
  // クリックイベント
  button.addEventListener('click', () => {
    // ページ上部へスクロール
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  });
  // スクロールイベント
  window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
      button.classList.add('is-active');
    }else{
      button.classList.remove('is-active');
    }
  });
 });