import { Component, OnInit, signal, Signal } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';
import { MatListModule } from '@angular/material/list';
import { MatIcon, } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { Movie } from '../../models/movie';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [ MatListModule, MatIcon, MatIconButton, CurrencyPipe ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartArray: Signal<Array<CartItem>> = signal<Array<CartItem>>([]);

  constructor(private cartService: CartService) {
    
  }

  ngOnInit(): void {
    this.cartArray = this.cartService.getAllItems();
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  addItemToCart(movie: Movie) {
    this.cartService.addItem(movie);
  }

  removeItemFromCart(movie: Movie) {
    this.cartService.removeItem(movie);
  }
}
