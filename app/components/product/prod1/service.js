(function () {
"use strict";

angular.module('champazon')
  .factory('UserService', function ($http, $rootScope) {

    var url = 'https://tiny-tiny.herokuapp.com/collections/champazon';

// Functions for the User

    var getProducts = function () {
      return $http.get(url);
    };
    var getSingleProduct = function (id) {
      return $http.get(url + '/' +id);
    };
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
      addReview: addReview,
      addToCart: addToCart,
      getCartProducts: getCartProducts,
      deleteFromCart: deleteCartProducts,
      total: total

    };

  });

})();
