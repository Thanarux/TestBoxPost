'use strict';

/**
 * @ngdoc function
 * @name geekAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geekAngularApp
 */
angular.module('geekAngularApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.awesomeThings = [];
    
    $scope.createNewBolgPost = function(){
    	
      var newpost = {
      title:$scope.title,
      content:$scope.content,
      post_by:"Test",
      comments:[] };
      $http.post('http://localhost:9001/blogs', newpost).
        then(function(response) {
          $scope.refreshBlog()
         }, function(response) {
      });
    }
     $scope.refreshBlog = function(){
        $http.get("http://localhost:9001/blogs").then(
      function(response) {
        $scope.awesomeThings = response.data;
      },function(response) {
        $scope.error = "Service not ready"
      });
     }
    $scope.refreshBlog()
  });
