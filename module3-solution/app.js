(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'narrowList',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController () {
  var narrowList = this;
  narrowList.isEmpty = function () {
    if (typeof narrowList.found != 'undefined'){
      if (narrowList.found.length > 0) {
        return false;
      }
      else {
        return true;
      }
    }
    return false;
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var narrowList = this;



  narrowList.searchItem = function (searchTerm){
    console.log ("Searching " + searchTerm);
    var promise = MenuSearchService.getMatchedMenuItems (searchTerm);
    promise
     .then(function (response) {
       console.log(response);
       narrowList.found = response;
    });
  }

  narrowList.removeItem = function (itemIndex){
    narrowList.found.splice(itemIndex, 1);
  }

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService ($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then (function (result){
      var foundItems = [];
      var arrayLength = result.data.menu_items.length;
      if (!searchTerm || searchTerm.length === 0 || !searchTerm.trim()){
        return foundItems;
      }
      for (var i=0; i<arrayLength; i++){
        if (result.data.menu_items[i].name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
            foundItems.push (result.data.menu_items[i]);
        }
      }
      return foundItems;
    });

  }

}

})();
