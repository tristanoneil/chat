var app = angular.module("app", ["firebase"]);

function ChatController($scope, angularFire) {
  var ref = new Firebase("https://angularchat.firebaseio.com/messages");

  $scope.messages = [];
  angularFire(ref, $scope, "messages");

  $scope.saveMessage = function() {
    $scope.message.person = $scope.name;
    $scope.messages.push($scope.message);
    $scope.message = {};
  }
}
