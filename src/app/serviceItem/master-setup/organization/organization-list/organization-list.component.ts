import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {TableWithFilterComponent} from '../../../../templete/table-with-filter/table-with-filter.component';

@Component({
  selector: 'app-organization-list',
  imports: [
    RouterOutlet,
    MatButton,
    TableWithFilterComponent,
    RouterLink
  ],
  templateUrl: './organization-list.component.html',
  styleUrl: './organization-list.component.css'
})
export class OrganizationListComponent {
  tableColumns = [
    { key: 'sl', label: 'SL' },
    { key: 'ogName', label: 'Organization Name' },
    { key: 'address', label: 'Address' },
    { key: 'phoneNo', label: 'Phone Number' },
    { key: 'contactNo', label: 'Contact Number' }
  ];

  tableData = Array.from({ length: 100 }, (_, i) => ({
    sl: (i + 1).toString(),
    ogName: `Organization ${i + 1}`,
    address: `Address for organization ${i + 1}`,
    phoneNo: `+1-555-123${(1000 + i) % 9999}`,
    contactNo: `+1-555-987${(1000 + i) % 9999}`,
  }));
}
