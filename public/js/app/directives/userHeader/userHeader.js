angular.module('snailbox').directive('userHeader', function () {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: './app/directives/userHeader/userHeaderTmpl.html',
    controllerAs: 'ctrl',
    controller: function ($location, $stateParams, tokenService) {
      this.logout = function () {
        tokenService.removeToken();
        $location.path('/');
      };
      this.userHome = function () {
        $location.path('/user/' + $stateParams.id);
      };
    },
    bindToController: true
  };

});