$.fn.extend({
  extendScroll: function(param) {
    var target=this;
    document.addEventListener("scroll",function() {
      var contentHeight = target.attr("scrollHeight");
      var scrollTop = window.scrollY;
      var windowHeight = target.attr("clientHeight");
      var rest = contentHeight - (scrollTop + windowHeight);
      if ( rest < windowHeight ) {
        if (param.onExtend != null) {
          param.onExtend();
        }
      }
    });
    if (param.onInitialize != null) {
      param.onInitialize();
    }
  }
});
