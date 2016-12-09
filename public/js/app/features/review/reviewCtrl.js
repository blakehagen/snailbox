angular.module('snailbox')
  .controller('reviewCtrl', function ($state, $stateParams, $location, userService, _) {
    var reviewCtrl     = this;
    reviewCtrl.loading = true;

    // INITIAL LOAD DATA //
    reviewCtrl.getUser = function () {
      reviewCtrl.loading = true;
      userService.getConnections($stateParams.id)
        .then(function (user) {
          if (_.get(user, 'status', null) === 401) {
            $state.go('login');
            return false;
          }

          reviewCtrl.sent = _.sortBy(user.pendingInvitationsSent, ['lastName', 'firstName']);

          reviewCtrl.received = _.sortBy(user.pendingInvitationsReceived, ['lastName', 'firstName']);

          _.each(reviewCtrl.received, function (user) {
            user.selected = false;
          });
          reviewCtrl.loading = false;
          console.log('reviewCtrl.received', reviewCtrl.received);
          console.log('reviewCtrl.sent', reviewCtrl.sent);
        })
        .catch(function (err) {
          console.log('err', err);
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
      if (_.isEmpty(acceptedRequests)) {
        return false;
      }
      userService.saveConnections($stateParams.id, acceptedRequests)
        .then(function (response) {
          console.log('response saveConnections', response);
          if (_.get(response, 'status', null) === 401) {
            $state.go('login');
            return false;
          }
          if (response === 'Success') {
            reviewCtrl.goToAddressBook();
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    };

    reviewCtrl.deleteSentRequest = function (inviteToDelete) {
      userService.removeRequest($stateParams.id, inviteToDelete)
        .then(function (response) {
          console.log('response', response);
          if (_.get(response, 'status', null) === 401) {
            $state.go('login');
            return false;
          }
          if (response === 'Deleted Request') {
            reviewCtrl.getUser();
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    };

    reviewCtrl.goToAddressBook = function () {
      $location.path('/user/' + $stateParams.id + '/addresses');
    };

  });