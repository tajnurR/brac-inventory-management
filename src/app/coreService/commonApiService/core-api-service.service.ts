import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {NavModel} from '../../domains/nav-model';
import {ItemAddComponent} from '../../serviceItem/item/item-add/item-add.component';

@Injectable({
  providedIn: 'root'
})
export class CoreApiServiceService {

  // private apiUrl = 'https://your-api-endpoint.com/menus'; // Replace with actual API

  constructor() {}

  // getMenuItems(): Observable<any[]> {
  //   return this.http.get<NavModel[]>(this.apiUrl).pipe(
  //     map((menus: NavModel[]) => this.mapMenus(menus))
  //   );
  // }

  getMenuItems(): Observable<any[]> {
    const mockMenus: NavModel[] = [
      {
        id: 1,
        label: "Dashboard",
        path: "/dashboard",
        icon: "home",
        componentName: "HomeComponent",
        parentMenuId: null,
        status: true
      },
      {
        id: 2,
        label: "Purchase Order",
        path: "/order",
        icon: "shopping_cart",
        componentName: "PurchaseOrderComponent",
        parentMenuId: null,
        status: true
      },
      {
        id: 3,
        label: "Stock In",
        path: null,
        icon: "login",
        componentName: "inventory",
        parentMenuId: null,
        status: true
      },

      {
        id: 4,
        label: "Stock In List",
        path: "stock-list",
        icon: "list",
        componentName: "StockInListComponent",
        parentMenuId: 3,
        status: true
      },
      {
        id: 4,
        label: "Sub Item 2",
        path: "stock/sub-item-2",
        icon: "list",
        componentName: "",
        parentMenuId: 3,
        status: true
      },
      {
        id: 4,
        label: "Sub Item 3",
        path: "stock/sub-item-3",
        icon: "list",
        componentName: "",
        parentMenuId: 3,
        status: true
      },
      {
        id: 5,
        label: "Stock Out",
        icon: "logout",
        path: "/stock-out-list",
        componentName: "StockOutListComponent",
        parentMenuId: null,
        status: true
      },
      {
        id: 6,
        label: "Stock History",
        icon: "history",
        path: "/history",
        componentName: "StockHistoryListComponent",
        parentMenuId: null,
        status: true
      },
      {
        id: 7,
        label: "Master Setup",
        icon: "settings",
        path: null,
        componentName: "",
        parentMenuId: null,
        status: true
      },
      {
        id: 8,
        label: "Item",
        icon: "category",
        path: "/item-add",
        componentName: "ItemAddComponent",
        parentMenuId: 7,
        status: true

      },
      {
        id: 9,
        label: "Item Group",
        icon: "list",
        path: "setup/item-group-list",
        componentName: "ItemGroupListComponent",
        parentMenuId: 7,
        status: true
      },
      {
        id: 10,
        label: "UoM",
        icon: "ac_unit",
        path: "setup/uom-list",
        componentName: "UomListComponent",
        parentMenuId: 7,
        status: true
      },
      {
        id: 11,
        label: "Category",
        icon: "inbox",
        path: "setup/category-list",
        componentName: "CategoryListComponent",
        parentMenuId: 7,
        status: true
      },
      {
        id: 12,
        label: "Organization",
        icon: "corporate_fare",
        path: "setup/organization-list",
        componentName: "OrganizationListComponent",
        parentMenuId: 7,
        status: true
      },
      {
        id: 14,
        label: "UAM",
        icon: "group_add",
        path: null,
        componentName: "",
        parentMenuId: null,
        status: true
      },
      {
        id: 15,
        label: "Report Manager",
        icon: "assessment",
        path: null,
        componentName: "",
        parentMenuId: null,
        status: true
      },
      {
        id: 16,
        label: "Activity Log",
        icon: "local_activity",
        path: "activity-log",
        componentName: "ActivityLogListComponent",
        parentMenuId: null,
        status: true
      },
      {
        id: 17,
        label: "Role Management",
        icon: "manage_accounts",
        path: "uam/role-uam-list",
        componentName: "RoleUAMListComponent",
        parentMenuId: 14,
        status: true
      },
      {
        id: 18,
        label: "User Details",
        icon: "person",
        path: "user-details",
        componentName: "UserDetailsComponent",
        parentMenuId: 14,
        status: true
      },
    ];

    return new Observable(observer => {
      observer.next(this.mapMenus(mockMenus));
      observer.complete();
    });
  }

  private mapMenus(menus: NavModel[]): any[] {
    const menuMap = new Map<number, any>();
    const result: any[] = [];

    menus.forEach(menu => {
      const mappedItem = {
        id: menu.id,
        link: menu.path,
        label: menu.label,
        icon: menu.icon,
        subItems: []
      };

      menuMap.set(menu.id, mappedItem);
      if (menu.parentMenuId === null) {
        result.push(mappedItem);
      } else {
        const parent = menuMap.get(menu.parentMenuId);
        if (parent) {
          parent.subItems.push(mappedItem);
        }
      }
    });

    return result;
  }
}
