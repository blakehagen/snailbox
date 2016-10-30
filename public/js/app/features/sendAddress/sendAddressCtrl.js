angular.module('snailbox')
  .controller('sendAddressCtrl', function ($scope, $state, $stateParams, $location, userService) {
    var sendAddressCtrl = this;

    sendAddressCtrl.getAllUsers = function () {
      userService.getAllUsers().then(function (allUsers) {
        sendAddressCtrl.allUsers = allUsers;
        console.log('sendAddressCtrl.allUsers', sendAddressCtrl.allUsers);
      });
    };

    sendAddressCtrl.getAllUsers();


  });