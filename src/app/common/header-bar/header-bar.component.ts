import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterOutlet} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {NotificationComponent} from '../../serviceItem/notification/notification/notification.component';

@Component({
  selector: 'app-header-bar',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {


  constructor(private dialog: MatDialog) {

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
