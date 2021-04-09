import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  private coinMarketAPI = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=30&sparkline=true';

  constructor(private httpClient: HttpClient) { }

  getCoinsMarketInfo(): Observable<any> {
    return this.httpClient.get(`${this.coinMarketAPI}`);

  }

}
