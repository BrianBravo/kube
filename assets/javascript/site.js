// @codekit-prepend "vendor/jquery-1.11.3.min.js";
// @codekit-prepend "vendor/snap.svg-min.js";
// @codekit-prepent "_utils.js";
// @codekit-prepent "_kube_functions.js";

$(function(){
  "use strict";

  var pageId = $('body').data('pageId');

  $('header .icon-menu').on('click', function(){
    $('nav.main-nav').addClass('main-nav--opened');
  })
  $('.main-nav .close-btn').on('click', function(){
    $('nav.main-nav').removeClass('main-nav--opened');
  })
  switch(pageId) {
    case 'home': 
      //features
      var featureGallery = KUBE.featureGallery();

      featureGallery.init();
      
      break;
    case 'experiences':
      var experiencesFilter = KUBE.ExperiencesFilter();
          experiencesFilter.init();
      break
    default:
      break;
  }
});
