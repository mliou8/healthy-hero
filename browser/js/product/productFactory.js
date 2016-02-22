app.factory('ProductFactory', function($http) {
  return {
    getProduct: function(productName) {
      return $http.get('/api/product/' + productName)
        .then(function(response) {
          return response.data;
        })
    },
    populateProducts: function(productArr) {
      var productsFull = [];
      productArr.forEach(function(product) {
        return $http.get('/api/product/' + product)
          .then(function(response) {
            // console.log("This is true ", response.data[0]);
            return productsFull.push(response.data[0])
          })
      })
      return productsFull;
    }
  }
})
