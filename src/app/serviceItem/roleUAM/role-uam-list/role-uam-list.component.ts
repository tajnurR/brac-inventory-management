import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-role-uam-list',
  imports: [
    MatButton,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './role-uam-list.component.html',
  styleUrl: './role-uam-list.component.css'
})
export class RoleUAMListComponent {

}
