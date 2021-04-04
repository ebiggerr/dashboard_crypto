export class Coin {
   'name': string;
   'symbol': string;
   'image': string;
   'current_price': number;
   'total_volume': number;
  // 'last_updated': string;
   'sparkline_in_7d': any;
   'price': number[];
  // 'price': string;
  // 'isFavourited': boolean;

  constructor(name: string, symbol: string, image: string, currentPrice: number, totalVolume: number, sparkLineIn7d: any, array: number[]) {
    this.name = name;
    this.symbol = symbol;
    this.image = image;
    this.current_price = currentPrice;
    this.total_volume = totalVolume;
    this.sparkline_in_7d = sparkLineIn7d;
    this.price = array;
  }
}
