db.pizzaOrders.find({
  $and: [{ quantity: { $lt: 5 } }, { credit_card_type: "mastercard" }],
});

db.pizzaOrders.find({
  $and: [{ quantity: { $lte: 5 } }, { size: "small" }],
});

db.pizzaOrders.find({
  $and: [{ quantity: { $gt: 10 } }, { credit_card_type: "null" }],
});
