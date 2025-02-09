import { Routes } from '@angular/router';
import {StockInComponent} from './serviceItem/stock-in/stock-in.component';
import {PurchaseOrderComponent} from './serviceItem/purchase-order/purchase-order.component';
import {HomeComponent} from './serviceItem/home/home.component';
import {AddItemComponent} from './serviceItem/item/add-item/add-item.component';
import {UserDetailsComponent} from './serviceItem/user/user-details/user-details.component';
import {ItemListComponent} from './serviceItem/item/item-list/item-list.component';


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
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'add-item', component: AddItemComponent
  },
  {
    path: 'user', component: UserDetailsComponent
  },
  {
    path: 'item-list', component: ItemListComponent
  }
];
