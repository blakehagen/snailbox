'use strict';

angular.module('snailbox').controller('userHomeCtrl', function ($stateParams, $state, $location, userService, mapService, _) {
  var userHomeCtrl     = this;
  userHomeCtrl.loading = true;

  // INITIAL LOAD DATA //
  userHomeCtrl.getUser = function () {
    userService.getUserById($stateParams.id)
      .then(function (user) {
        if (!user.address.address1) {
          $location.path('/user/' + $stateParams.id + '/new');
        }
        console.log('user', user);
        userHomeCtrl.address = user.address;
        userHomeCtrl.pending = _.get(user, 'pendingInvitationsReceived.length', null);
        console.log('userHomeCtrl.pending -->', userHomeCtrl.pending);
        userHomeCtrl.loading = false;

        if (!_.get(user, 'coordinates') || !_.get(user, 'coordinates.latitude') || !_.get(user, 'coordinates.longitude')) {
          console.log('Fetching coordinates...');
          mapService.getCoordinates($stateParams.id, user.address)
            .then(function (response) {
              console.log(response);
            });
        }
      }).catch(function (error) {
      $state.go('login');
      console.log('error', error);
    });
  };

  userHomeCtrl.getUser();
  //END INITIAL LOAD DATA //

  userHomeCtrl.goToAddressBook = function () {
    $location.path('/user/' + $stateParams.id + '/addresses');
  };

  userHomeCtrl.goToEditAddress = function () {
    $location.path('/user/' + $stateParams.id + '/edit');
  };

  userHomeCtrl.goToSendAddress = function () {
    $location.path('/user/' + $stateParams.id + '/send');
  };

  userHomeCtrl.goToReview = function () {
    $location.path('/user/' + $stateParams.id + '/review');
  };

});