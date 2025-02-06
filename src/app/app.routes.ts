import { Routes } from '@angular/router';
import {StockInComponent} from './serviceItem/stock-in/stock-in.component';
import {PurchaseOrderComponent} from './serviceItem/purchase-order/purchase-order.component';
import {HomeComponent} from './serviceItem/home/home.component';
import {AddItemComponent} from './serviceItem/item/add-item/add-item.component';


export const routes: Routes = [
  {
    path: 'stock', component: StockInComponent,
  },
  {
    path: 'order', component: PurchaseOrderComponent,
  },
  {
    path: 'home', component: HomeComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'stockOut', component: AddItemComponent
  },
];
