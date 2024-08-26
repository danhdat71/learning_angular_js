app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/test', {
        templateUrl: 'test.html',
    })
    .otherwise({
        templateUrl: 'index.html'
    });
}]);