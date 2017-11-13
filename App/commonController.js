
angular.module("app").directive('myInfoMsg',function(){
 return{
 	templateUrl:'partial/my-info-msg.html'
 }
});

// angular.module('app').directive('message',function(){
// 	return {
// 		compile : function(tElement, tAttrubutes ){
// 				console.log('tAttrubutes' , tAttrubutes.text + " - In compile " + "\n tElement : "+JSON.stringify(tElement) );
// 				return{
// 					pre:function(scope , iElement , iAttributes){
// 						console.log('iAttributes' , iAttributes.text + " - In Pre " + "\n tElement : "+JSON.stringify(iElement) );
// 					},
// 					post:function(scope , iElement , iAttributes){
// 						console.log('iAttributes' , iAttributes.text + " - In Post " + "\n tElement : "+JSON.stringify(iElement) );
// 					}
// 				}
// 		},
// 		controller :function($scope ,$element ,$attrs ){
// 			console.log('$attrs ' + $attrs.text + " - In controller " + "\n $element : "+JSON.stringify($element) );	
// 		}
// 	}
// })

angular.module('app').directive('message',function($interpolate){
	return {
		compile : function(tElement, tAttrubutes ){
			tElement.addClass("btn btn-primary");
				console.log('tAttrubutes' , tAttrubutes.text + " - In compile " + "\n tElement : "+JSON.stringify(tElement) );
				return{
					pre:function(scope , iElement , iAttributes){
						console.log('iAttributes' , iAttributes.text + " - In Pre " + "\n tElement : "+JSON.stringify(iElement) );
					},
					post:function(scope , iElement , iAttributes){
						if(iAttributes.text === "3"){
							iElement.addClass("btn btn-danger");
						}
						iElement.on('click', scope.btnClick);
						console.log('iAttributes' , iAttributes.text + " - In Post " + "\n tElement : "+JSON.stringify(iElement) );
					}
				}
		},
		controller :function($scope ,$element ,$attrs ){
			var v = $interpolate( $attrs.text )($scope);
			$scope.btnClick = function(){ alert(v)}
			console.log('$attrs ' + v + " - In controller " + "\n $element : "+JSON.stringify($element) );	
		}
	}
});
angular.module('app').directive("sharedDirective", function () {
    return {

        scope: false,
        template: "<div>directive scope value : {{name}}</div>" +"Change directive scope value : <input type='text' ng-model='name' />"
    };
});
angular.module("app").controller('indexCtrl',function($scope ,$location ,$timeout , $interval ,$rootScope){
	$rootScope.$watch(function(){
		console.log('--digest started -- ');
	})
	$scope.name = "Hello World";
	$scope.data = { time : new Date().toLocaleTimeString() };
	$scope.myUrl = $location.absUrl();

	// var someSessionObj = { 'innerObj' : 'somesessioncookievalue'};
	// $cookies.dotobject = someSessionObj;
	// console.log("myUrl",$cookies.dotobject);
	// $scope.usingCookies = { 'cookies.dotobject' : $cookies.dotobject, "cookieStore.get" : $cookieStore.get('dotobject') };

 //    $cookieStore.put('obj', someSessionObj);
 //    $scope.usingCookieStore = { "cookieStore.get" : $cookieStore.get('obj'), 'cookies.dotobject' : $cookies.obj, };
 	
    $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
    console.log($scope.dog);    
	$scope.updateTime = function() {
            $scope.data.time = new Date().toLocaleTimeString();
        }
    $timeout(function () {
        $scope.myHeader = "How are you today?";
    }, 600);
    $interval(function () {
       $scope.data.time = new Date().toLocaleTimeString();
    }, 500);
    // document.getElementById("updateTimeButton").addEventListener('click', function() {
    //         // console.log("update time clicked");
    //         // $scope.data.time = new Date();
    //         // $scope.$digest();
    //          $scope.$apply(function() {
		  //       console.log("update time clicked");
		  //       $scope.data.time = new Date().toLocaleTimeString();
		  //   });
    // });

 //    $scope.$on('error', function(error) {
	// 	console.log('An error occurred: ' + error.toString());
	// });
	// $scope.$emit('error', 'Could not connect to server');


}).controller('EventPropagationController', ['$scope', function ($scope) {  
    $scope.count = 0;  
    $scope.$on('MyEvent', function () {  
        $scope.count++;  
    });  
    $scope.a =1;
 	$scope.b =2;
 	$scope.c =3;
 	$scope.o =[
 		{name:"santosh", id:1},
 		{name:"santosh 1", id:2},
 		{name:"santosh 3", id:3}
 	];
 	//$scope.$watchCollection()
 	$scope.$watchGroup(['a','b'],function(newValue, oldValue){
 		if(newValue != oldValue ){
 			$scope.c =parseInt($scope.a)  + parseInt($scope.b) ;
 		}
 	});
}]);  