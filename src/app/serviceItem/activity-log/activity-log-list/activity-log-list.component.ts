import { Component } from '@angular/core';
import {TableWithFilterComponent} from '../../../templete/table-with-filter/table-with-filter.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-activity-log-list',
  imports: [
    TableWithFilterComponent,
    RouterOutlet
  ],
  templateUrl: './activity-log-list.component.html',
  styleUrl: './activity-log-list.component.css'
})
export class ActivityLogListComponent {
  tableColumns = [
    { key: 'updated_at', label: 'Updated At' },
    { key: 'empName', label: 'Employee Name' },
    { key: 'updatedInfo', label: 'Updated Info' },
  ];

  tableData = Array.from({ length: 100 }, (_, i) => ({
    updated_at: new Date(2023, i % 12, (i % 28) + 1).toISOString(),
    empName: `Employee ${i + 1}`,
    updatedInfo: `Updated TRIX ${i + 1}`,
  }));

}
