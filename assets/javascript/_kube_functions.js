var KUBE = {
  featureGallery: function(){
    var _config = {
      toggleSelector: '.feature',
      targetImageWrapSel: '.js-featured-image'
    };
    
    var setUpEvents = function(){
      var targetEl = $(_config.targetImageWrapSel);

      $(_config.toggleSelector).on('click', function(){
        fadeAllImages();
        unselectAllToggles();

        targetEl.find($(this).data('imgSel')).addClass('active');
        $(this).addClass('feature--active');
      });
    }
    
    var unselectAllToggles = function(){
      $(_config.toggleSelector).removeClass('feature--active');
    }

    var fadeAllImages = function(){
      $(_config.targetImageWrapSel).find('img').removeClass('active');
    }

    var init = function(options){
      setUpEvents();
    }

    return {
      init: init
    }
  },
  ExperiencesFilter: function(){
    var _config = {
      itemSel: '.experience-box',
      filterSel: '.experience-filter',
      resetKeyword: 'reset',
      filterOutClass: 'off'
    };

    var itemHeight = 0,
        itemWidth = 0;

    var _setUpEvents = function(){
      $(_config.filterSel).on('click', function(){
        _setActiveFilter($(this));
        _filterByClass($(this).data('filter'));
      });
    }

    var _setActiveFilter = function($filter){
      $(_config.filterSel).removeClass('active');
      $filter.addClass('active');
    }

    var _filterByClass = function(filter){

      // console.log('set itemWidth: ', itemWidth);
      //resets filter, so all items show up
      $(_config.itemSel).css({width: itemWidth, opacity: 1});
      
      //filter out content
      if (filter !== _config.resetKeyword) {
        $(_config.itemSel + filter).css({width: 0, opacity: 0});
      }

      console.log('filtering by: ', filter);
    }

    var _init = function(){
      itemWidth = $(_config.itemSel).first().css('width');
      _setUpEvents();
    }

    return {
      init: _init
    }
  }
}