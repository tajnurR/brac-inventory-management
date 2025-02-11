import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {NavModel} from '../../domains/nav-model';

@Injectable({
  providedIn: 'root'
})
export class CoreApiServiceService {

  private apiUrl = 'https://your-api-endpoint.com/menus'; // Replace with actual API

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
        path: "/stock",
        icon: "inventory",
        componentName: "inventory",
        parentMenuId: null,
        status: true
      },
      {
        id: 4,
        label: "Sub Item 1",
        path: "stock/sub-item-1",
        icon: "list",
        componentName: "",
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
        label: "Item Add",
        icon: "inventory",
        path: "/item-add",
        componentName: "ItemAddComponent",
        parentMenuId: null,
        status: true
      },
      {
        id: 6,
        label: "Stock Out",
        icon: "logout",
        path: "/stock-out",
        componentName: "",
        parentMenuId: null,
        status: true
      },
      {
        id: 7,
        label: "Stock History",
        icon: "history",
        path: "/history",
        componentName: "",
        parentMenuId: null,
        status: true
      },
      {
        id: 8,
        label: "Report Manager",
        icon: "assessment",
        path: "/reports",
        componentName: "",
        parentMenuId: null,
        status: true
      }
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
