(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryListController', CategoryListController);


CategoryListController.$inject = ['items'];
function CategoryListController(items) {
  var categoryList = this;
  console.log ("CategoryListController()");
  console.log (items);
  categoryList.items = items;
  console.log("CategoryListController finished executing");
}

})();
