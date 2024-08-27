app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'homepage.html',
        })
        .when('/create', {
            templateUrl: 'create.html',
        })
        .otherwise({
            templateUrl: 'homepage.html'
        });
});
