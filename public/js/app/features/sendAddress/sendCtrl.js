angular.module('snailbox')
  .controller('sendCtrl', function ($rootScope, $scope, $state, $stateParams, $location, userService, _) {
    var sendCtrl = this;

    // =============== //
    sendCtrl.getAllUsers = function () {
      userService.getAllUsers().then(function (allUsers) {
        sendCtrl.allUsers  = allUsers;
        var currentUserIdx = _.findIndex(sendCtrl.allUsers, {_id: $stateParams.id});
        var currentUser    = _.slice(sendCtrl.allUsers, currentUserIdx)[0];
        sendCtrl.allUsers.splice(currentUserIdx, 1);
        sendCtrl.connectionsAndRequests = _.concat(currentUser.connections, currentUser.pendingInvitationsSent, currentUser.pendingInvitationsRecieved);
        _.each(sendCtrl.connectionsAndRequests, function (id, index) {
          if (!id) {
            sendCtrl.connectionsAndRequests.splice(index, 1);
          }
        });
      });
    };

    sendCtrl.getAllUsers();
    // =============== //

    sendCtrl.requestedUsers    = [];
    sendCtrl.addUserToRequests = function (selectedUser) {
      if (!selectedUser) {
        return false;
      }
      if (_.findIndex(sendCtrl.requestedUsers, {_id: selectedUser._id}) >= 0) {
        return false;
      }
      if (_.includes(sendCtrl.connectionsAndRequests, selectedUser._id)) {
        return false;
      }

      sendCtrl.requestedUsers.push(selectedUser);
      $scope.$broadcast('angucomplete-alt:clearInput');
    };

    sendCtrl.removeUserFromRequests = function (userToRemove) {
      var removeItemIdx = _.findIndex(sendCtrl.requestedUsers, {_id: userToRemove._id});
      sendCtrl.requestedUsers.splice(removeItemIdx, 1);
    };

    sendCtrl.sendInvites = function () {
      var ids = [];
      _.each(sendCtrl.requestedUsers, function (invitation) {
        ids.push(invitation._id);
      });
      userService.sendInvites($stateParams.id, ids).then(function (response) {
        console.log('response', response);
      });
    };


  });