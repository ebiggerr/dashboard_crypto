import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'details/:name', component: CoinDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
