angular.module('snailbox')
  .controller('reviewCtrl', function ($stateParams, $location, userService, _) {
    var reviewCtrl     = this;
    reviewCtrl.loading = true;

    // INITIAL LOAD DATA //
    reviewCtrl.getUser = function () {
      userService.getConnections($stateParams.id)
        .then(function (user) {
          reviewCtrl.received = user.pendingInvitationsReceived;
          _.each(reviewCtrl.received, function (user) {
            user.selected = false;
          });
          reviewCtrl.loading = false;
          console.log('reviewCtrl.received', reviewCtrl.received);
        }).catch(function (error) {
        console.log('error', error);
      });
    };

    reviewCtrl.getUser();
    //END INITIAL LOAD DATA //

    reviewCtrl.cancel = function () {
      $location.path('/user/' + $stateParams.id);
    };

    reviewCtrl.selectUser = function (selected, invite, thisUser) {
      invite.selected = !invite.selected;
    };

    reviewCtrl.acceptInvites = function () {
      var acceptedRequests = [];
      _.each(reviewCtrl.received, function (request) {
        if (request.selected) {
          acceptedRequests.push(request._id);
        }
      });
      console.log('acceptedRequests', acceptedRequests);
      userService.saveConnections($stateParams.id, acceptedRequests).then(function (response) {
        console.log('response', response);
        reviewCtrl.getUser();
      });


    };


  });