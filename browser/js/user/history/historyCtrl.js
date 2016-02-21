app.controller('HistoryCtrl', function($scope, AuthService, currentUser, $state,
  QuestFactory, ProductFactory, currentQuest) {

  $scope.currentUser = currentUser;
  $scope.currentQuest = currentQuest;

  currentUser.completedQuests.forEach(function(quest) {
      currentUser.completedQuestsFull = [];
      QuestFactory.getQuest(quest)
        .then(function(data) {
          currentUser.completedQuestsFull.push(data);
        })
    })
    .then(function(currentUser) {
      currentUser.completedQuestsFull.products.forEach(function(product) {
        currentUser.completedQuestsFull.productsFull = [];
        ProductFactory.getProduct(product)
          .then(function(product) {
            currentUser.completedQuestsFull.productsFull.push(
              product);
          })
      })
    })


})
