//khởi tạo module
//set vùng agular

let myApp = angular.module("demo",[]);
//2 tham số : tên vùng và thành phần phụ thuộc

//khởi tạo controller
myApp.controller("democontrol",myfunction);
    function myfunction($scope){
        //tham số scope luôn luôn phải có để render dữ liệu ra view

        //khai báo biến
        $scope.xinchao = "hello";
        
    }

myApp.controller("inforcon",function($scope){
        $scope.ten = "khuong";
        $scope.namsinh = "2000";
        $scope.chuyennganh = "ptpm";
})