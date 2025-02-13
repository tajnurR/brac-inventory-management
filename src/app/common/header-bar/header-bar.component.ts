import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterOutlet} from '@angular/router';
import keycloak from '../../auth/keycloak-init';

@Component({
  selector: 'app-header-bar',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {
  logout() {
    localStorage.removeItem('access_token'); // Example logout logic
    localStorage.removeItem('refresh_token'); // Example logout logic
    keycloak.logout();

  }

}
