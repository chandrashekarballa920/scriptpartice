var app=angular.module("myApp",['ngRoute']);
   app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/first",{
        templateUrl:"http.html",
        controller:"myHttp"
      })
      .when("/second",{
          templateUrl:"anchorScroll.html",
          controller:"myAnchor"
      });
   })
     .controller("myCtrl",function($scope){
          var countries=[{
            name:"India",
            cities:[
                {name:"Hyderabad"},
                {name:"chennai"}
            ]
        },
        {
            name:"West Indies",
            cities:[
                {name:"Jamaica"},
                {name:"Trinidad and Tobacco"}
            ]
        },
   ]
   $scope.countries=countries;
   });

   app.controller("lapCtrl",function($scope){
    var laptops=[{
        name:"India",
        brands:[
            {name:"Lenova"},
            {name:"LG"}
        ]
    },
    {
        name:"USA",
        brands:[
            {name:"MAC"},
            {name:"motorla"}
        ]
    },
]
$scope.laptops=laptops;
});