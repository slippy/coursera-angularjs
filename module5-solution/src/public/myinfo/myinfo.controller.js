(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService','MenuService','ApiPath'];
function MyInfoController(SignUpService,MenuService, ApiPath) {

  var myinfo = this;

  myinfo.basePath = ApiPath;

  if (SignUpService.isValidUser()){

    myinfo.user = SignUpService.user;

    MenuService.getFavoriteMenuItem (SignUpService.user.favoriteMenuItem).
    then (function (response){
      console.log (response);
      myinfo.menuItem = response;
      myinfo.isValidUser = true;
    });
  }
  else {
    myinfo.notValidUser = true;
  }


}


})();
