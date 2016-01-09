(function () {
  "use strict";

// user controller
  angular.module('champazon')
    .controller('MainController', function (StoreService, $rootScope, $scope, $routeParams, $location) {
      var mainCtrl = this;

      StoreService.getProducts().success(function(data) {
        mainCtrl.products = data;
      });

      StoreService.getProduct($routeParams.productIndex).success(function(data) {
        mainCtrl.singleProduct = data;
      });

      mainCtrl.currentIndex = $routeParams.productIndex;

  // shopping cart
        mainCtrl.cart = StoreService.getCartProducts();
        mainCtrl.total = StoreService.total();

        mainCtrl.addToCart = function(product) {
          StoreService.addToCart(product);
          $location.path('/user/cart');
        };

        mainCtrl.deleteFromCart = function(product) {
          StoreService.deleteFromCart(product);
        };

        mainCtrl.addReview = function (product, review) {
          StoreService.addReview(product, review);
          $scope.review = {};
        };

      });

})();

//admin controller

(function() {
  "use strict";
  angular.module('champazon')
    .controller('AdminController', function (StoreService, $rootScope, $scope, $routeParams, $location) {

      var adminCtrl = this;  //alias for AdminController

      StoreService.getProducts().success(function(data) {
        adminCtrl.products = data;
      });

      StoreService.getProduct($routeParams.productIndex).success(function(data) {
        adminCtrl.singleProduct = data;
      });

      adminCtrl.currentIndex = $routeParams.productIndex;

      //login feature//
      adminCtrl.login = function (username) {
        if(username === 'rach') {
          $location.path('/admin/listView');
        } else {
          alert("Incorrect admin username, please try again.");
        }
      };

      adminCtrl.addProduct = function (newProduct) {
        StoreService.addProduct(newProduct);
        $location.path('/admin/listView');

      };

      adminCtrl.deleteProduct = function (id) {
        StoreService.deleteProduct(id);
      };

      adminCtrl.editProduct = function (product) {
        StoreService.editProduct(product, $routeParams.productIndex);
        $location.path('/admin/listView');
      };

    });
})();
