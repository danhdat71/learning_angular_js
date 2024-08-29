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

app.directive('customInputValidExtension', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            var imageExtension = attrs.customInputValidExtension.split(',');

            function validateFileExtension(file) {
                let fileName = file.name.split('.').pop();
                if (!imageExtension.includes(fileName)) {
                    ngModel.$setValidity('validExtension', false);
                } else {
                    ngModel.$setValidity('validExtension', true);
                }

                return file;
            }

            ngModel.$parsers.push(validateFileExtension);

            element.on('change', function () {
                scope.$apply(function () {
                    ngModel.$setViewValue(element[0].files[0]);
                });
            });
        }
    }
});

app.directive('customInputFileSize', function(){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            let maxFileSizeKb = parseInt(attrs.customInputFileSize) * 1024;
            element.on('change', function(){
                scope.$apply(function(){
                    ngModel.$setViewValue(element[0].files[0]);
                });
            });

            ngModel.$parsers.push(function(file) {
                if (file.size > maxFileSizeKb) {
                    ngModel.$setValidity('validFileSize', false);
                } else {
                    ngModel.$setValidity('validFileSize', true);
                }

                return file;
            });
        }
    }
});