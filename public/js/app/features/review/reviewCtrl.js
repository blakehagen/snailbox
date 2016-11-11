angular.module('snailbox')
  .controller('reviewCtrl', function ($stateParams, $location, userService, _) {
    var reviewCtrl = this;

    // // // // //
    reviewCtrl.getUser = function () {
      userService.getConnections($stateParams.id)
        .then(function (user) {
          reviewCtrl.received = user.pendingInvitationsReceived;
          _.each(reviewCtrl.received, function (user) {
            user.selected = false;
          });
          console.log('reviewCtrl.received', reviewCtrl.received);
        }).catch(function (error) {
        console.log('error', error);
      });
    };

    reviewCtrl.getUser();
    // // // // //


    reviewCtrl.selectUser = function (selected, invite, thisUser) {
      invite.selected = !invite.selected;
      console.log('invite', invite);
      console.log('selected', selected);
    };


  });