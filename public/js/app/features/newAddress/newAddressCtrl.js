angular.module('snailbox').controller('newAddressCtrl', function ($state, $stateParams, $location, userService) {
  var newAddressCtrl = this;

  newAddressCtrl.error = false;

  newAddressCtrl.submitNewAddress = function (isValid) {
    newAddressCtrl.error = false;
    if (!isValid) {
      newAddressCtrl.error = true;
      return false;
    } else {
      userService.updateAddress($stateParams.id, newAddressCtrl.newAddressData).then(function (response) {
        console.log('address update response: ', response);
        if(response === 'Update Success!'){
          newAddressCtrl.newAddressData = null;
          $location.path('/user/' + $stateParams.id);
        }

      }).catch(function (error) {
        console.log('error', error);
      });
    }
  };


});