$(function(){
    $(".header__drawer-btn").on('click', function(){
        $(".header__drawer-btn-area").toggleClass('active');
        $(".header__gnav-list").toggleClass('active');
    });

    $(".header__gnav-item a").on('click', function () {//ナビゲーションのリンクがクリックされたら
        $(".header__drawer-btn-area").removeClass('active');//ボタンの activeクラスを除去し
        $(".header__gnav-list").removeClass('active');//ナビゲーションのpanelactiveクラスも除去
    });
});