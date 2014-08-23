angular.module('example-app', ['floatingLabel'])
    .controller('MainController', ['$scope', function($scope) {
        $scope.firstName = "John"; // Set example to use a populated ng model
    }]);
