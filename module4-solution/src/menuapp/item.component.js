(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/templates/item-detail.template.html',
  bindings: {
    myitems: '<'
  }
});

})();
