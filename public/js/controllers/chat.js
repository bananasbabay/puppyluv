angular.module('ChatController', []).controller('ChatCtrl', function($scope, Owner) {
PUBNUB.publish({ channel : 'chat', message : "hello!" });
PUBNUB.subscribe({ channel : 'chat', message : fun });


  }
});