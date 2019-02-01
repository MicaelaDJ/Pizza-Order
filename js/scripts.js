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


// User Interface
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
  });
});
