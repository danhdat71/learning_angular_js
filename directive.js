app.directive("w3TestDirective", function () {
    return {
        template: "I was made in a directive constructor!"
    };
});


app.directive('ngEnterPress', function() {
    return function(scope, element, attrs) {
        element.on('keydown', function(event){
            if (event.key === 'Enter') {
                scope.$apply(function() {
                  scope.keywordSubmit = element.val();
                });
              }
        });
    }
});