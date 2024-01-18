let app = angular.module("myapp",[]);

--bai 1--

// app.controller("myctrl",function($scope){
//     $scope.fullname ="xyz";
//     $scope.birthday ="25/2/2222";
//     $scope.gender = "nam";
//     $scope.photo = "20231127_194726_HDR.jpg";
//     $scope.mark = 8.5
// })


app.controller("myctrl",function($scope){

    $scope.student ={
        fullname :"xyz",
        birthday :"25/2/2222",
        gender : "nam",
        photo : "20231127_194726_HDR.jpg",
        mark : 8.5
    }
});