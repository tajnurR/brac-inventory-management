import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderBarComponent} from './common/header-bar/header-bar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RightSideBarComponent} from './common/right-side-bar/right-side-bar.component';
import {NgClass} from '@angular/common';
import keycloak from './auth/keycloak-init';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatSidenavModule, HeaderBarComponent, RightSideBarComponent, RouterOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'brac-inventory-management';

  ngOnInit(): void {
    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      if (authenticated) {
        console.log('User is authenticated');
        console.log('Access Token:', keycloak.token);
        console.log('Refresh Token:', keycloak.refreshToken);

        // Store tokens in localStorage or sessionStorage
        if (keycloak.token) {
          localStorage.setItem('access_token', keycloak.token);
        }
        if (keycloak.refreshToken) {
          localStorage.setItem('refresh_token', keycloak.refreshToken);
        }
      } else {
        console.error('User is not authenticated');
      }
    }).catch((error) => {
      console.error('Failed to initialize Keycloak', error);
    });
  }

}
