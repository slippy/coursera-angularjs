(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var toBuyList = this;

  var initItems = [
    {name: "cookies",
     quantity: 10},
    {name: "apples",
     quantity: 3},
    {name: "oranges",
     quantity: 4},
    {name: "ice cream",
     quantity: 2},
    {name: "white bread",
     quantity: 3},
    {name: "can of beans",
     quantity: 2},
    {name: "Hummus",
     quantity: 4}
  ];

  ShoppingListCheckOffService.addBulkItemsToBuy(initItems);
  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.boughtItem = function (itemIndex){
     ShoppingListCheckOffService.addBoughtItem(itemIndex);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items to Buy
  var toBuyItems = [];

  // List of shopping items that have been bought
  var boughtItems = [];

  service.addBulkItemsToBuy = function (items){
      var arrayLength = items.length;
      console.log("length of array is: " + arrayLength);
      for (var i=0; i<arrayLength; i++){
        var item = {
          name: items[i].name,
          quantity: items[i].quantity
        }
        toBuyItems.push (item);
      }
  };

  service.addBoughtItem = function (itemIndex) {
    var item = {
      name: toBuyItems[itemIndex].name,
      quantity: toBuyItems[itemIndex].quantity
    };
    boughtItems.push(item);
    toBuyItems.splice(itemIndex,1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();
