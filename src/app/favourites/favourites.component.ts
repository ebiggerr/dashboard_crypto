import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Coin } from '../coin';
import {FavouritesService} from '../favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favCoins = Array<Coin>();

  constructor(private favouritesService: FavouritesService, private router: Router) { }

  ngOnInit(): void {
    this.getList();
  }

  // tslint:disable-next-line:typedef
  getList() {
    this.favCoins = this.favouritesService.getFav();

  }

  coinDetails(name: string): void {
    this.router.navigate(['details', name]);
  }

  unFav(coin: Coin): void{
    this.favouritesService.unFav(coin);
    // this.ngOnInit();

  }



}
