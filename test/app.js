angular.module("myapp",["ngRoute","ngAnimate","ctrls","sevices"])
.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"index.html",
        controller:"index"
    }).when("/list/:id",{
        templateUrl:"list.html",
        controller:"list"
    }).when("/show/:id",{
        templateUrl:"show.html",
        //controller:"list"
    }).otherwise("/")

}).controller("list",function($scope,$routerParams){
    $scope.id=$routerParams.id
})



/*
1. bower  引入到页面当中
2. 将route提供的模块依赖到我们主模块当中 ngRoute
3. 配置路由  在主文件当中配置路由
4. config     $routeProvider服务
5. $routeProvider.when("路径",{templateUrl:url,controller:"name"})
6.  应该在主页面当中指定 容器  ng-view
*/
