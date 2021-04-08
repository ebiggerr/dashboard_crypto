import { CoinDetailsComponent } from '../coin-details/coin-details.component';
import { FavouritesComponent} from '../favourites/favourites.component';
import { Observable } from 'rxjs';
import { CoinService } from '../coin.service';
import { Coin } from '../coin';
import {Component, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  coins = new Array<Coin>();

  @Output()
  favCoins = new Array<Coin>();

  // @ts-ignore
  private favCom: FavouritesComponent;

  // @ts-ignore
  coin: Coin;

  constructor( private coinService: CoinService, private router: Router /*, private favouritesComponent: FavouritesComponent*/) {

    coinService.getCoinsMarketInfo().subscribe(response =>
    {

      // @ts-ignore
      this.coins = response.map(coin =>
      {
        return new Coin(
          coin.name,
          coin.symbol,
          coin.image,
          coin.current_price,
          coin.total_volume,
          coin.sparkline_in_7d,
          coin.price
        );
      });
    });

  }

  /*coins: Observable<Coin[]>;


  constructor(private coinService: CoinService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.coins = this.coinService.getCoinsMarketInfo();

  }
*/
  coinDetails(name: string): void {
    this.router.navigate(['details', name]);
  }

  favouringCoin(coin: Coin): void {
    this.favCom.addIntoList(coin);
    this.favCoins.push(coin);



  }
}
