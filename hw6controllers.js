var angMod = angular.module('signupApp', ['ngCookies']);
angMod.controller('signupCtrl', function ($scope, $filter, $http, $cookieStore) {
	$scope.getvisitordata = function() {
	$http.get("app.php?cmd=get&key="+$scope.visitorbytime)
                            .success(function (data) {
                                if (data.data == "" ){
                                console.log(" Total Visitor in request time is : 0 ");
                                $scope.visitorRequestByTime=0;
                                } else {
                                console.log(" Total Visitor in request time is : "+data.data);
                                $scope.visitorRequestByTime=data.data;
                                }
                            });
	}


	$scope.hitcounter = function(){
	var minute = $filter('date')(new Date(),'yyyy-MM-dd HH:mm');
	$http.get("app.php?cmd=incr&key="+minute)
		.success(function(){
			$http.get("app.php?cmd=get&key="+minute)
		            .success(function (data) {
      			        console.log(" Total Visitor in current minute is : "+data.data);
				$scope.visitorPerMinute=data.data;
 			    });
		});
	var hour = $filter('date')(new Date(),'yyyy-MM-dd HH');
	$http.get("app.php?cmd=incr&key="+hour)
                .success(function(){
                        $http.get("app.php?cmd=get&key="+hour)
                            .success(function (data) {
                                console.log(" Total Visitor in current hour is : "+data.data);
                                $scope.visitorPerHour=data.data;
                            });
                });
	var day = $filter('date')(new Date(),'yyyy-MM-dd');
	$http.get("app.php?cmd=incr&key="+day)
                .success(function(){
                        $http.get("app.php?cmd=get&key="+day)
                            .success(function (data) {
                                console.log(" Total Visitor in current day is : "+data.data);
                                $scope.visitorPerDay=data.data;
                            });
                });
        var month = $filter('date')(new Date(),'yyyy-MM');
	$http.get("app.php?cmd=incr&key="+month)
                .success(function(){
                        $http.get("app.php?cmd=get&key="+month)
                            .success(function (data) {
                                console.log(" Total Visitor in current month is : "+data.data);
                                $scope.visitorPerMonth=data.data;
                            });
                });
        var year = $filter('date')(new Date(),'yyyy');
	$http.get("app.php?cmd=incr&key="+year)
                .success(function(){
                        $http.get("app.php?cmd=get&key="+year)
                            .success(function (data) {
                                console.log(" Total Visitor in current year is : "+data.data);
                                $scope.visitorPerYear=data.data;
                            });
                }); 
	  var date1 = new Date();
	  var date2 = new Date();
    	 var lastMinute = $filter('date')(date2.setMinutes(date1.getMinutes()-1),'yyyy-MM-dd HH:mm'); 
			$http.get("app.php?cmd=get&key="+lastMinute)
		            .success(function (data) {
				if (data.data == "" ){
      			        console.log(" Total Visitor in last minute is : 0 ");
				$scope.visitorPerLastMinute=0;
				} else {
				console.log(" Total Visitor in last minute is : "+data.data);
                                $scope.visitorPerLastMinute=data.data;
				}
 			    });
	
                
    var lastHour =$filter('date')( date2.setHours(date1.getHours()-1), 'yyyy-MM-dd HH');
                        $http.get("app.php?cmd=get&key="+lastHour)
                            .success(function (data) {
				if (data.data == "" ){
                                console.log(" Total Visitor in last hour is : 0 ");
                                $scope.visitorPerLastHour=0;
                                } else {
                                console.log(" Total Visitor in last hour is : "+data.data);
                                $scope.visitorPerLastHour=data.data;
				}
                            });

                
    var lastDay = $filter('date')(date2.setDate(date1.getDate()-1),'yyyy-MM-dd');
                        $http.get("app.php?cmd=get&key="+lastDay)
                            .success(function (data) {
				if (data.data == "" ){
                                console.log(" Total Visitor in last day is : 0 ");
                                $scope.visitorPerLastDay=0;
                                } else {
                                console.log(" Total Visitor in last day is : "+data.data);
                                $scope.visitorPerLastDay=data.data;
				}
                            });

                
    }
	
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
	$scope.signup = function() {
		$http.get("app.php?cmd=set&key=" + $scope.info.username + "&value=" + $scope.info.password)
		     	.success(function() {
				$scope.redisReponse = "Updated.";
				location.href = "hw6signinpage.html";
			});

	}



/*signin function*/
	$scope.signin = function() {
           $http.get("app.php?cmd=get&key="+$scope.logininfo.username)
	     	.success(function (data) {
		    if(data.data == ""){
		    	alert("There is no username matched record, please check your username");
		    } else {
		    	if(data.data == $scope.logininfo.password){
					$cookieStore.put("username", $scope.logininfo.username);
					$cookieStore.put("password", $scope.logininfo.password);
					location.href = "http://www.info6250.com";
					} else {
					     alert("You have invaild password, please try again!");
					     $scope.logininfo.password = "";
					}
			}
			
		}); 
	
}

});

