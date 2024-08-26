app.controller("myCtrl", function ($scope, $location, $http) {
    $scope.items = [
        {
            label: 'Giá giảm dần',
            id: '-price'
        },
        {
            label: 'Giá tăng dần',
            id: 'price'
        },
    ];
    $scope.orderPrice = $scope.items[0];

    $scope.keyword = '';
    $scope.orderByValue = '';
    $scope.submitSearch = function () {
        $scope.keywordValue = $scope.keyword;
        $scope.orderByValue = $scope.orderPrice.id;
    }

    // Get list phone
    $http.get(`${$location.absUrl()}/api/get-phones.php`)
        .then(function(response){
            $scope.phones = response.data;
        });
});
