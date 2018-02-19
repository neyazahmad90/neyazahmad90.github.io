app.controller("mainCtrl",["$scope","Page","$rootScope","$location",function ($scope,Page,$rootScope,$location) {
	Page.setTitle("Home page");
	$rootScope.Page = Page;
	// $scope.location = $location.path();
 //    $rootScope.$on('$routeChangeSuccess', function() {
 //        $scope.location = $location.path();
 //    });
 	$rootScope.bodyClass = "";
 //    $scope.$on("addBodyClass", function(evt,data){
	// 	$scope.bodyClass = data;
	// 	console.log('data mainCtrl',data,evt);
	// });
}]);