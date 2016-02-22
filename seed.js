/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/


var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');

var User = Promise.promisifyAll(mongoose.model('User'));
var Category = Promise.promisifyAll(mongoose.model('Category'));
var Nutrient = Promise.promisifyAll(mongoose.model('Nutrient'));
var Quest = Promise.promisifyAll(mongoose.model('Quest'));
var Product = Promise.promisifyAll(mongoose.model('Product'));

var categoryData = require('./server/seeds/categories.js')
var nutrientData = require('./server/seeds/nutrients.js')
var productData = require('./server/seeds/products.js')
var userData = require('./server/seeds/users.js')
var questData = require('./server/seeds/quests.js')


var myCategories;
var myNutrients;
var myProducts;
var myQuests;

// Categories (not dependent on anything)
// Nutrients (not dependent on anything)
// Product (needs nutrients and categories)
// Quests (needs products)
// Users (has quests)


// Requires nutrients and categories
function seedProducts(productData) {
  console.log("seeding products")
  var promises = [];

  productData.forEach(function(product) {
    // for (var i = 0; i < product.category.length; i++) {
    //     var check = myCategories.filter(function (category) {
    //         return category.name === product.category[i]
    //     })[0]._id
    //     product.category[i] = check;
    //     console.log(check);
    // }
    // // console.dir(myNutrients)
    // for (var j = 0; j < product.nutrients.length; j++) {
    //     console.log('length is ', product.nutrients.length);
    //     var check2 = myNutrients.filter(function (nutrient) {
    //         console.log("Nutrient name is ", nutrient.name);
    //         console.log("Product nutrients array is ", product.nutrients[i]);
    //         return nutrient.name === product.nutrients[i]
    //     })[0]._id
    //      console.log("check ", check)
    //     product.nutrients[i] = check2;
    // }
    promises.push(Product.create(product))
  })
  return Promise.all(promises)
}

//Requires products
function seedQuests(questData) {
  console.log("seeding quests")
  var promises = [];

  questData.forEach(function(quest) {
    //     for (var i = 0; i < quest.product.length; i++) {
    //         var check = myProducts.filter(function (product) {
    //             return product.name === quest.product[i];
    //         })[0]._id
    //         quest.product[i] = check;
    //     }
    promises.push(Quest.create(quest))
  })
  return Promise.all(promises)
}
//Define promisified version of seeding Category Data
function seedCategories(categoryData) {
  console.log("seeding categories");
  var promises = [];
  categoryData.forEach(function(cat) {
    promises.push(Category.create(cat))
  })
  return Promise.all(promises)
}

//Define promisified version of seeding Nutrient Data
function seedNutrients(nutrientData) {
  console.log("seeding nutrients");
  // console.log("nutrientData", nutrientData)
  var promises = [];
  nutrientData.forEach(function(nut) {
    // console.log("nut ", nut);
    promises.push(Nutrient.create(nut))
  })
  return Promise.all(promises)
}
//Has quests
function seedUsers(userData) {
  console.log("seeding users");
  var promises = [];
  userData.forEach(function(user) {
    promises.push(User.create(user))
  })
  return Promise.all(promises)
}

//Clears out the current database
connectToDb.then(function() {
    return Promise.all([Category.remove({}), Quest.remove({}), Product.remove({}),
      User.remove({}), Nutrient.remove({})
    ])
  })
  .then(function() {
    return seedCategories(categoryData);
  })
  .then(function(categories) {
    console.log("Categories are ", categories);
    myCategories = categories;
    return seedNutrients(nutrientData);
  })
  .then(function(nutrients) {
    console.log("Nutrients are ", nutrients);
    myNutrients = nutrients;
    return seedProducts(productData);
  })
  .then(function(products) {
    myProducts = products;
    return seedQuests(questData);
  })
  .then(function(quests) {
    console.log("Quests are ", quests);
    myQuests = quests;
    return seedUsers(userData);
  })
