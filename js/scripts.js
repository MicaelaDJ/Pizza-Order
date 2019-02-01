// Business End
function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.price = 0;
  this.receipt = "";
}

function PizzaOrder() {
  this.pizzaItems = [];
  this.totalPrice = 0;
}

var pizzaSizePrice = {
  "Small": 5
}
var pizzaToppingsPrice = {
  "pineapple": .50
}

Pizza.prototype.calculatePrice = function() {
  var totalPizzaToppingPrice = 0;
  for (var index = 0; index < this.pizzaToppings.length; index++) {
    totalPizzaToppingPrice += pizzaToppingsPrice[this.pizzaToppings[index]];
  }
  this.price = (pizzaSizePrice[this.size] + totalPizzaToppingPrice);
}

Pizza.prototype.orderReceipt = function() {
  this.receipt = 0;
  if (this.pizzaToppings.length !== 0) {
    return (this.pizzaSize + " pie with " + this.pizzaToppings + "!");
  }
  else {
    return (this.pizzaSize + " pizza!");
  }
}


// User Interface
$(document).ready(function() {
  var newPizzaOrder = new PizzaOrder();
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

    newPizza.calculatePrice();
    newPizza.orderReceipt();
    newPizzaOrder.pizzaItems.push(newPizza.receipt);

    $("#cartContent").append("<p>" + newPizza.receipt + "</p>");
    $("#itemPrice").append("<p>" + newPizza.price + "</p>");
    $(".total").text("$" + newPizzaOrder.totalPrice);
  });
});
