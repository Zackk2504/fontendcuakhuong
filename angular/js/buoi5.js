
let myApp = angular.module("demo",[]);

// khoi tao controller
myApp.controller("democontroller", function ($scope) {
    $scope.nhanvien = [{
        ten: "xyz",
        ngaysinh: new Date("2004-11-11"),
        mucluong: 100000,
        gioitinh: 1
    },
    {
        ten: "xyz2",
        ngaysinh: new Date("2004-11-11"),
        mucluong: 200000,
        gioitinh: 1
    },
    {
        ten: "xyz3",
        ngaysinh: new Date("2004-11-11"),
        mucluong: 300000,
        gioitinh: 1
    },
    {
        ten: "xyz4",
        ngaysinh: new Date("2004-11-11"),
        mucluong: 400000,
        gioitinh: 0
    }
    ]
    $scope.number = 2;
    //sự kiến click
    //vlick vào nhân viên nào
    //thì hiện ra thông báo
    //xin chao + tên nv

    $scope.sayHello() = function($name){
        alert("xin chao"+ $name)
    }
})