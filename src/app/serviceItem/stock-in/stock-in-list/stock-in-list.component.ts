import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CustomizedTableComponent} from '../../../templete/customized-table/customized-table.component';
import {TableWithFilterComponent} from '../../../templete/table-with-filter/table-with-filter.component';

@Component({
  selector: 'app-stock-in-list',
  imports: [
    MatButton,
    RouterOutlet,
    RouterLink,
    CustomizedTableComponent
  ],
  templateUrl: './stock-in-list.component.html',
  styleUrl: './stock-in-list.component.css'
})
export class StockInListComponent {
  tableColumns = [
    { key: 'sl', label: 'SL' },
    { key: 'tarnId', label: 'Transaction ID' },
    { key: 'type', label: 'Type' },
    { key: 'challanNo', label: 'Challan No.' },
    { key: 'vendorName', label: 'Vendor Name' },
    { key: 'department', label: 'Department Name' },
    { key: 'rQTY', label: 'Received QTY' },
    { key: 'status', label: 'Status' },
    { key: 'totalAmount', label: 'Total Amount' },
    { key: 'created_on', label: 'Created On' }
  ];

  tableData = Array.from({ length: 100 }, (_, i) => ({
    sl: (i + 1).toString(), // SL (Serial Number)
    tarnId: `TRNI-${1000 + i}`, // Transaction ID
    type: ['PO Receive', 'Gift', 'Receive with Other Documents'][i % 4], // Type
    challanNo: `CH-${2000 + i}`, // Challan No.
    vendorName: `Vendor ${i + 1}`, // Vendor Name
    department: ['Finance', 'Procurement', 'Warehouse', 'Operations'][i % 4], // Department Name
    rQTY: Math.floor(Math.random() * 100) + 1, // Received QTY (Random value between 1 and 100)
    status: ['Approved', 'Rejected', 'Pending', 'QC Pending', 'Send Back'][i % 5], // Status
    totalAmount: (Math.random() * 1000).toFixed(2), // Total Amount (Random value between 0 and 1000)
    created_on: new Date(2023, i % 12, (i % 28) + 1).toISOString(), // Created On
  }));

}
