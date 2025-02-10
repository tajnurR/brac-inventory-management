import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-right-side-bar',
  standalone: true,
  imports: [RouterModule, RouterLink,CommonModule],
  templateUrl: './right-side-bar.component.html',
  styleUrl: './right-side-bar.component.css'
})
export class RightSideBarComponent {
  navActive: string = 'bg-gray-600';
  isExpanded = true; // Default state

  isPinned = signal(true);
  isHovered = signal(false);

  isStockInExpanded = false;

  // Track the currently expanded menu item
  expandedItem: string | null = null;

  navItems = [
    { link: '/home', label: 'Dashboard', icon: 'home' },
    { link: '/order', label: 'Purchase Order', icon: 'shopping_cart' },
    {
      link: '/stock',
      label: 'Stock In',
      icon: 'login',
      subItems: [
        { link: '/stock/sub-item-1', label: 'Sub Item 1', icon: 'list' },
        { link: '/stock/sub-item-2', label: 'Sub Item 2', icon: 'list' },
        { link: '/stock/sub-item-3', label: 'Sub Item 3', icon: 'list' },
      ],
    },
    { link: '/stock-out', label: 'Stock Out', icon: 'logout' },
    { link: '/history', label: 'Stock History', icon: 'history' },
    { link: '/setup', label: 'Master Setup', icon: 'settings',
      subItems: [
        { link: 'setup/category-list', label: 'Category', icon: 'inbox' },
        { link: '/item-add', label: 'Item', icon: 'category' },
        { link: 'setup/item-group-list', label: 'Item Group', icon: 'list' },
        { link: 'setup/uom-list', label: 'UoM', icon: 'ac_unit' },
        { link: 'setup/organization-list', label: 'Organization', icon: 'corporate_fare' },
      ],},
    { link: '/uam', label: 'UAM', icon: 'group_add',
      subItems: [
        { link: 'user-details', label: 'User Details', icon: 'person_raised_hand' },
        // { link: '/item-add', label: 'Item', icon: 'category' },
        // { link: 'setup/item-group-list', label: 'Item Group', icon: 'list' },
        // { link: 'setup/uom-list', label: 'UoM', icon: 'ac_unit' },
        // { link: 'setup/organization-list', label: 'Organization', icon: 'corporate_fare' },
      ],},
    { link: '/reports', label: 'Report Manager', icon: 'assessment' },
  ];

  toggleSidebar() {
    this.isPinned.update((val) => !val);
    this.isExpanded = !this.isExpanded;
  }

  onMouseEnter() {
    if (!this.isPinned()) {
      this.isHovered.set(true);
    }
  }

  onMouseLeave() {
    if (!this.isPinned()) {
      this.isHovered.set(false);
    }
  }

  // Toggle the expanded state of a menu item
  toggleSubMenu(link: string) {
    if (this.expandedItem === link) {
      this.expandedItem = null; // Collapse if already expanded
    } else {
      this.expandedItem = link; // Expand the clicked item
    }
  }

  // Check if a menu item is expanded
  isItemExpanded(link: string): boolean {
    return this.expandedItem === link;
  }
}
