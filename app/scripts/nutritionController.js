angular.module('nutritionApp').controller('nutritionController', ['$http', '$q', '$timeout', '$scope', function ($http, $q, $timeout, $scope) {
  'use strict';
  
  $scope.selected = [];
  
  $scope.query = {
    order: 'name',
    limit: 5,
    page: 1
  };
  
  $scope.columns = [{
    name: 'Dessert (100g serving)',
    orderBy: 'name'
  }, {
    name: 'Calories',
    numeric: true,
    orderBy: 'calories.value'
  }, {
    name: 'Fat',
    numeric: true,
    orderBy: 'fat.value',
    unit: 'g'
  }, {
    name: 'Carbs',
    numeric: true,
    orderBy: 'carbs.value',
    unit: 'g'
  }, {
    name: 'Protein',
    numeric: true,
    orderBy: 'protein.value',
    unit: 'g'
  }, {
    name: 'Sodium',
    numeric: true,
    orderBy: 'sodium.value',
    unit: 'mg'
  }, {
    name: 'Calcium',
    numeric: true,
    orderBy: 'calcium.value',
    unit: '%'
  }, {
    name: 'Iron',
    numeric: true,
    orderBy: 'iron.value',
    unit: '%'
  }];
  
  $http.get('desserts.js').then(function (desserts) {
    $scope.desserts = desserts.data;
  });
  
  $scope.onpagechange = function(page, limit) {
    
    console.log('Scope Page: ' + $scope.query.page + ' Scope Limit: ' + $scope.query.limit);
    console.log('Page: ' + page + ' Limit: ' + limit);
    
    var deferred = $q.defer();
    
    $timeout(function () {
      deferred.resolve();
    }, 2000);
    
    return deferred.promise;
  };
  
  $scope.loadStuff = function () {
    var deferred = $q.defer();
    
    $timeout(function () {
      deferred.reject();
    }, 2000);
    
    $scope.deferred = deferred.promise;
  };
  
  $scope.onorderchange = function(order) {
    
    console.log('Scope Order: ' + $scope.query.order);
    console.log('Order: ' + order);
    
    var deferred = $q.defer();
    
    $timeout(function () {
      deferred.resolve();
    }, 2000);
    
    return deferred.promise;
  };
  
  $scope.skip = function (dessert, index) {
    return index >= ($scope.query.limit * ($scope.query.page - 1));
  };
}]);