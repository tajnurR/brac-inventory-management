import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CustomizedTableComponent} from '../../../../templete/customized-table/customized-table.component';
import {TableWithFilterComponent} from '../../../../templete/table-with-filter/table-with-filter.component';

@Component({
  selector: 'app-role-uam-list',
  imports: [
    MatButton,
    RouterOutlet,
    RouterLink,
    TableWithFilterComponent
  ],
  templateUrl: './role-uam-list.component.html',
  styleUrl: './role-uam-list.component.css'
})
export class RoleUAMListComponent {
  tableColumns = [
    { key: 'sl', label: 'SL' },
    { key: 'role', label: 'Role' },
    { key: 'roleId', label: 'Role ID' },
    { key: 'permission', label: 'Permission' },
    { key: 'status', label: 'Status' }
  ];

  tableData = Array.from({ length: 100 }, (_, i) => ({
    sl: (i + 1).toString(), // SL (Serial Number)
    role: ['Admin', 'Manager', 'User', 'Auditor'][i % 4], // Role Name
    roleId: `RID-${1000 + i}`, // Role ID
    permission: ['Read', 'Write', 'Execute', 'Admin'][i % 4], // Permission
    status: ['Active', 'Inactive'][i % 2] // Status
  }));

}
