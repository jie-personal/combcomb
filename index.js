// $(window).mousemove(function (e) {
//     var parentHeight = $(".comb-razor-img-c").height();
//     var topOffset = 30; // circle size
//     var leftOffset = 60;  
//     $(".circle").css({ top: e.pageY - parentHeight - topOffset, left: e.pageX - leftOffset }); 
// });

// $(window).mousemove(function (e) {
//   var parentPosition = $(".comb-razor").position();
//   var parentTop = parentPosition.top;
//   var parentLeft = parentPosition.left;
//   // 計算 circle 在 comb-razor 的相對位置
//   $(".circle").css({ top: e.pageY - parentTop, left: e.pageX - parentLeft }); 
// });

/**
 * check position in element
 * @param {int} x 
 * @param {int} y 
 * @param {Object} element dom element 
 * @returns return true if in element rectangle
 */
function isPositionInElement(x, y, element) {
  let position = $(element).offset(); // 絕對座標
  let height = $(element).height();
  let width = $(element).width();
  if (y >= position.top && y <= position.top + height
    && x >= position.left && x <= position.left + width) {
    return true;
  } else {
    return false;
  }
}
  
$(function(){
  $(window).mousemove(function (e) {
    let parentPosition = $(".comb-razor").offset(); // 絕對座標
    let parentTop = parentPosition.top;
    let parentLeft = parentPosition.left;
    // 計算 circle 在 comb-razor 的相對位置
    let offsetTop = e.pageY - parentTop;
    let offsetLeft = e.pageX - parentLeft;
    
    // move circle to position
    $(".circle").css({ top: offsetTop, left: offsetLeft });

    // 檢查是否在字樣 SVG 區域
    let show = false;
    let gifs = ['picture/comb.gif', 'picture/razor.gif'];
    let gif = gifs[0];
    let items = $(".comb-razor-img").toArray();
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      // 判斷滑鼠是否在其中一張圖片內
      show = isPositionInElement(e.pageX, e.pageY, item);
      if (show) {
        gif = gifs[index];
        break;
      }
    }

    if (!show) {
      $(".circle").css({ display: "none" });
    } else {
      $(".circle").css({ display: "block" });
      // 如果圖片不同，就重新載入，不然就繼續之前的狀態播放
      const currentGif = $(".circle-img").attr("src");
      if (currentGif != gif) {
        $(".circle-img").attr("src", gif);
      }
    }
  });
})


//文字漸入
$(function(){
  let items = $(".titleM, .mp").toArray()
  console.log(items)
  $(window).scroll(function(){
    items.forEach(function(item){
      if($(this).scrollTop() >= $(item).offset().top - 500){
        $(item).addClass("show")
      }
    })
  })
  items.forEach(function(item){
    if($(this).scrollTop() >= $(item).offset().top - 500){
      $(item).addClass("show")
    }
  })
})




/*$(document).ready(function(){
  $(".menu-media").click(function(){
    $(".menu-media-container").toggle();
  });
});*/


//menu
$(document).ready(function(){
  let showMenu = false;
  $(".menu-media").click(function() {
    showMenu = !showMenu; // switch flag
    if (showMenu) {
      // slide in
      $(".menu-media-container").animate({
        right: '0%',
      });
    } else {
      // slide out
      $(".menu-media-container").animate({
        right: '-60%',
      }/*, "slow"*/);
    }
  });
});


//回到上方
$(function(){
	$('#BackTop').click(function(){ 
		$('html,body').animate({scrollTop:0}, 333);
	});
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 300 ){
			$('#BackTop').fadeIn(222);
		} else {
			$('#BackTop').stop().fadeOut(222);
		}
	}).scroll();
});