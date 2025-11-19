import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsArray: WritableSignal<Array<CartItem>> = signal<Array<CartItem>>([]);
  private totalPrice: number = 0;

  // Opa, tudo bem código? Gostaria que TODA VEZ que o cartItemsArray for atualizado
  // você atualize o localStorage e atualize o totalPrice
  constructor() {
    const cartArrayStr = localStorage.getItem("cartArray");
    if (cartArrayStr) this.cartItemsArray.set(JSON.parse(cartArrayStr));

    effect(() => {
      localStorage.setItem("cartArray", JSON.stringify(this.cartItemsArray()));
      this.updateTotalPrice();
    });

    // this.updateTotalPrice();
    // -> Outra forma de fazer a mesma coisa:
    // this.cartItemsArray = JSON.parse(localStorage.getItem("cartArray") || "[]");
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  updateTotalPrice() {
    const cartItemsArray = this.cartItemsArray();
    this.totalPrice = cartItemsArray.reduce((totalAcum, item) => {
      return totalAcum + (item.quantity * item.movie.price);
    }, 0);
  }

  getAllItems() {
    return this.cartItemsArray.asReadonly();
  }

  addItem(movie: Movie) {
    if (movie.availableInStock <= 0) return;

    // 1 - Este filme já está no carrinho, +1 na quantidade
    const cartItemsArray = this.cartItemsArray();
    const itemIndex = cartItemsArray.findIndex((item) => item.movie.id === movie.id);
    if (itemIndex != -1) {
      const quantity = cartItemsArray[itemIndex].quantity;
      cartItemsArray[itemIndex].quantity = quantity < movie.availableInStock? quantity + 1 : quantity;
    } else {
      // 2 - Este filme NÃO está no carrinho, eu adiciono ele ao array
      cartItemsArray.push({ movie, quantity: 1 });
    }

    this.cartItemsArray.set([...cartItemsArray]);

    // localStorage.setItem("cartArray", JSON.stringify(cartItemsArray));

    // this.updateTotalPrice();
  }

  removeItem(movie: Movie) {
    const cartItemsArray = this.cartItemsArray();
    const itemIndex = cartItemsArray.findIndex((item) => item.movie.id === movie.id);
    if (itemIndex != -1) {
      cartItemsArray[itemIndex].quantity--;
      if (cartItemsArray[itemIndex].quantity <= 0) {
        cartItemsArray.splice(itemIndex, 1);
      }
    }
    this.cartItemsArray.set([...cartItemsArray]);

    // localStorage.setItem("cartArray", JSON.stringify(this.cartItemsArray));

    // this.updateTotalPrice();
  }


}
