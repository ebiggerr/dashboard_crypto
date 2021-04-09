import { CoinService } from '../coin.service';
import { Coin } from '../coin';
import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {FavouritesService} from '../favourites.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  coins = new Array<Coin>();

  constructor( private coinService: CoinService, private router: Router , private favService: FavouritesService) {

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

  coinDetails(name: string): void {
    this.router.navigate(['details', name]);
  }

  favouringCoin(coin: Coin): void {

    this.favService.addToFavourites(coin);
    console.log(coin);

  }

}
