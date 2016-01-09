(function () {
"use strict";

angular.module('champazon')
  .factory('StoreService', function ($http, $rootScope) {

    var url = 'https://tiny-tiny.herokuapp.com/collections/champazon';

// Functions for the Admin

    var getProducts = function () {
      return $http.get(url);
    };
    var getSingleProduct = function (id) {
      return $http.get(url + '/' +id);
    };
    var addProduct = function (product) {
      product.reviews = [];
      $http.post(url, product);
      $rootScope.$broadcast('product:created')
    };
    var deleteProduct = function (id) {
      $http.delete(url + '/' + id);
      $rootScope.$broadcast('product:deleted');
    };
    var editProduct = function (product, id) {
      $http.put(url + '/' + id, product);
      $rootScope.$broadcast('product:updated');
    };

// Functions for the User

    var addReview = function (product, review) {
      review = {
        stars: 0,
        body: '',
        author: ''
      }
      product.reviews.push(review);
      $http.put(url + '/' + product._id, product);
    };

//Functions for the Cart

    var cart = [];

    var addToCart = function (product) {
      cart.push(product);
    };

    var getCartProducts = function () {
      return cart;
    };

    var deleteCartProducts = function (product) {
      var idx = cart.indexOf(product);
      cart.splice(idx,1);
    };

    var total = function() {
      var total = 0;
      angular.forEach(cart, function(product) {
      total += product.quant * product.price;
      })
      return total;
    };

    return {
      getProducts: getProducts,
      getProduct: getSingleProduct,
      addProduct: addProduct,
      deleteProduct: deleteProduct,
      editProduct: editProduct,
      addReview: addReview,

      addToCart: addToCart,
      getCartProducts: getCartProducts,
      deleteFromCart: deleteCartProducts,
      total: total
    };

  });

})();
