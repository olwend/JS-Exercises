// Prototype for Shop
const inventory = [
  {
    name: "Apple Pie",
    price: 12.56,
    available: true
  },
  {
    name: "Banana Pastry",
    price: 6.25,
    available: true
  },
  {
    name: "Cherry Sundae",
    price: 9.99,
    available: false
  },
  {
    name: "Sharp Soda",
    price: 1.99,
    available: true
  },
  {
    name: "Tuna Sandwich",
    price: 3.29,
    available: false
  }
]

function Shop(name, location, currency, inventory) {
  this.name = name;
  this.location = location;
  this.currency = currency;
  this.inventory = inventory;

  this.isAvailable = (index) => {
    // Code here...
  }

  // Code here...
}

const shop = new Shop("Happy Goods", "London - Old Street", "Sterling (£)", inventory);

shop.isAvailable(3);
