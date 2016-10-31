angular.module('snailbox')
  .controller('sendAddressCtrl', function ($rootScope, $scope, $state, $stateParams, $location, userService, _) {
    var sendAddressCtrl = this;

    sendAddressCtrl.getAllUsers = function () {
      userService.getAllUsers().then(function (allUsers) {
        sendAddressCtrl.allUsers = allUsers;
        console.log('sendAddressCtrl.allUsers', sendAddressCtrl.allUsers);
      });
    };

    sendAddressCtrl.getAllUsers();

    sendAddressCtrl.requestedUsers    = [];
    sendAddressCtrl.addUserToRequests = function (selectedUser) {
      sendAddressCtrl.requestedUsers.push(selectedUser);
      $scope.$broadcast('angucomplete-alt:clearInput');
      console.log('sendAddressCtrl.requestedUsers', sendAddressCtrl.requestedUsers);
    };

    sendAddressCtrl.removeUserFromRequests = function (userToRemove) {
      var removeItemIdx = _.findIndex(sendAddressCtrl.requestedUsers, {_id: userToRemove._id});
      sendAddressCtrl.requestedUsers.splice(removeItemIdx, 1);
      console.log('sendAddressCtrl.requestedUsers', sendAddressCtrl.requestedUsers);
    };


  });