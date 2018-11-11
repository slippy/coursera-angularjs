(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['SignUpService','MenuService'];
function RegistrationController(SignUpService,MenuService) {
  var reg = this;

  reg.submit = function () {

    MenuService.getFavoriteMenuItem (reg.user.favoriteMenuItem).
    then(function(response) {
        console.log ("Good Favorite Menu Item");
        SignUpService.saveUser(reg.user);
        reg.completed = true;
        reg.notValidItem = false;
    },
    function(response){
      reg.notValidItem = true;
    });

  }

}


})();
