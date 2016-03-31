angular.module('DatatableApp', ['DatatableApp.controllers','datatables']);
angular.module('DatatableApp.controllers', []).controller('dataTableController', function(

		$scope,DTOptionsBuilder, DTColumnBuilder) {
		$scope.model = {
	        userList: [{
	            id: 1,
	            name: "Person 1",
	            age: 31
	        }, {
	            id: 2,
	            name: "Person 2",
	            age: 25
	        }, {
	            id: 3,
	            name: "Person 3",
	            age: 35
	        }, {
	            id: 4,
	            name: "Person 4",
	            age: 28
	        }],
	        selected: {}
	    };
		
		$scope.getTemplate = function(user){
			if (user.id === $scope.model.selected.id) return 'edit';
			else return 'display';
	    }; 

	    $scope.editUser = function (user) {
	        $scope.model.selected = angular.copy(user);
	    };

	    $scope.saveUser = function (idx) {
	        $scope.model.userList[idx] = angular.copy($scope.model.selected);
	        $scope.reset();
	    };

	    $scope.reset = function () {
	        $scope.model.selected = {};
	    };
	      
});