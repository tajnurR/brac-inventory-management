import { Routes } from '@angular/router';
import {StockInComponent} from './serviceItem/stock-in/stock-in.component';
import {PurchaseOrderComponent} from './serviceItem/purchase-order/purchase-order.component';
import {HomeComponent} from './serviceItem/home/home.component';
import {ItemAddComponent} from './serviceItem/item/item-add/item-add.component';
import {AddItemComponent} from './serviceItem/item/add-item-form/add-item.component';
import {UserDetailsComponent} from './serviceItem/user/user-details/user-details.component';
import {CategoryListComponent} from './serviceItem/category/category-list/category-list.component';
import {AddCategoryComponent} from './serviceItem/category/add-category/add-category/add-category.component';
import {OrganizationListComponent} from './serviceItem/organization/organization-list/organization-list.component';
import {AddOrganizationComponent} from './serviceItem/organization/add-organization/add-organization.component';
import {ItemGroupListComponent} from './serviceItem/item-group/item-group-list/item-group-list.component';
import {AddItemGroupComponent} from './serviceItem/item-group/add-item-group/add-item-group.component';
import {UomListComponent} from './serviceItem/uom/uom-list/uom-list.component';
import {AddUomComponent} from './serviceItem/uom/add-uom/add-uom.component';
import {RoleUAMListComponent} from './serviceItem/roleUAM/role-uam-list/role-uam-list.component';
import {AddRoleComponent} from './serviceItem/roleUAM/add-role/add-role.component';
import {StockHistoryListComponent} from './serviceItem/stock-history/stock-history-list/stock-history-list.component';
import {ActivityLogListComponent} from './serviceItem/activity-log/activity-log-list/activity-log-list.component';


export const routes: Routes = [
  {
    path: 'stock', component: StockInComponent,
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
    path:'stock-history-list', component: StockHistoryListComponent
  },
  {
    path:'activity-log', component: ActivityLogListComponent
  }
];
