angular.module('snailbox')
  .controller('addressBookCtrl', function ($stateParams, userService, _) {
    var addressBookCtrl     = this;
    addressBookCtrl.loading = true;

    // INITIAL LOAD DATA //
    addressBookCtrl.getUser = function () {
      userService.getConnections($stateParams.id)
        .then(function (user) {
          addressBookCtrl.connections = _.sortBy(user.connections, ['lastName', 'firstName']);
          addressBookCtrl.loading = false;
          console.log('addressBookCtrl.connections', addressBookCtrl.connections);
        }).catch(function (error) {
        console.log('error', error);
      });
    };

    addressBookCtrl.getUser();
    //END INITIAL LOAD DATA //


  });