angular.module("myapp",['ngSanitize'])
    .controller("ctrl1",function ($scope,$interval) {
        //初始化数据
        $scope.username="达摩";
        $scope.password="shijiamoni";
        $scope.email="00000@rulai.com";
        $scope.details="天竺国三王子,菩提树修成正果!";
        //准备标签
        $scope.label="<p>你好,欢迎来到大雷音寺</p>";
    })