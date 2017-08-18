import {  Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurantHomeComponent } from './restaurant-home/restaurant-home.component'; 
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component'; 


const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'test', component: RestaurantHomeComponent },
  { path: 'restaurant_add', component: RestaurantAddComponent },
]

export default appRoutes;