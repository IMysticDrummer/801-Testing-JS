module.exports = class Carrito {
  constructor() {
    this.items = [];
  }

  getTotalItems() {
    return this.items.length;
  }

  addItem(item) {
    this.checkItem(item);
    const id = Math.round(Math.random() * 100000);
    const itemToAdd = { ...item, id };
    this.items.push(itemToAdd);
    return itemToAdd;
  }

  checkItem(item) {
    if (typeof item === 'object' && Object.keys(item).length === 0) {
      throw new Error('Item cannot be an empty object');
    } else if (typeof item !== 'object') {
      throw new Error('Must be an object');
    }
    if (!item.price || !item.name) {
      throw new Error('An item must have name and price');
    }
  }
  removeItem(item) {
    this.items = this.items.filter((elem) => item.id !== elem.id);
  }

  getTotalCheckout() {
    return this.items.reduce((prev, curr) => prev + curr.price, 0);
  }
};
