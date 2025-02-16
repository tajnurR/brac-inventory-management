import { Component } from '@angular/core';
import {CustomizedTableComponent} from '../../../templete/customized-table/customized-table.component';
import {MatButton} from '@angular/material/button';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-stock-out-list',
  imports: [
    CustomizedTableComponent,
    MatButton,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './stock-out-list.component.html',
  styleUrl: './stock-out-list.component.css'
})
export class StockOutListComponent {
  tableColumns = [
    { key: 'sl', label: 'SL' },
    { key: 'tarnId', label: 'Transaction ID' },
    { key: 'initiated_by', label: 'Initiated By' },
    { key: 'created_on', label: 'Created On' },
    { key: 'type', label: 'Type' },
    { key: 'status', label: 'Status' },
    { key: 'totalAmount', label: 'Total Amount' },
  ];

  tableData = Array.from({ length: 100 }, (_, i) => ({
    sl: (i + 1).toString(), // SL (Serial Number)
    tarnId: `TRNI-${1000 + i}`, // Transaction ID
    initiated_by: `User ${i + 1}`, // Initiated By
    created_on: new Date(2023, i % 12, (i % 28) + 1).toISOString(), // Created On
    type: ['PO Receive', 'Gift', 'Receive with Other Documents'][i % 3], // Type
    status: ['Approved', 'Rejected', 'Approval Pending', 'Draft', 'Send Back'][i % 5], // Status
    totalAmount: (Math.random() * 1000).toFixed(2), // Total Amount (Random value between 0 and 1000)
  }));

}
