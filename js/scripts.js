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
  "Small": 5,
  "Large": 10
}
var pizzaToppingsPrice = {
  "pineapple": 0.50,
  "tomatoes": 0.50
}

Pizza.prototype.calculatePrice = function() {
  var totalPizzaToppingPrice = 0;
  for (var i = 0; i < this.pizzaToppings.length; i++) {
    totalPizzaToppingPrice += pizzaToppingsPrice[this.pizzaToppings[i]];
  }
  this.price = (pizzaSizePrice[this.pizzaSize] + totalPizzaToppingPrice);
}

Pizza.prototype.orderReceipt = function() {
  this.receipt = "pizza total";
  if (this.pizzaToppings.length !== 0) {
    console.log (this.pizzaSize + " pie with " + this.pizzaToppings + "!");
  }
  else {
    console.log (this.pizzaSize + " pizza!");
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
    newPizzaOrder.pizzaItems.push(newPizza.orderReceipt);

    $("#cartContent").append("<p>" + newPizza.receipt + "</p>");
    $("#itemPrice").append("<p>" + newPizza.price + "</p>");
    $(".total").text("$" + newPizzaOrder.totalPrice);
  });
});
