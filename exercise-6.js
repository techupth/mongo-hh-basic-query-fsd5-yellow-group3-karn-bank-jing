db.pizzaOrders.updateMany(
  { customer_name: "Jack" },
  { $set: { isAdmin: false } }
);
db.pizzaOrders.updateMany({}, { $set: { country: "Thailand" } });
