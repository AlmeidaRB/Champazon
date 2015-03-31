(function () {
"use strict";

angular.module('champazon')
  .factory('StoreService', function ($http, $rootScope) {

    var url = 'http://tiy-fee-rest.herokuapp.com/collections/champazon2';

// Functions for the Admin
// Functions for the Admin
// Functions for the Admin

    var getProducts = function () {
      return $http.get(url);
    };
    var getSingleItem = function (id) {  // was (index)
      return $http.get(url + '/' +id);
    };
    var addProduct = function (item) {
      item.reviews = [];
      $http.post(url, item);
      $rootScope.$broadcast('item:created')
    };
    var deleteProduct = function (id) {   //was (item)
      $http.delete(url + '/' + id);
      $rootScope.$broadcast('item:deleted');
    };
    var editProduct = function (item, id) {  //was (item, index)
      $http.put(url + '/' + id, item);
      $rootScope.$broadcast('item:updated');
    };

// Functions for the User
// Functions for the User
// Functions for the User

    var addReview = function (item, review) {
      review = {
        stars: 0,
        body: '',
        author: ''
      }
      item.reviews.push(review);
      $http.put(url + '/' + item._id, item);
    };

//Functions for the Cart
//Functions for the Cart
//Functions for the Cart

    var cart = [];

    var addToCart = function (item) {
      cart.push(item);
    };

    var getCartProducts = function () {
      return cart;
    };

    var deleteCartProducts = function (item) {
      var idx = cart.indexOf(item);
      cart.splice(idx,1);
    };

    var total = function() {
      var total = 0;
      angular.forEach(cart, function(item) {
      total += item.quant * item.price;
      })
      return total;
    };

    return {
      getItems: getProducts,
      getItem: getSingleItem,
      addItem: addProduct,
      deleteItem: deleteProduct,
      editItem: editProduct,
      addReview: addReview,

      addToCart: addToCart,
      getCartItems: getCartProducts,
      deleteFromCart: deleteCartProducts,
      total: total
    };

  });

})();
