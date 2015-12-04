var sliderApp = angular.module('sliderApp', [
  'ngAnimate']);


  sliderApp.directive('slider', function($timeout) {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        images: '='
      },
      link: function(scope, elem, attrs) {

      scope.currentIndex = 0;

      scope.next = function() {
        scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
      };

      scope.prev = function() {
        scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;


      };

      scope.$watch('currentIndex', function() {
      scope.images.forEach(function(image) {
      image.visible = false; // make every image invisible
      });

      scope.images[scope.currentIndex].visible = true; // make the current image visible
      });

      },
      templateUrl: 'templatess/slider.html'
    };
  });



sliderApp.controller('SliderController', function($scope) {
  $scope.images = [{
    src: 'public/images/number5.png',
    title: 'Pic 1'
  }, {
    src: 'public/images/number2.png',
    title: 'Pic 2'
  }, {
    src: 'public/images/number3.png',
    title: 'Pic 3'
  }, {
    src: 'public/images/number4.png',
    title: 'Pic 4'
  }, {
    src: 'public/images/number5.png',
    title: 'Pic 5'
  }];
});
