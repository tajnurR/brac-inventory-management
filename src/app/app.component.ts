import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderBarComponent} from './common/header-bar/header-bar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RightSideBarComponent} from './common/right-side-bar/right-side-bar.component';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatSidenavModule, HeaderBarComponent, RightSideBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'brac-inventory-management';

}
