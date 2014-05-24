angular.module('app').controller('wsBeltListCtrl', ['$scope','wsCachedBelts', function ($scope,wsCachedBelts) {
    $scope.belts = wsCachedBelts.query();

    $scope.sortOptions = [{
        value: 'title',
        text: 'Sort by Title'
    }, {
        value: 'published',
        text: 'Sort by Published Date'
    }];

    $scope.sortOrder = $scope.sortOptions[0].value;
}]);