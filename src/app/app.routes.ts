import { Routes } from '@angular/router';
import {StockInComponent} from './serviceItem/stock-in/stock-in.component';
import {PurchaseOrderComponent} from './serviceItem/purchase-order/purchase-order.component';
import {HomeComponent} from './serviceItem/home/home.component';
import {ItemAddComponent} from './serviceItem/item-add/item-add.component';


export const routes: Routes = [
  {
    path: 'stock', component: StockInComponent,
  },
  {
    path: 'order', component: PurchaseOrderComponent,
  },
  {
    path: 'item-add', component: ItemAddComponent,
  },
  {
    path: 'home', component: HomeComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
