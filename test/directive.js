angular.module("directives",[])
    .directive("menu",function(){
        return{
            restrict:"ECMA",
            templateUrl:"demo.html",
//                    template:"<div>{{abc}}</div>",
//                    replace:true,
            transclude:true,  //把指令保存下来
            scope:true,   //false  "@"  "&"  "="
            link:function($scope,b,c){
                $scope.data=[
                    {
                        name:"111",
                        son:[
                            {name:"1-1"},
                            {name:"1-2"},
                            {name:"1-3"},
                            {name:"1-4"}
                        ]
                    },
                    {
                        name:"222",
                        son:[
                            {name:"2-1"},
                            {name:"2-2"},
                            {name:"2-3"},
                            {name:"2-4"}
                        ]
                    },
                    {
                        name:"333",
                        son:[
                            {name:"3-1"},
                            {name:"3-2"},
                            {name:"3-3"},
                            {name:"3-4"}
                        ]
                    }
                ];
                $scope.a=0;
                $scope.change=function(id){
                    $scope.a=id;
                }
            }
        }
    }).controller("ctrl",function($scope){
    $scope.menu="和辅导班"
}).directive("abc",function(){

})