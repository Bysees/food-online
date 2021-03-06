export class CartStorage {

  static set(cartItems) {
    sessionStorage.setItem('cart', cartItems)
  }

  static get() {
    return sessionStorage.getItem('cart')
  }

  static remove() {
    sessionStorage.removeItem('cart')
  }
}
