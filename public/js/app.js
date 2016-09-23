angular.module('snailbox', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: './app/features/login/loginTmpl.html',
      controller: 'loginCtrl as loginCtrl'
    });

  $urlRouterProvider
    .otherwise('/login');
});