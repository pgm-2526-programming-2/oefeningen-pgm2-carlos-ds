// https://www.pgm.gent/pgm-2/v2/javascript/objects/exercise.html#oefening-winkelwagen
const shoppingCart = {
  items: [
    { name: "Product 1", price: 20 },
    { name: "Product 2", price: 30 },
    { name: "Product 3", price: 15 },
  ],

  // Aangepaste methode om totale prijs te berekenen
  calculateTotal: function () {
    s;
    return this.items.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
      0
    );
  },
};

console.log(shoppingCart.calculateTotal());
