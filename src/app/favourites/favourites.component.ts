import { Component, OnInit } from '@angular/core';
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


  constructor(private coinService: CoinService, private router: Router) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.coinService.getFavourites();
  }

  coinDetails(name: string): void {
    this.router.navigate(['details', name]);
  }

  unfavouringCoin(name: string) {

  }
}
