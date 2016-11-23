describe("HelloWorldController", function() {
beforeEach(angular.mock.module("HelloWorldApp"));
    var $controller;
	beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
	}));
    
    it("says hello", function() {
        var $scope = {};
        var controller = $controller("HelloWorldController", { $scope: $scope });
    expect($scope.greeting).toBe("Hello World");
  });
});