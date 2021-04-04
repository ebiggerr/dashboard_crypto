import { CoinDetailsComponent } from '../coin-details/coin-details.component';
import { Observable } from 'rxjs';
import { CoinService } from '../coin.service';
import { Coin } from '../coin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  coins = new Array<Coin>();

  array = new Array<number>();

  constructor( private coinService: CoinService, private router: Router ) {

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

  favouringCoin(name: string): void {

  }
}
