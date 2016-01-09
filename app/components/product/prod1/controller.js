(function () {
  "use strict";

// user controller
  angular.module('champazon')
    .controller('MainController', function (UserService, $rootScope, $scope, $routeParams, $location) {
      var mainCtrl = this;

      UserService.getProducts().success(function(data) {
        mainCtrl.Products = data;
      });

      UserService.getProduct($routeParams.productIndex).success(function(data) {
        mainCtrl.singleProduct = data;
      });

      mainCtrl.currentIndex = $routeParams.productIndex;

  // shopping cart
        mainCtrl.cart = UserService.getCartProducts();
        mainCtrl.total = UserService.total();

        mainCtrl.addToCart = function(product) {
          UserService.addToCart(product);
          $location.path('/user/cart');
        };

        mainCtrl.deleteFromCart = function(product) {
          UserService.deleteFromCart(product);
        };

        mainCtrl.addReview = function (product, review) {
          UserService.addReview(product, review);
          $scope.review = {};
        };

      });

})();
