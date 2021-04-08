import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CoinService } from '../coin.service';
import { Coin } from '../coin';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  @Input()
  favCoins = new Array<Coin>();

  constructor(private coinService: CoinService, private router: Router) { }

  ngOnInit(): void {
    this.getList();
  }

  // tslint:disable-next-line:typedef
  getList() {
    return this.favCoins;
  }

  coinDetails(name: string): void {
    this.router.navigate(['details', name]);
  }

  // tslint:disable-next-line:typedef
  unfavouringCoin(coin: Coin) {
    // if(this.favCoins.)
  }

  // tslint:disable-next-line:typedef
  addIntoList(coin: Coin) {
    this.favCoins.push(coin);
  }

}
