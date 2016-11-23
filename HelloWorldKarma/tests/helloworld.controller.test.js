describe("HelloWorldController", function() {
beforeEach(module("HelloWorldApp"));
    var $controller;
	beforeEach(inject(function(_$controller_){
	  $controller = _$controller_;
	}));
    
    it("says hello", function() {
        var $scope = {};
        var controller = $controller("HelloWorldController", { $scope: $scope });
    expect($scope.greeting).toBe("Hello World");
  });
});