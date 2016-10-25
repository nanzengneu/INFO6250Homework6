var angMod = angular.module('signupApp', ['ngCookies']);
angMod.controller('signupCtrl', function ($scope, $http, $cookieStore) {	
 	    $scope.check = function(){
	    var usernameCookie = $cookieStore.get("username");
	    var passwordCookie = $cookieStore.get("password");
	    if (usernameCookie != undefined && passwordCookie != undefined){
		if(confirm("Welcome! Are you " + usernameCookie + " ? Clike Yes to continue, or click No for new user") == true){

			location.href = "http://www.info6250.com/";
			}else{
			location.href = "hw6signuppage.html";
			}	
		} else {
		     location.href = "hw6signinpage.html";
		}
}


	/*signup function*/	
	$scope.signup = function(){

	
	angular.forEach($scope.info, function(value,key){

            $http.get("app.php?cmd=set&key="+key+"&value="+ value)
            .success(function ( ) {
                $scope.redisResponse = "Updated.";
            });
            
        });
        
	    location.href = "hw6signinpage.html";
    }

	$scope.signin = function() {
           $http.get("app.php?cmd=get&key=username")
	     	.success(function (data_username) {
		    if(data_username.data == $scope.logininfo.username){
			$http.get("app.php?cmd=get&key=password")
			.success(function (data_password) {
				if(data_password.data == $scope.logininfo.password){
					$cookieStore.put("username", $scope.logininfo.username);
					$cookieStore.put("password", $scope.logininfo.password);

					location.href = "http://www.info6250.com";
					}
					else{
					     alert("You have invaild password, please try again!");
					     $scope.logininfo.password = "";
					}
				})	
			}
			else{
			    alert("There is no username matched record, please check your username");
			}
		}); 
	}


});
