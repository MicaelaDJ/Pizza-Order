// Business End
function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize,
  this.pizzaToppings = pizzaToppings
};


var pizzaSizePrice = {
  "Small": 5
}
var pizzaToppingsPrice = {
  "pineapple": .50,
}

Pizza.prototype.calculatePrice = function() {
  var totalPizzaToppingPrice = 0;
  for (var index = 0; index < this.pizzaToppings.length; index++) {
    totalPizzaToppingPrice += pizzaToppingsPrice(this.pizzaToppings[index]);
  }
  this.price = (pizzaSizePrice(this.size) + totalPizzaToppingPrice);
}

// User Interface
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
  });
});
