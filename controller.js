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
    $http.get(`http://localhost/api/get-phones.php`)
        .then(function(response){
            $scope.phones = response.data;
        });
});

app.controller('CreateProduct', function($scope, $http, $location) {
    $scope.uploadFile = function(event){
        let files = event.target.files[0];
        $scope.previewImageUrl = URL.createObjectURL(files);
    };

    $scope.submitCreatePhone = function() {
        var phoneData = new FormData();
        phoneData.append('name', $scope.name);
        phoneData.append('price', $scope.price);
        phoneData.append('image', $scope.image);
        
        $http({
            headers: { 'Content-Type': undefined },
            method: 'post',
            url: 'http://localhost/api/create-phone.php',
            data: phoneData,
        }).then(function(response){
            $location.path("/");
        });
    }
});
