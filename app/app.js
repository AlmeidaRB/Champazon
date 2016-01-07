(function () {
  "use strict";
  angular.module('champazon', [
  'ngRoute'
  ])
  .config(function ($routeProvider) {   //configuring routing
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/admin/editproduct/:itemIndex', {
        templateUrl:'app/views/admin/editItem.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/admin/listView', {
        templateUrl: 'app/views/admin/listView.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/admin/addproduct', {
      templateUrl: 'app/views/admin/addNewItem.html',
      controller: 'AdminController as adminCtrl'
      })
      .when('/user/listView', {
        templateUrl: 'app/views/user/listView.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/user/cart', {
        templateUrl: 'app/views/user/shoppingCart.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/user/detail/:itemIndex', {
        templateUrl: 'app/views/user/detailView.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/not-found', {
        templateUrl: 'app/views/not-found.html'
      })
      .otherwise({
        redirectTo:'/not-found'
      });

  });

}) ();
