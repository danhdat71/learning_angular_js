app.directive("w3TestDirective", function () {
    return {
        template: "I was made in a directive constructor!"
    };
});


app.directive('ngEnterPress', function () {
    return function (scope, element, attrs) {
        element.on('keydown', function (event) {
            if (event.key === 'Enter') {
                scope.$apply(function () {
                    scope.keywordSubmit = element.val();
                });
            }
        });
    }
});

app.directive('customOnChange', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            let functionName = attrs.customOnChange;
            element.on('change', scope.$eval(functionName));
        }
    };
});

app.directive('customInputMaxFileSize', function(){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, mCtrl) {
            element.on('change', function(e){
                let fileSize = e.target.files[0].size / 1024;
                let maxFileSize = attrs.customInputMaxFileSize;
                scope.$apply(function() {
                    if (fileSize > maxFileSize) {
                        mCtrl.$setValidity('fileSize', false);
                    } else {
                        mCtrl.$setValidity('fileSize', true);
                    }
                });
            });
        }
    }
});