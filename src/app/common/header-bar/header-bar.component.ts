import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Router, RouterOutlet} from '@angular/router';
import keycloak from '../../auth/keycloak-init';
import { CommonModule } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {NotificationComponent} from '../../serviceItem/notification/notification/notification.component';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule,CommonModule],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {
  isDropdownOpen = false;
  constructor(private router: Router, private dialog: MatDialog) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  logout() {
    localStorage.removeItem('access_token'); // Example logout logic
    localStorage.removeItem('refresh_token'); // Example logout logic
    keycloak.logout();

  }

  openPopUp(){
    this.dialog.open(NotificationComponent, {
      width: '30%',
      height: '90%',
      enterAnimationDuration:'800ms',
      exitAnimationDuration: '800ms',
      position: {
        top: '40px',
        right: '20px'
      }
    }).afterClosed().subscribe(o=>{
    });
  }

}
