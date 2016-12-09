angular.module('snailbox').controller('newAddressCtrl', function ($state, $stateParams, $location, userService, _) {
  var newAddressCtrl = this;

  newAddressCtrl.error = false;

  newAddressCtrl.submitNewAddress = function (isValid) {
    newAddressCtrl.error = false;
    if (!isValid) {
      newAddressCtrl.error = true;
      return false;
    } else {
      userService.updateAddress($stateParams.id, newAddressCtrl.newAddressData)
        .then(function (response) {
          if (_.get(response, 'status', null) === 401) {
            $state.go('login');
            return false;
          }

          if (response === 'Update Success!') {
            newAddressCtrl.newAddressData = null;
            $location.path('/user/' + $stateParams.id);
          }

        }).catch(function (err) {
        console.log(err);
      });
    }
  };


});