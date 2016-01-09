(function () {
  "use strict";
  angular.module('champazon', [
  'ngRoute'
  ])
  .config(function ($routeProvider) {   //configuring routing
    $routeProvider
      .when('/', {
        templateUrl: 'app/components/home/main.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/admin/editproduct/:itemIndex', {
        templateUrl:'app/components/admin/editItem.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/admin/listView', {
        templateUrl: 'app/components/admin/listView.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/admin/addproduct', {
      templateUrl: 'app/components/admin/addNewItem.html',
      controller: 'AdminController as adminCtrl'
      })
      .when('/product/prod1/listView', {
        templateUrl: 'app/components/product/prod1/listView.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/user/cart', {
        templateUrl: 'app/components/product/prod1/shoppingCart.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/user/detail/:itemIndex', {
        templateUrl: 'app/components/produc/prod1/detailView.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/not-found', {
        templateUrl: 'app/components/home/not-found.html'
      })
      .otherwise({
        redirectTo:'/not-found'
      });

  });

}) ();
