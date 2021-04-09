import { Injectable } from '@angular/core';
import {Coin} from './coin';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private favCoins = Array<Coin>();

  coin: Coin | undefined;

  constructor() { }

  addToFavourites(coin: Coin): void {

    if ( !this.favCoins.includes(coin) ){
      this.favCoins.push(coin);
    }

    /*if ( !this.favCoins.some(coins => coins.name === coin.name) ){
      this.favCoins.push(coin);
    }*/

  }

  getFav(): Array<Coin>{

    return this.favCoins;
  }

  unFav(coin: Coin): void {

    for ( let index = 0; index < this.favCoins.length; index++ ){

      if ( this.favCoins[index].name === coin.name ){
        this.favCoins.splice(index, 1);

      }

    }

  }
}
