import { Injectable } from '@angular/core';
import {Coin} from './coin';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private favCoins = Array<Coin>();

  constructor() { }

  addToFavourites(coin: Coin): void {
    this.favCoins.push(coin);

  }

  getFav(): Array<Coin>{

    return this.favCoins;
  }

  unFav(coin: Coin): void {

  }
}
