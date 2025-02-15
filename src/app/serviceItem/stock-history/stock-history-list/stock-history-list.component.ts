import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TableWithFilterComponent} from '../../../templete/table-with-filter/table-with-filter.component';

@Component({
  selector: 'app-stock-history-list',
  imports: [
    RouterOutlet,
    TableWithFilterComponent
  ],
  templateUrl: './stock-history-list.component.html',
  styleUrl: './stock-history-list.component.css'
})
export class StockHistoryListComponent {
  tableColumns = [
    { key: 'updated_at', label: 'Updated at' },
    { key: 'empName', label: 'Employee Name' },
    { key: 'updatedInfo', label: 'Updated Information' },
  ];

  tableData = Array.from({ length: 100 }, (_, i) => ({
    updated_at: new Date(2023, i % 12, (i % 28) + 1).toISOString(),
    empName: `Employee ${i + 1}`,
    updatedInfo: `Updated TRIX ${i + 1}`,
  }));
}
