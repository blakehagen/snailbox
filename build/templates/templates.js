angular.module('snailbox').run(['$templateCache', function($templateCache) {$templateCache.put('./app/features/login/loginTmpl.html','<section class="flex-base-col-center login-wrap"><div class=login-form-container><div class="title flex-base-row-center"><img src=../assets/snailbox.png alt=SnailBox><h1>SnailBox</h1></div><div><form action><input type=email placeholder=Email> <input type=password placeholder=Password> <button class="btn flex-base-col-center" type=submit><p>Log In</p></button></form><div class="flex-base-row-center row"><p class=sign-up-txt ng-click=loginCtrl.goToSignup()>Create Account</p></div></div></div></section>');
$templateCache.put('./app/features/signup/signupTmpl.html','<section class="flex-base-col-center login-wrap"><div class=login-form-container><div class="title flex-base-row-center"><img src=../assets/snailbox.png alt=SnailBox><h1>SnailBox</h1></div><div><form action><input type=text placeholder="First Name"> <input type=text placeholder="Last Name"> <input type=email placeholder=Email> <input type=password placeholder=Password> <input type=password placeholder="Confirm Password"> <button class="btn flex-base-col-center" type=submit><p>Register</p></button></form><div class="flex-base-row-center row"><p class=sign-up-txt ng-click=signupCtrl.goToLogin()>Login</p></div></div></div></section>');}]);