angular.module("snailbox",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(t,l){t.state("login",{url:"/login",templateUrl:"./app/features/login/loginTmpl.html",controller:"loginCtrl as loginCtrl"}).state("signup",{url:"/signup",templateUrl:"./app/features/signup/signupTmpl.html",controller:"signupCtrl as signupCtrl"}),l.otherwise("/login")}]),angular.module("snailbox").controller("loginCtrl",["$state",function(t){var l=this;l.test="If you can read this, your loginCtrl controller is set up correctly :)",console.log("loginCtrl.test ==>> ",l.test),l.goToSignup=function(){t.go("signup")}}]),angular.module("snailbox").controller("signupCtrl",["$state",function(t){var l=this;l.test="If you can read this, your signupCtrl is set up correctly :)",console.log("signupCtrl.test ==>> ",l.test),l.goToLogin=function(){t.go("login")}}]);