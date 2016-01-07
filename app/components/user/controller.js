(function () {
  "use strict";

// user controller
  angular.module('champazon')
    .controller('MainController', function (StoreService, $rootScope, $scope, $routeParams, $location) {
      var mainCtrl = this;

      StoreService.getItems().success(function(data) {
        mainCtrl.items = data;
      });

      StoreService.getItem($routeParams.itemIndex).success(function(data) {
        mainCtrl.singleItem = data;
      });

      mainCtrl.currentIndex = $routeParams.itemIndex;

  // shopping cart
        mainCtrl.cart = StoreService.getCartItems();
        mainCtrl.total = StoreService.total();

        mainCtrl.addToCart = function(item) {
          StoreService.addToCart(item);
          $location.path('/user/cart');
        };

        mainCtrl.deleteFromCart = function(item) {
          StoreService.deleteFromCart(item);
        };

        mainCtrl.addReview = function (item, review) {
          StoreService.addReview(item, review);
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

      StoreService.getItems().success(function(data) {
        adminCtrl.items = data;
      });

      StoreService.getItem($routeParams.itemIndex).success(function(data) {
        adminCtrl.singleItem = data;
      });

      adminCtrl.currentIndex = $routeParams.itemIndex;

      //login feature//
      adminCtrl.login = function (username) {
        if(username === 'rach') {
          $location.path('/admin/listView');
        } else {
          alert("Incorrect admin username, please try again.");
        }
      };

      adminCtrl.addProduct = function (newItem) {
        StoreService.addItem(newItem);
        $location.path('/admin/listView');

      };

      adminCtrl.deleteProduct = function (id) {
        StoreService.deleteItem(id);
      };

      adminCtrl.editProduct = function (item) {
        StoreService.editItem(item, $routeParams.itemIndex);
        $location.path('/admin/listView');
      };

    });
})();
