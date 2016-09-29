angular.module('snailbox').directive('userHeader', function () {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: './app/directives/userHeader/userHeaderTmpl.html',
    controllerAs: 'ctrl',
    controller: function ($location, tokenService) {
      this.logout = function () {
        tokenService.removeToken();
        $location.path('/');
      };
    },
    bindToController: true
  };

});