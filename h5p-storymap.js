H5P.StoryMap = (function($){

  function StoryMap(params,id){

    var self = this;


    self.validate = function(){
      //parameter validation should be done here
      return true;
    }

    self.on('enterFullScreen', function () {

      alert("working");
 });

    self.attach = function($container){

      self.$container = $container;
      // var $mapContainer= $('<div id="mapdiv" style="height:400px;" />').appendTo($container);

      $container.addClass('h5p-storymap').css('height', '400px');
      $container.append($('<div>', {id: 'h5p-storymap'}));


      // $container.append(params);

      if(self.validate()){
        new StorymapJS('h5p-storymap',params);
      }



   self.on('exitFullScreen', function () {
     self.$container.css('height', '40px');
     $(window).trigger('resize');
   });



    }

  }

  return StoryMap;
})(H5P.jQuery);
