import {Component, ElementRef, OnInit, signal, ViewChild} from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {CoreApiServiceService} from '../../coreService/commonApiService/core-api-service.service';


@Component({
  selector: 'app-right-side-bar',
  standalone: true,
  imports: [RouterModule, RouterLink,CommonModule],
  templateUrl: './right-side-bar.component.html',
  styleUrl: './right-side-bar.component.css'
})
export class RightSideBarComponent implements OnInit {
  navActive: string = 'bg-gray-600';
  isExpanded = true; // Default state
  isPinned = signal(true);
  isHovered = signal(false);

  expandedIndex: number | null = null;
  navItems: any[] = [];


  constructor(private menuService: CoreApiServiceService) {}

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe(items => {
      this.navItems = items;
    });
    console.table(this.navItems);

  }

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

  toggleSubMenu(id: any) { debugger
    this.expandedIndex = this.expandedIndex === id ? null : id;

  }
}
