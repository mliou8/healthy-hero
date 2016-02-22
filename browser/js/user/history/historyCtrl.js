app.controller('HistoryCtrl', function($scope, AuthService, currentUser, $state,
  QuestFactory, ProductFactory, completedQuestsFull) {

  // Populating the completed Quests product information
  completedQuestsFull.forEach(function(quest) {
    var productsFull = [];
    // console.log("Quest products", quest[0].products);
    quest[0].productsFull = ProductFactory.populateProducts(quest[0].products)
  })

  $scope.completedQuests = completedQuestsFull;
  $scope.showDetails = false;
  $scope.toggleDetails = function() {
    $scope.showDetails = !$scope.showDetails;
  }
})
