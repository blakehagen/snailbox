"use strict";angular.module("snailbox",["ui.router","angucomplete-alt"]).config(["$stateProvider","$urlRouterProvider","$httpProvider",function(e,t,n){e.state("login",{url:"/login",templateUrl:"./app/features/login/loginTmpl.html",controller:"loginCtrl as loginCtrl"}).state("signup",{url:"/signup",templateUrl:"./app/features/signup/signupTmpl.html",controller:"signupCtrl as signupCtrl"}).state("userHome",{url:"/user/:id",templateUrl:"./app/features/userHome/userHomeTmpl.html",controller:"userHomeCtrl as userHomeCtrl"}).state("newAddress",{url:"/user/:id/new",templateUrl:"./app/features/newAddress/newAddressTmpl.html",controller:"newAddressCtrl as newAddressCtrl"}).state("editAddress",{url:"/user/:id/edit",templateUrl:"./app/features/editAddress/editAddressTmpl.html",controller:"editAddressCtrl as editAddressCtrl"}).state("send",{url:"/user/:id/send",templateUrl:"./app/features/sendAddress/sendTmpl.html",controller:"sendCtrl as sendCtrl"}).state("review",{url:"/user/:id/review",templateUrl:"./app/features/review/reviewTmpl.html",controller:"reviewCtrl as reviewCtrl"}),t.otherwise("/login"),n.interceptors.push("authInterceptor")}]),angular.module("snailbox").constant("_",window._).run(["$rootScope",function(e){e._=window._}]).constant("AUTH_EVENTS",{notAuthenticated:"auth-not-authenticated",notAuthorized:"auth-not-authorized"}).constant("API",{SERVER_LOCAL_MDB:"http://localhost:4800/api/v1/",SERVER_HEROKU:"http://snailbox-api.herokuapp.com/api/v1/"}),angular.module("snailbox").service("authInterceptor",["tokenService",function(e){this.request=function(t){var n=e.getToken();return n&&(t.headers.Authorization="Bearer "+n),t},this.response=function(e){return e}}]),angular.module("snailbox").service("authService",["$http","API",function(e,t){this.signup=function(n){return e({method:"POST",url:t.SERVER_HEROKU+"signup",dataType:"json",data:n}).then(function(e){return e.data})},this.login=function(n){return e({method:"POST",url:t.SERVER_HEROKU+"login",dataType:"json",data:n}).then(function(e){return e.data})["catch"](function(e){return e.data})}}]),angular.module("snailbox").service("tokenService",["$window",function(e){var t,n=e.localStorage;this.setToken=function(e){t=e,n.setItem("userToken",e)},this.getToken=function(){return t||(t=n.getItem("userToken")),t},this.removeToken=function(){t=null,n.removeItem("userToken"),console.log("token removed")},this.isAuthenticated=function(){return!!this.getToken()}}]),angular.module("snailbox").service("userService",["$http","API",function(e,t){this.getUserById=function(n){return e({method:"GET",url:t.SERVER_HEROKU+"user/"+n}).then(function(e){return e.data})["catch"](function(e){return e})},this.updateAddress=function(n,r){return e({method:"PUT",url:t.SERVER_HEROKU+"user/"+n+"/address",dataType:"json",data:r}).then(function(e){return e.data})["catch"](function(e){return e})},this.getAllUsers=function(){return e({method:"GET",url:t.SERVER_HEROKU+"users"}).then(function(e){return e.data})["catch"](function(e){return e})},this.sendInvites=function(n,r){return e({method:"PUT",url:t.SERVER_HEROKU+"user/"+n,dataType:"json",data:r}).then(function(e){return e.data})["catch"](function(e){return e})},this.getConnections=function(n){return e({method:"GET",url:t.SERVER_HEROKU+"user/"+n+"/connections"}).then(function(e){return e.data})["catch"](function(e){return e})},this.saveConnections=function(n,r){return e({method:"PUT",url:t.SERVER_HEROKU+"user/"+n+"/connections",dataType:"json",data:r}).then(function(e){return e.data})["catch"](function(e){return e})},this.removeRequest=function(n,r){return e({method:"PUT",url:t.SERVER_HEROKU+"user/"+n+"/remove/"+r,dataType:"json"}).then(function(e){return e.data})["catch"](function(e){return e})}}]),angular.module("snailbox").directive("userHeader",function(){return{restrict:"E",scope:{},templateUrl:"./app/directives/userHeader/userHeaderTmpl.html",controllerAs:"ctrl",controller:["$location","$stateParams","tokenService",function(e,t,n){this.logout=function(){n.removeToken(),e.path("/")},this.userHome=function(){e.path("/user/"+t.id)},this.edit=function(){e.path("/user/"+t.id+"/edit")},this.send=function(){e.path("/user/"+t.id+"/send")},this.review=function(){e.path("/user/"+t.id+"/review")}}],bindToController:!0}}),angular.module("snailbox").controller("editAddressCtrl",["$stateParams","$state","$location","userService",function(e,t,n,r){var s=this;s.getUser=function(){r.getUserById(e.id).then(function(e){s.userAddress=e.address})},s.getUser(),s.submitUpdatedAddress=function(t){return!!t&&void r.updateAddress(e.id,s.userAddress).then(function(t){"Update Success!"===t?n.path("/user/"+e.id):console.log("response",t)})},s.cancel=function(){console.log("fired cancel!"),n.path("/user/"+e.id)}}]),angular.module("snailbox").controller("loginCtrl",["$state","$location","authService","tokenService",function(e,t,n,r){var s=this;s.loading=!1,s.error=!1,s.goToSignup=function(){e.go("signup")},s.submitLoginForm=function(e){return s.error=!1,!!e&&(s.loading=!0,void n.login(s.data).then(function(e){return console.log("loginResponse::::",e),s.loading=!1,"Login Success"!==e.message?(s.error=!0,s.data.password="",!1):(r.setToken(e.token),void(e.user.address.address1?t.path("/user/"+e.user._id):t.path("/user/"+e.user._id+"/new")))}))}}]),angular.module("snailbox").controller("newAddressCtrl",["$state","$stateParams","$location","userService",function(e,t,n,r){var s=this;s.error=!1,s.submitNewAddress=function(e){return s.error=!1,e?void r.updateAddress(t.id,s.newAddressData).then(function(e){console.log("address update response: ",e),"Update Success!"===e&&(s.newAddressData=null,n.path("/user/"+t.id))})["catch"](function(e){console.log("error",e)}):(s.error=!0,!1)}}]),angular.module("snailbox").controller("reviewCtrl",["$stateParams","$location","userService","_",function(e,t,n,r){var s=this;s.loading=!0,s.getUser=function(){s.loading=!0,n.getConnections(e.id).then(function(e){s.sent=e.pendingInvitationsSent,s.received=e.pendingInvitationsReceived,r.each(s.received,function(e){e.selected=!1}),s.loading=!1,console.log("reviewCtrl.received",s.received),console.log("reviewCtrl.sent",s.sent)})["catch"](function(e){console.log("error",e)})},s.getUser(),s.cancel=function(){t.path("/user/"+e.id)},s.selectUser=function(e,t,n){t.selected=!t.selected},s.acceptInvites=function(){var t=[];return r.each(s.received,function(e){e.selected&&t.push(e._id)}),console.log("acceptedRequests",t),!r.isEmpty(t)&&void n.saveConnections(e.id,t).then(function(e){console.log("response saveConnections",e),"Success"===e&&s.getUser()})},s.deleteSentRequest=function(t){n.removeRequest(e.id,t).then(function(e){console.log("response",e),"Deleted Request"===e&&s.getUser()})}}]),angular.module("snailbox").controller("sendCtrl",["$rootScope","$scope","$state","$stateParams","$location","userService","_",function(e,t,n,r,s,o,i){var u=this;u.readyToSend=!1,u.getAllUsers=function(){o.getAllUsers().then(function(e){u.allUsers=i.clone(e);var t=i.findIndex(u.allUsers,{_id:r.id});u.currentUser=u.allUsers.splice(t,1)[0],u.connectionsAndRequests=[],u.connectionsAndRequests=i.concat(u.currentUser.connections,u.currentUser.pendingInvitationsSent,u.currentUser.pendingInvitationsReceived),console.log("sendCtrl.allUsers:",u.allUsers),console.log("sendCtrl.connectionsAndRequests:",u.connectionsAndRequests),console.log("sendCtrl.currentUser:",u.currentUser)})},u.getAllUsers(),u.requestedUsers=[],u.addUserToRequests=function(e){if(!e)return!1;if(i.findIndex(u.requestedUsers,{_id:e._id})>=0)return!1;for(var n=0;n<u.connectionsAndRequests.length;n++)if(u.connectionsAndRequests[n]===e._id)return console.log("CANNOT ADD USER"),!1;u.requestedUsers=i.concat(u.requestedUsers,e),t.$broadcast("angucomplete-alt:clearInput")},u.removeUserFromRequests=function(e){var t=i.findIndex(u.requestedUsers,{_id:e._id});u.requestedUsers.splice(t,1)},u.cancel=function(){s.path("/user/"+r.id)},u.goToReview=function(){s.path("/user/"+r.id+"/review")},u.setReady=function(){u.readyToSend=!u.readyToSend},u.sendInvites=function(){var e=[];i.each(u.requestedUsers,function(t){e.push(t._id)}),o.sendInvites(r.id,e).then(function(e){console.log("response",e),"Success"===e&&u.goToReview()})}}]),angular.module("snailbox").controller("signupCtrl",["$state","$location","authService","tokenService",function(e,t,n,r){var s=this;s.loading=!1,s.error=!1,s.passwordError=!1,s.goToLogin=function(){e.go("login")},s.submitSignupForm=function(e){return s.error=!1,s.passwordError=!1,!!e&&(s.data.password!==s.data.password2?(s.error=!0,s.passwordError=!0,s.data.password="",s.data.password2="",!1):(s.loading=!0,void n.signup(s.data).then(function(e){return console.log("signupResponse ::::",e),s.loading=!1,"Registration Success"!==e.message?(s.error=!0,s.data.password="",s.data.password2="",!1):(r.setToken(e.token),void t.path("/user/"+e.user._id+"/new"))})))}}]),angular.module("snailbox").controller("userHomeCtrl",["$stateParams","$state","$location","userService",function(e,t,n,r){var s=this;s.loading=!0,s.getUser=function(){r.getUserById(e.id).then(function(t){t.address.address1||n.path("/user/"+e.id+"/new"),console.log("user",t),s.address=t.address,s.loading=!1})["catch"](function(e){t.go("login"),console.log("error",e)})},s.getUser(),s.goToEditAddress=function(){n.path("/user/"+e.id+"/edit")},s.goToSendAddress=function(){n.path("/user/"+e.id+"/send")},s.goToReview=function(){n.path("/user/"+e.id+"/review")}}]);