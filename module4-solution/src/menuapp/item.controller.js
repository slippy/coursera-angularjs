(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Fetching menu items for a given category
ItemDetailController.$inject = ['$stateParams','myitems'];
function ItemDetailController($stateParams,myitems) {
  var itemDetail = this;
  itemDetail.categoryName = $stateParams.categoryName;
  console.log ("Searching in ItemDetailController");
  console.log ("Using: " + itemDetail.categoryName);
  console.log (myitems);
  itemDetail.myitems = myitems;
}

})();
