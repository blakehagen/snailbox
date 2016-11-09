angular.module('snailbox')
  .controller('reviewCtrl', function ($stateParams, $location, userService, _) {
    var reviewCtrl = this;

    reviewCtrl.getUser = function () {
      userService.getConnections($stateParams.id)
        .then(function (user) {
          reviewCtrl.received = user.pendingInvitationsReceived;
          console.log('reviewCtrl.received', reviewCtrl.received);
        }).catch(function (error) {
        console.log('error', error);
      });
    };


    reviewCtrl.getUser();


  });