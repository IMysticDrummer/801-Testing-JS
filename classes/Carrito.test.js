import exp from 'constants';
import Carrito from './Carrito.js';

describe('Testing Carrito class', () => {
  let carrito;
  let nigiriItem = {
    name: 'Nigiri',
    price: 1.6,
  };
  let waterItem = {
    name: 'Bottle of watter',
    price: 1,
  };
  // Hook de Jest
  beforeEach(() => {
    carrito = new Carrito();
  });

  describe('getTotalItems', () => {
    it('Should return 0 items at initialization', () => {
      expect(carrito.getTotalItems()).toEqual(0);
    });

    it('Should return 1 item after adding 1 product', () => {
      carrito.addItem(nigiriItem);
      expect(carrito.getTotalItems()).toEqual(1);
    });
  });

  describe('addItem', () => {
    let nigiri;
    beforeEach(() => {
      nigiri = carrito.addItem(nigiriItem);
    });
    it('Should have the item added in the Carrito.items', () => {
      expect(carrito.items).toContainEqual(nigiri);
    });
    it('Should not contain an empty object when adding a nigiriItem', () => {
      expect(carrito.items).not.toContainEqual({});
    });
    // Manejo de errores en Jest
    it('Should throw an error when adding empty objects to the carrito', () => {
      expect(() => carrito.addItem({})).toThrow();
    });
    // edge testing
    it('Should throw an error saying "Must be an object" when trying to add a non object', () => {
      expect(() => carrito.addItem('Hello')).toThrow(/must be an object/i);
      expect(() => carrito.addItem(33)).toThrow(/must be an object/i);
      // expect(() => carrito.addItem(new Promise())).toThrow(/must be an object/i)
      expect(() => carrito.addItem(function () {})).toThrow(
        /must be an object/i
      );
    });
    // it.todo('Should throw an error when trying to add an item without name or price')
    it('Should throw an error when trying to add an item without name or price', () => {
      expect(() => carrito.addItem({ foo: 'bar' })).toThrow(
        /must have name and price/i
      );
    });
    it('Should return the added product with an id', () => {
      const newItem = carrito.addItem(nigiriItem);
      expect(newItem).toHaveProperty('id');
      expect(newItem).toMatchObject(nigiriItem);
    });
  });

  describe('getTotalCheckout', () => {
    it('Should return 1.6 after adding a nigiriItem', () => {
      carrito.addItem(nigiriItem);
      expect(carrito.getTotalCheckout()).toBeCloseTo(1.6);
    });
    it('Should return 3.2 when adding 2 nigiriItems', () => {
      carrito.addItem(nigiriItem);
      carrito.addItem(nigiriItem);
      expect(carrito.getTotalCheckout()).toBeCloseTo(3.2);
    });
    it('Should return 2.6 when adding 1 nigiriItems and 1 watter', () => {
      carrito.addItem(nigiriItem);
      carrito.addItem(waterItem);
      expect(carrito.getTotalCheckout()).toBeCloseTo(2.6);
    });

    it('Should return 4.2 when adding 2 nigiriItems and 1 watter', () => {
      carrito.addItem(nigiriItem);
      carrito.addItem(nigiriItem);
      carrito.addItem(waterItem);
      expect(carrito.getTotalCheckout()).toBeCloseTo(4.2);
    });
  });
  describe('removeItem', () => {
    // it.todo('Aplicar TDD para remove item')
    it('Carrito should have an empty array after adding 1 nigiri and removing 1 nigiri', () => {
      let nigiriAdded = carrito.addItem(nigiriItem);
      carrito.removeItem(nigiriAdded);
      expect(carrito.items).toHaveLength(0);
    });
    it('Should return an array with 1 water array after adding 1 nigiri, 1 water and removing 1 nigiri', () => {
      let nigiriAdded = carrito.addItem(nigiriItem);
      let waterAdded = carrito.addItem(waterItem);
      carrito.removeItem(nigiriAdded);
      expect(carrito.items).toHaveLength(1);
      expect(carrito.items).toContainEqual(waterAdded);
    });
    it('Should return an array with 1 nigiri array after adding 2 nigiri, and removing 1 nigiri', () => {
      let nigiri1 = carrito.addItem(nigiriItem);
      let nigiri2 = carrito.addItem(nigiriItem);
      carrito.removeItem(nigiri1);
      expect(carrito.items).toHaveLength(1);
      expect(carrito.items).toContainEqual(nigiri2);
    });
  });
  // pista: deberéis modificar el test también de addItem para generar un id cuando se añade el item

  describe('checkItem', () => {
    it('Should check an item before adding', () => {
      // el espía nos da observabilidad sobre lo que pasa cuando se llama una función que invoca a nuestra función espiada
      const spy = jest.spyOn(carrito, 'checkItem');
      // si llamamos a add item
      carrito.addItem(nigiriItem);
      carrito.addItem(waterItem);
      // entonces checkItem, nuestra funcion espiada, tiene que ser invocada
      expect(spy).toHaveBeenCalled();
      // el input tiene que ser el mismo que addItem
      expect(spy).toHaveBeenCalledWith(nigiriItem);
      expect(spy).toHaveBeenCalledWith(waterItem);

      expect(spy).toHaveBeenNthCalledWith(1, nigiriItem);
      expect(spy).toHaveBeenNthCalledWith(2, waterItem);
      // tiene haberse llamado una única vez
      expect(spy).toHaveBeenCalledTimes(2);
    });
  });
});
