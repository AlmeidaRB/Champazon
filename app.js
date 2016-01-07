(function () {
  "use strict";
  angular.module('champazon', [
  'ngRoute'
  ])
  .config(function ($routeProvider) {   //configuring routing
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/admin/editproduct/:itemIndex', {
        templateUrl:'views/admin/editItem.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/admin/listView', {
        templateUrl: 'views/admin/listView.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/admin/addproduct', {
      templateUrl: 'views/admin/addNewItem.html',
      controller: 'AdminController as adminCtrl'
      })
      .when('/user/listView', {
        templateUrl: 'views/user/listView.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/user/cart', {
        templateUrl: 'views/user/shoppingCart.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/user/detail/:itemIndex', {
        templateUrl: 'views/user/detailView.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/not-found', {
        templateUrl: 'views/not-found.html'
      })
      .otherwise({
        redirectTo:'/not-found'
      });

  });

}) ();
