import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TableWithFilterComponent} from '../../templete/table-with-filter/table-with-filter.component';

@Component({
  selector: 'app-item-add',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterLink, RouterOutlet, TableWithFilterComponent],
  templateUrl: './item-add.component.html',
  styleUrl: './item-add.component.css'
})
export class ItemAddComponent {

}
