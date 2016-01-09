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

    return {

      getProducts: getProducts,
      getProduct: getSingleProduct,
      addProduct: addProduct,
      deleteProduct: deleteProduct,
      editProduct: editProduct
      
    };

  });

})();
