var matchHeight = function(options){
  $(options.slaveEl).height($(options.masterEl).height());
}

var executeAfterWindowResize = function(fx, shouldRunOnWindowLoad){
  var resizeTimer;

  if (shouldRunOnWindowLoad) {
    setTimeout(function(){
      fx();
    },100);
  }

  $(window).on('resize', function(e) {

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (fx)
        fx();
    }, 500);
  });
};