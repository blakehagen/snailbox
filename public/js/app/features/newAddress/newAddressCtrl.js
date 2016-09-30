angular.module('snailbox').controller('newAddressCtrl', function ($state, $location) {
  var newAddressCtrl = this;

  newAddressCtrl.error = false;

  newAddressCtrl.submitNewAddress = function (isValid) {
    newAddressCtrl.error = false;
    console.log('isValid', isValid);
    if (!isValid) {
      newAddressCtrl.error = true;
      console.log('FORM NOT VALID');
      return false;
    } else {
      console.log('newAddressCtrl.newAddressData', newAddressCtrl.newAddressData);
      console.log('Form is Valid');
    }
  };


});