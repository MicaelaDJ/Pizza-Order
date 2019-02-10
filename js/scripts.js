// Business End
var pizzaBasePrice = 5;
var pizzaToppingsPrice = 0.25;

function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}

Pizza.prototype.calculatePrice = function() {
  var price = 0;
  for (i = 0; i < this.pizzaToppings.length; i++) {
    price += pizzaToppingsPrice;
  }
  if (this.pizzaSize === "Small") {
    price += pizzaBasePrice;
  }
  else if (this.pizzaSize === "Medium") {
    price += pizzaBasePrice + 2.50;
  }
  else {
    price += pizzaBasePrice + 5;
  }
  this.price = price;
  return price.toFixed(2);
};

// User Interface
$(document).ready(function() {
  $("#priceButton").click(function(event) {
    event.preventDefault();

    var pizzaSizeInput = $("input[name=pizzaSize]:checked").val();
    console.log(pizzaSizeInput)
    var pizzaToppingsInput = [];
    $("input[name=pizzaToppings]:checked").each(function() {
      pizzaToppingsInput.push($(this).val())
      console.log(pizzaToppingsInput)
    })
    var newPizza = new Pizza(pizzaSizeInput, pizzaToppingsInput);
    var pizzaPrice = newPizza.calculatePrice()

    $("#pizzaOrder").text(newPizza.pizzaSize + " Pizza with: " + newPizza.pizzaToppings);
    $("#priceGoesHere").text("Total: $" + pizzaPrice);
  });
});
