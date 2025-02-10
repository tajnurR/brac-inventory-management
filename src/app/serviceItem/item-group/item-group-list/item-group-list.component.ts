import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {TableWithFilterComponent} from '../../../templete/table-with-filter/table-with-filter.component';

@Component({
  selector: 'app-item-group-list',
  imports: [
    RouterOutlet,
    MatButton,
    TableWithFilterComponent,
    RouterLink
  ],
  templateUrl: './item-group-list.component.html',
  styleUrl: './item-group-list.component.css'
})
export class ItemGroupListComponent {
  tableColumns = [
    { key: 'sl', label: 'SL' },
    { key: 'itemGroupId', label: 'Item Group ID' },
    { key: 'itemGroupName', label: 'Item Group Name' },
    { key: 'created_on', label: 'Created On' }
  ];

  tableData = Array.from({ length: 100 }, (_, i) => ({
    sl: (i + 1).toString(),
    itemGroupId: `ID-${1000 + i}`,  // Item Group ID in the format ID-1000, ID-1001, etc.
    itemGroupName: ['Electronics', 'Groceries', 'Clothing', 'Furniture'][i % 4], // Item Group Name
    created_on: new Date(2023, i % 12, (i % 28) + 1).toISOString(),
  }));

}
