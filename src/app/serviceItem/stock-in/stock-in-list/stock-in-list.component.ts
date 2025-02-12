import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-stock-in-list',
  imports: [
    MatButton,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './stock-in-list.component.html',
  styleUrl: './stock-in-list.component.css'
})
export class StockInListComponent {

}
