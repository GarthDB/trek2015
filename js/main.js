function smoothScroll(el, to, duration) {
  if (duration < 0) {
    return;
  }
  var difference = to - $(window).scrollTop();
  var perTick = difference / duration * 10;
  this.scrollToTimerCache = setTimeout(function() {
    if (!isNaN(parseInt(perTick, 10))) {
      window.scrollTo(0, $(window).scrollTop() + perTick);
      smoothScroll(el, to, duration - 10);
    }
  }.bind(this), 10);
}
Zepto(function($){
  $('nav.main a').on('click', function(e) {
    e.preventDefault();
    smoothScroll($(window), $($(e.currentTarget).attr('href')).offset().top, 200);
  });
});
