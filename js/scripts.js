// Business End
var pizzaBasePrice = 5;
var pizzaToppings = 0.25;
var order = new Order();

function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.price = 0;
}
function Order() {
  this.order = [];
  this.id = 0;
}

Pizza.prototype.checkSize = function() {
  if (this.pizzaBasePrice === "Small") {
    this.price += pizzaBaseSize;
  }
  else if (this.pizzaBasePrice === "Medium") {
    this.price += pizzaBaseSize += 2.50;
  }
  else if (this.pizzaBaseSize === "Large") {
    this.price += pizzaBaseSize += 5;
  }
  else {
    alert ("You gotta pick a size so we know how much dough to use!");
  }
};

Pizza.prototype.checkToppings = function() {
  if (this.pizzaToppings === "pizzaToppings") {
    this.price += this.pizzaToppings.length * pizzaToppings;
  }
  else {
    alert ("C'mon don't you want some delicious toppings?");
  }
};

Pizza.prototype.calculatePrice = function () {
  this.price += Pizza.checkSize += Pizza.checkToppings;
};

Order.prototype.addPizza = function(pizza) {
  this.id ++;
  pizza.id = this.id;
  this.order.push(pizza);
  $(this.order).each(function() {
    console.log($(this));
  });
};

// User Interface
$(document).ready(function() {
  $("#priceButton").click(function(event) {
    event.preventDefault();

    var pizzaSizeInput = $("input[name=pizzaSize]:checked").val();
    var pizzaToppingsInput = $("input[name=pizzaToppings]:checked").val();
    var newPizza = new Pizza(pizzaSizeInput, pizzaToppingsInput);
    newPizza.calculatePrice;

    $("#pizzaOrder").text(newPizza.pizzaSize + " with: " + pizzaToppings);
    $("priceGoesHere").text(newPizza.calculatePrice());
  });
});
