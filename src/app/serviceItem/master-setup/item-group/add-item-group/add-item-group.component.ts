import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-add-item-group',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './add-item-group.component.html',
  styleUrl: './add-item-group.component.css'
})
export class AddItemGroupComponent {

}
