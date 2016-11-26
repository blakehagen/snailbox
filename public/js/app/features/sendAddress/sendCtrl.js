angular.module('snailbox')
  .controller('sendCtrl', function ($rootScope, $scope, $state, $stateParams, $location, userService, _) {
    var sendCtrl         = this;
    sendCtrl.readyToSend = false;

    // INITIAL LOAD DATA //
    sendCtrl.getAllUsers = function () {
      userService.getAllUsers().then(function (allUsers) {
        sendCtrl.allUsers    = _.clone(allUsers);
        var currentUserIdx   = _.findIndex(sendCtrl.allUsers, {_id: $stateParams.id});
        sendCtrl.currentUser = sendCtrl.allUsers.splice(currentUserIdx, 1)[0];
        sendCtrl.connectionsAndRequests = [];
        sendCtrl.connectionsAndRequests = _.concat(sendCtrl.currentUser.connections, sendCtrl.currentUser.pendingInvitationsSent, sendCtrl.currentUser.pendingInvitationsReceived);

        console.log('sendCtrl.connectionsAndRequests:', sendCtrl.connectionsAndRequests);
        console.log('sendCtrl.currentUser:', sendCtrl.currentUser);
      });
    };

    sendCtrl.getAllUsers();
    //END INITIAL LOAD DATA //

    sendCtrl.requestedUsers    = [];
    sendCtrl.addUserToRequests = function (selectedUser) {
      if (!selectedUser) {
        return false;
      }
      if (_.findIndex(sendCtrl.requestedUsers, {_id: selectedUser._id}) >= 0) {
        return false;
      }
      for (var i = 0; i < sendCtrl.connectionsAndRequests.length; i++) {
        if (sendCtrl.connectionsAndRequests[i] === selectedUser._id) {
          console.log('CANNOT ADD USER');
          return false;
        }
      }

      sendCtrl.requestedUsers = _.concat(sendCtrl.requestedUsers, selectedUser);
      $scope.$broadcast('angucomplete-alt:clearInput');

    };

    sendCtrl.removeUserFromRequests = function (userToRemove) {
      var removeItemIdx = _.findIndex(sendCtrl.requestedUsers, {_id: userToRemove._id});
      sendCtrl.requestedUsers.splice(removeItemIdx, 1);
    };

    sendCtrl.cancel = function () {
      $location.path('/user/' + $stateParams.id);
    };

    sendCtrl.goToReview = function () {
      $location.path('/user/' + $stateParams.id + '/review');
    };

    sendCtrl.setReady = function () {
      sendCtrl.readyToSend = !sendCtrl.readyToSend;
    };

    sendCtrl.sendInvites = function () {
      var ids = [];
      _.each(sendCtrl.requestedUsers, function (invitation) {
        ids.push(invitation._id);
      });
      userService.sendInvites($stateParams.id, ids).then(function (response) {
        console.log('response', response);
        if (response === 'Success') {
          sendCtrl.goToReview();
        }
      });
    };


  });