import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TableWithFilterComponent} from '../../../templete/table-with-filter/table-with-filter.component';

@Component({
  selector: 'app-item-add',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterLink, RouterOutlet, TableWithFilterComponent],
  templateUrl: './item-add.component.html',
  styleUrl: './item-add.component.css'
})
export class ItemAddComponent {
  tableColumns = [
    { key: 'sl', label: 'SL' },
    { key: 'item', label: 'Item' },
    { key: 'sku', label: 'SKU' },
    { key: 'uom', label: 'UoM' },
    { key: 'category', label: 'Category' },
    { key: 'specification', label: 'Specification' },
    { key: 'created_on', label: 'Created On' }
  ];

  tableData = Array.from({ length: 100 }, (_, i) => ({
    sl: (i + 1).toString(),
    item: `Item ${i + 1}`,
    sku: `SKU-${1000 + i}`,
    uom: ['pcs', 'kg', 'litre', 'box'][i % 4],
    category: ['Electronics', 'Groceries', 'Clothing', 'Furniture'][i % 4],
    specification: `Specification details for item ${i + 1}`,
    created_on: new Date(2023, i % 12, (i % 28) + 1).toISOString(),
  }));
}
