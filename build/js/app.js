"use strict";angular.module("snailbox",["ui.router","angucomplete-alt"]).config(["$stateProvider","$urlRouterProvider","$httpProvider",function(e,r,t){e.state("login",{url:"/login",templateUrl:"./app/features/login/loginTmpl.html",controller:"loginCtrl as loginCtrl"}).state("signup",{url:"/signup",templateUrl:"./app/features/signup/signupTmpl.html",controller:"signupCtrl as signupCtrl"}).state("userHome",{url:"/user/:id",templateUrl:"./app/features/userHome/userHomeTmpl.html",controller:"userHomeCtrl as userHomeCtrl"}).state("newAddress",{url:"/user/:id/new",templateUrl:"./app/features/newAddress/newAddressTmpl.html",controller:"newAddressCtrl as newAddressCtrl"}).state("editAddress",{url:"/user/:id/edit",templateUrl:"./app/features/editAddress/editAddressTmpl.html",controller:"editAddressCtrl as editAddressCtrl"}).state("sendAddress",{url:"/user/:id/send",templateUrl:"./app/features/sendAddress/sendAddressTmpl.html",controller:"sendAddressCtrl as sendAddressCtrl"}),r.otherwise("/login"),t.interceptors.push("authInterceptor")}]),angular.module("snailbox").constant("_",window._).run(["$rootScope",function(e){e._=window._}]).constant("AUTH_EVENTS",{notAuthenticated:"auth-not-authenticated",notAuthorized:"auth-not-authorized"}).constant("API",{SERVER_LOCAL_MDB:"http://localhost:4800/api/v1/",SERVER_HEROKU:"http://snailbox-api.herokuapp.com/api/v1/"}),angular.module("snailbox").service("authInterceptor",["tokenService",function(e){this.request=function(r){var t=e.getToken();return t&&(r.headers.Authorization="Bearer "+t),r},this.response=function(e){return e}}]),angular.module("snailbox").service("authService",["$http","API",function(e,r){this.signup=function(t){return e({method:"POST",url:r.SERVER_HEROKU+"signup",dataType:"json",data:t}).then(function(e){return e.data})},this.login=function(t){return e({method:"POST",url:r.SERVER_HEROKU+"login",dataType:"json",data:t}).then(function(e){return e.data})["catch"](function(e){return e.data})}}]),angular.module("snailbox").service("tokenService",["$window",function(e){var r,t=e.localStorage;this.setToken=function(e){r=e,t.setItem("userToken",e)},this.getToken=function(){return r||(r=t.getItem("userToken")),r},this.removeToken=function(){r=null,t.removeItem("userToken"),console.log("token removed")},this.isAuthenticated=function(){return!!this.getToken()}}]),angular.module("snailbox").service("userService",["$http","API",function(e,r){this.getUserById=function(t){return e({method:"GET",url:r.SERVER_HEROKU+"user/"+t}).then(function(e){return e.data})["catch"](function(e){return e})},this.updateAddress=function(t,s){return e({method:"PUT",url:r.SERVER_HEROKU+"user/"+t+"/address",dataType:"json",data:s}).then(function(e){return e.data})["catch"](function(e){return e})},this.getAllUsers=function(){return e({method:"GET",url:r.SERVER_HEROKU+"users"}).then(function(e){return e.data})["catch"](function(e){return e})}}]),angular.module("snailbox").directive("userHeader",function(){return{restrict:"E",scope:{},templateUrl:"./app/directives/userHeader/userHeaderTmpl.html",controllerAs:"ctrl",controller:["$location","$stateParams","tokenService",function(e,r,t){this.logout=function(){t.removeToken(),e.path("/")},this.userHome=function(){e.path("/user/"+r.id)}}],bindToController:!0}}),angular.module("snailbox").controller("editAddressCtrl",["$stateParams","$state","$location","userService",function(e,r,t,s){var n=this;n.getUser=function(){s.getUserById(e.id).then(function(e){n.userAddress=e.address,console.log("editAddressCtrl.userAddress",n.userAddress)})},n.getUser(),n.submitUpdatedAddress=function(r){return!!r&&void s.updateAddress(e.id,n.userAddress).then(function(r){"Update Success!"===r?t.path("/user/"+e.id):console.log("response",r)})}}]),angular.module("snailbox").controller("loginCtrl",["$state","$location","authService","tokenService",function(e,r,t,s){var n=this;n.loading=!1,n.error=!1,n.goToSignup=function(){e.go("signup")},n.submitLoginForm=function(e){return n.error=!1,!!e&&(n.loading=!0,void t.login(n.data).then(function(e){return console.log("loginResponse::::",e),n.loading=!1,"Login Success"!==e.message?(n.error=!0,n.data.password="",!1):(s.setToken(e.token),void(e.user.address.address1?r.path("/user/"+e.user._id):r.path("/user/"+e.user._id+"/new")))}))}}]),angular.module("snailbox").controller("sendAddressCtrl",["$rootScope","$scope","$state","$stateParams","$location","userService","_",function(e,r,t,s,n,o,a){var d=this;d.getAllUsers=function(){o.getAllUsers().then(function(e){d.allUsers=e,console.log("sendAddressCtrl.allUsers",d.allUsers)})},d.getAllUsers(),d.requestedUsers=[],d.addUserToRequests=function(e){return!!e&&(!(a.findIndex(d.requestedUsers,{_id:e._id})>=0)&&(d.requestedUsers.push(e),r.$broadcast("angucomplete-alt:clearInput"),void console.log("sendAddressCtrl.requestedUsers",d.requestedUsers)))},d.removeUserFromRequests=function(e){var r=a.findIndex(d.requestedUsers,{_id:e._id});d.requestedUsers.splice(r,1),console.log("sendAddressCtrl.requestedUsers",d.requestedUsers)}}]),angular.module("snailbox").controller("newAddressCtrl",["$state","$stateParams","$location","userService",function(e,r,t,s){var n=this;n.error=!1,n.submitNewAddress=function(e){return n.error=!1,e?void s.updateAddress(r.id,n.newAddressData).then(function(e){console.log("address update response: ",e),"Update Success!"===e&&(n.newAddressData=null,t.path("/user/"+r.id))})["catch"](function(e){console.log("error",e)}):(n.error=!0,!1)}}]),angular.module("snailbox").controller("signupCtrl",["$state","$location","authService","tokenService",function(e,r,t,s){var n=this;n.loading=!1,n.error=!1,n.passwordError=!1,n.goToLogin=function(){e.go("login")},n.submitSignupForm=function(e){return n.error=!1,n.passwordError=!1,!!e&&(n.data.password!==n.data.password2?(n.error=!0,n.passwordError=!0,n.data.password="",n.data.password2="",!1):(n.loading=!0,void t.signup(n.data).then(function(e){return console.log("signupResponse ::::",e),n.loading=!1,"Registration Success"!==e.message?(n.error=!0,n.data.password="",n.data.password2="",!1):(s.setToken(e.token),void r.path("/user/"+e.user._id+"/new"))})))}}]),angular.module("snailbox").controller("userHomeCtrl",["$stateParams","$state","$location","userService",function(e,r,t,s){var n=this;n.getUser=function(){s.getUserById(e.id).then(function(r){r.address.address1||t.path("/user/"+e.id+"/new"),console.log("user",r),n.address=r.address})["catch"](function(e){r.go("login"),console.log("error",e)})},n.getUser(),n.goToEditAddress=function(){t.path("/user/"+e.id+"/edit")},n.goToSendAddress=function(){t.path("/user/"+e.id+"/send")}}]);