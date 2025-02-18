import { Routes } from '@angular/router';
import {PurchaseOrderComponent} from './serviceItem/purchase-order/purchase-order.component';
import {HomeComponent} from './serviceItem/home/home.component';
import {ItemAddComponent} from './serviceItem/master-setup/item/item-add/item-add.component';
import {AddItemComponent} from './serviceItem/master-setup/item/add-item-form/add-item.component';
import {UserDetailsComponent} from './serviceItem/user/user-details/user-details.component';
import {CategoryListComponent} from './serviceItem/master-setup/category/category-list/category-list.component';
import {AddCategoryComponent} from './serviceItem/master-setup/category/add-category/add-category.component';
import {OrganizationListComponent} from './serviceItem/master-setup/organization/organization-list/organization-list.component';
import {AddOrganizationComponent} from './serviceItem/master-setup/organization/add-organization/add-organization.component';
import {ItemGroupListComponent} from './serviceItem/master-setup/item-group/item-group-list/item-group-list.component';
import {AddItemGroupComponent} from './serviceItem/master-setup/item-group/add-item-group/add-item-group.component';
import {UomListComponent} from './serviceItem/master-setup/uom/uom-list/uom-list.component';
import {AddUomComponent} from './serviceItem/master-setup/uom/add-uom/add-uom.component';
import {RoleUAMListComponent} from './serviceItem/roleUAM/role-uam-list/role-uam-list.component';
import {AddRoleComponent} from './serviceItem/roleUAM/add-role/add-role.component';
import {StockHistoryListComponent} from './serviceItem/stock-history/stock-history-list/stock-history-list.component';
import {ActivityLogListComponent} from './serviceItem/activity-log/activity-log-list/activity-log-list.component';
import {StockInListComponent} from './serviceItem/stock-in/stock-in-list/stock-in-list.component';
import {AddStockComponent} from './serviceItem/stock-in/add-stock/add-stock.component';
import {StockInPreviewComponent} from './serviceItem/stock-in/stock-in-preview/stock-in-preview.component';
import {StockOutListComponent} from './serviceItem/stock-out/stock-out-list/stock-out-list.component';


export const routes: Routes = [
  {
    path: 'stock-list', component: StockInListComponent,
  },
  {
    path: 'add-stock', component: AddStockComponent,
  },
  {
    path: 'order', component: PurchaseOrderComponent,
  },
  {
    path: 'setup/item-add', component: ItemAddComponent,
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'add-item-form', component: AddItemComponent
  },
  {
    path: 'item-add', component: ItemAddComponent
  },
  {
    path: 'user-details', component: UserDetailsComponent
  },
  {
    path: 'setup/category-list', component: CategoryListComponent
  },
  {
    path:'add-category', component: AddCategoryComponent
  },
  {
    path:'setup/organization-list', component: OrganizationListComponent
  },
  {
    path:'add-organization', component: AddOrganizationComponent
  },
  {
    path:'setup/item-group-list', component: ItemGroupListComponent
  },
  {
    path:'add-item-group', component: AddItemGroupComponent
  },
  {
    path:'setup/uom-list', component: UomListComponent
  },
  {
    path:'add-uom', component: AddUomComponent
  },
  {
    path:'uam/role-uam-list', component: RoleUAMListComponent
  },
  {
    path:'add-role', component: AddRoleComponent
  },
  {
    path:'history', component: StockHistoryListComponent
  },
  {
    path:'activity-log', component: ActivityLogListComponent
  },
  {
    path:'stock-details-preview', component: StockInPreviewComponent
  },
  {
    path:'stock-out-list', component: StockOutListComponent
  }
];
