export const pizzaPrice = (pizza, ...extras) => {
  let price = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10,
    ExtraSauce: 1,
    ExtraToppings: 2,
  };

  if (extras.length > 0) {
    return price[pizza] + pizzaPrice(...extras);
  } else {
    return price[pizza];
  }
};

export function orderPrice(pizzaOrders) {
  let total = 0;
  for (const order of pizzaOrders) {
    total += pizzaPrice(order.pizza, ...order.extras);
  }
  return total;
}
