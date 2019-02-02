// Business End
function Order() {
  
}

var pizzaSize = 5;
var pizzaVeggieToppings = 0.15;
var pizzaMeatToppings = 0.20;

function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.price = 0;
}

Pizza.prototype.checkSize = function() {
  if (this.pizzaSize === "Small") {
    this.price += pizzaSize;
  }
  else if (this.pizzaSize === "Medium") {
    this.price += (pizzaSize + 2.50);
  }
  else if (this.pizzaSize === "Large") {
    this.price += (pizzaSize + 5);
  }
  else {
    alert ("You gotta pick a size so we know how much dough to use!")
  }
};

Pizza.prototype.checkToppings = function() {
  if (this.pizzaToppings === "pizzaVeggieToppings") {
    this.price += this.pizzaToppings.length * pizzaVeggieToppings;
  }
  else if (this.pizzaToppings === "pizzaMeatToppings") {
    this.price += this.pizzaToppings.length * pizzaVeggieToppings;
  }
  else {
    alert ("C'mon don't you want some delicious toppings?")
  }
};
//
// Pizza.prototype.orderReceipt = function() {
//   this.receipt = "pizza total";
//   if (this.pizzaToppings.length !== 0) {
//     console.log (this.pizzaSize + " pie with " + this.pizzaToppings + "!");
//   }
//   else {
//     console.log (this.pizzaSize + " pizza!");
//   }
// }


// User Interface
$(document).ready(function() {
  $("#priceButton").click(function(event) {
    event.preventDefault();

    var pizzaSizeInput = $("input[name=size]:checked").val();
    var pizzaVeggieToppingsInput = $("input[name=pizzaVeggieToppings]:checked").val();
    var pizzaMeatToppingsInput = $("input[name=pizzaMeatToppings]:checked").val();
    var newPizza = new Pizza(pizzaSizeInput, pizzaVeggieToppings, pizzaMeatToppingsInput);
    newPizza.calculatePrice;

    $("#pizzaOrder").text(pizzaSize + " with: " + pizzaToppings);
    $("priceGoesHere").text(newPizza.calculatePrice());
  });
});
