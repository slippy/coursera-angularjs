(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);

function SignUpService() {
  var service = this;

  service.saveUser = function (user) {
    console.log ("trying to save user:");
    console.log (user);

    service.user = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        favoriteMenuItem: user.favoriteMenuItem
    };

    console.log ("User Saved!");
    console.log (this.user);
  }

  service.getUserInfo = function () {
    return this.user;
  }

  service.isValidUser = function() {
    if (this.user){
      return true;
    }
    return false;
  }
}



})();
