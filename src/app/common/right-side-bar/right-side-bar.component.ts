import {Component, signal} from '@angular/core';
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

  isPinned = signal(true);
  isHovered = signal(false);

  navItems = [
    { link: '/home', label: 'Dashboard', icon: 'home' },
    { link: '/order', label: 'Purchase Order', icon: 'shopping_cart' },
    { link: '/stock', label: 'Stock In', icon: 'inventory' },
    { link: '/stock-out', label: 'Stock Out', icon: 'logout' },
    { link: '/history', label: 'Stock History', icon: 'history' },
    { link: '/setup', label: 'Master Setup', icon: 'settings' },
    { link: '/reports', label: 'Report Manager', icon: 'assessment' },
  ];

  toggleSidebar() {
    this.isPinned.update((val) => !val);
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

}
