'use strict';

angular.module('snailbox').controller('editAddressCtrl', function ($stateParams, $state, $location, userService) {

  var editAddressCtrl = this;

  editAddressCtrl.getUser = function () {
    userService.getUserById($stateParams.id).then(function (userData) {
      editAddressCtrl.userAddress = userData.address;
      console.log('editAddressCtrl.userAddress', editAddressCtrl.userAddress);
    });
  };

  editAddressCtrl.getUser();


});