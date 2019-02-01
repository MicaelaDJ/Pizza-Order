// Business End
function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize,
  this.pizzaToppings = pizzaToppings
};

function Order() {
  this.pizzaItems = [],
  this.totalPrice = 0
}

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
  var pizzaOrder = new PizzaOrder();
  $("#orderInput").submit(function(event) {
    event.preventDefault();
    var pizzaToppings = [];
    $("input:checkbox:checked").each(function() {
      pizzaToppings.push($(this).val());
    })
    var pizzaSize = [];
    $("input:checkbox:checked").each(function() {
      pizzaSize.push($(this).val());
    })
    var newPizza = new Pizza(pizzaSize, pizzaToppings);

    newPizza.getPrice();
  });
});
