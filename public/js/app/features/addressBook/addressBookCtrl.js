angular.module('snailbox').controller('addressBookCtrl', function ($state, $stateParams, $location, userService, _) {
  var addressBookCtrl     = this;
  addressBookCtrl.loading = true;

  // INITIAL LOAD DATA //
  addressBookCtrl.getUser = function () {
    userService.getConnections($stateParams.id)
      .then(function (user) {
        if (_.get(user, 'status', null) === 401) {
          $state.go('login');
          return false;
        }
        addressBookCtrl.connections = _.sortBy(user.connections, ['lastName', 'firstName']);
        addressBookCtrl.loading     = false;
        console.log('addressBookCtrl.connections', addressBookCtrl.connections);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  addressBookCtrl.getUser();
  //END INITIAL LOAD DATA //

  addressBookCtrl.goToSendAddress = function () {
    $location.path('/user/' + $stateParams.id + '/send');
  };

});