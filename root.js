/// <reference path="scope.js" />

app.directive('mydirective', function(){
    return{
        restrict: 'AECM',
        template:"<p>Hello this information from custom directive</p>"
    }
});

app.controller('myService', function($scope){
      $scope.whitespace= function(input){
          if(!input){
              return input;
          }
          var output='';
          for(i=0;i<input.length;i++){
              if(i>0 && input[i]==input[i].touppercase()){
                output = output + " ";
              }
              
              output= output+input[i];
          }
          $scope.output=output;
        }
    
}).controller('rootController', function($scope,$rootScope){
            $rootScope.rootname="hello this information from rootscope";
 }).controller('scopeController', function($scope,$rootScope){
    $scope.scopename= $rootScope.rootname;
})
.controller('routerConfig', function($scope,$timeout){
    $scope.change="it will change after 1 second";
    $timeout(function(){
        $scope.change="am changed within time"; 
        //$scope.$apply();
    },3000);
    
})
.controller("myAnchor",function($scope,$location,$anchorScroll){
    $scope.scrollTo=function(rooney){
        $location.hash(rooney);
          $anchorScroll.yOffset=50;
        $anchorScroll;
    }
}) .controller("myHttp",function($scope,$http,$log){
    $http({
              method: 'GET',
              url: 'https://api.github.com/users'
          })
     
        .then(function(response){
        $scope.project = response.data;
           
        })
 });
       