(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.checkFood = function () {

    if ($scope.lunchlist.length == 0) {
      $scope.myResult = "Please enter data first";
    }
    else {
      var numFood = calculateNumberOfFoodItems($scope.lunchlist);
      if (numFood <= 3) {
         $scope.myResult = "Enjoy!";
      }
      else {
         $scope.myResult = "Too much!";
      }
    }
  };

  $scope.showCount = function () {
    return "Number of food items is: " + calculateNumberOfFoodItems($scope.lunchlist);
  }

  // this calculateNumberOfFoodItems function ignores empty strings
  function calculateNumberOfFoodItems(string) {
      var count = 0;
      var arr = string.split(",");

      var arrayLength = arr.length;
      for (var i = 0; i < arrayLength; i++) {
        if (arr[i] && arr[i].trim().length >0) {
          count++;
        }
      }
      return count;

      // if I didn't ignore empty strings this is what the function would be 
      // return string.split(",").length;
  }

}

})();
