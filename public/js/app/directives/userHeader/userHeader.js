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
      this.edit = function () {
        $location.path('/user/' + $stateParams.id + '/edit');
      };
      this.send = function () {
        $location.path('/user/' + $stateParams.id + '/send');
      };
      this.review = function () {
        $location.path('/user/' + $stateParams.id + '/review');
      };
    },
    bindToController: true
  };

});