app.filter('wrap', function () {
    return function (string) {
        return `[${string}]`
    };
});
app.filter('vnd', function () {
    return function (price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
    };
});
