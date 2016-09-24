angular.module('snailbox').run(['$templateCache', function($templateCache) {$templateCache.put('./app/features/login/loginTmpl.html','<section class="flex-base-col-center login-wrap"><div class=login-form-container><div class="title flex-base-row-center"><img src=../assets/snailbox.png alt=SnailBox><h1>SnailBox</h1></div><div class=flex-base-col-center style="padding-bottom: 16px;" ng-if=loginCtrl.loading><div class=sk-fading-circle><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div></div><div class="flex-base-col-center error-container" ng-if=loginCtrl.error><p class=err-txt>Login Failed</p></div><div ng-if=!loginCtrl.loading><form name=login ng-submit=loginCtrl.submitLoginForm(login.$valid) novalidate><input type=email placeholder=E-mail name=email ng-model=loginCtrl.data.email ng-model-options="{debounce: 1500}" ng-class="login.email.$invalid && !login.email.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=password placeholder=Password name=password ng-model=loginCtrl.data.password ng-model-options="{debounce: 1500}" ng-class="login.password.$invalid && !login.password.$pristine ? \'invalid-input\' : \'valid-input\'" required> <button class="btn flex-base-col-center" type=submit><p>Log In</p></button></form><div class="flex-base-row-center row"><p class=sign-up-txt ng-click=loginCtrl.goToSignup()>Create Account</p></div></div></div></section>');
$templateCache.put('./app/features/signup/signupTmpl.html','<section class="flex-base-col-center login-wrap"><div class=login-form-container><div class="title flex-base-row-center"><img src=../assets/snailbox.png alt=SnailBox><h1>SnailBox</h1></div><div><form action><input type=text placeholder="First Name"> <input type=text placeholder="Last Name"> <input type=email placeholder=Email> <input type=password placeholder=Password> <input type=password placeholder="Confirm Password"> <button class="btn flex-base-col-center" type=submit><p>Register</p></button></form><div class="flex-base-row-center row"><p class=sign-up-txt ng-click=signupCtrl.goToLogin()>Login</p></div></div></div></section>');
$templateCache.put('./app/features/userHome/userHomeTmpl.html','THIS IS USER HOME');}]);