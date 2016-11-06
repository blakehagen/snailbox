angular.module('snailbox')
  .controller('sendAddressCtrl', function ($rootScope, $scope, $state, $stateParams, $location, userService, _) {
    var sendAddressCtrl = this;

    // =============== //
    sendAddressCtrl.getAllUsers = function () {
      userService.getAllUsers().then(function (allUsers) {
        sendAddressCtrl.allUsers = allUsers;
        var currentUserIdx       = _.findIndex(sendAddressCtrl.allUsers, {_id: $stateParams.id});
        var currentUser          = _.slice(sendAddressCtrl.allUsers, currentUserIdx)[0];
        sendAddressCtrl.allUsers.splice(currentUserIdx, 1);
        console.log('logged in user =>', currentUser);
        sendAddressCtrl.connectionsAndRequests = _.concat(currentUser.connections, currentUser.pendingInvitationsSent, currentUser.pendingInvitationsRecieved);
        _.each(sendAddressCtrl.connectionsAndRequests, function (id, index) {
          if (!id) {
            sendAddressCtrl.connectionsAndRequests.splice(index, 1);
          }
        });
      });
    };

    sendAddressCtrl.getAllUsers();
    // =============== //

    sendAddressCtrl.requestedUsers    = [];
    sendAddressCtrl.addUserToRequests = function (selectedUser) {
      if (!selectedUser) {
        return false;
      }
      if (_.findIndex(sendAddressCtrl.requestedUsers, {_id: selectedUser._id}) >= 0) {
        return false;
      }
      if (_.includes(sendAddressCtrl.connectionsAndRequests, selectedUser._id)) {
        return false;
      }

      sendAddressCtrl.requestedUsers.push(selectedUser);
      $scope.$broadcast('angucomplete-alt:clearInput');
    };

    sendAddressCtrl.removeUserFromRequests = function (userToRemove) {
      var removeItemIdx = _.findIndex(sendAddressCtrl.requestedUsers, {_id: userToRemove._id});
      sendAddressCtrl.requestedUsers.splice(removeItemIdx, 1);
    };

    sendAddressCtrl.sendInvites = function () {
      var ids = [];
      _.each(sendAddressCtrl.requestedUsers, function (invitation) {
        ids.push(invitation._id);
      });
      userService.sendInvites($stateParams.id, ids).then(function (response) {
        console.log('response', response);
      });
    };


  });