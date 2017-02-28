app.controller('controller1', function($scope, model1) {

	$scope.todo = model1.todo;
	$scope.show = model1.showw;
	$scope.remove = model1.removee;
/*
	$scope.show = function(){
	  $scope.todo.push({name: $scope.to_do, done: false});
	};

{name: $scope.to_do, done: false}
$scope.todo.indexOf(item)

	$scope.remove = function(item) { 
	  var index = $scope.todo.indexOf(item);
	  $scope.todo.splice(index, 1);     
    };*/

});
