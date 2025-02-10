import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {DatePipe} from '@angular/common';

export interface ApprovalHistory {
  type: string;
  status: string;
  actionTakenBy: string;
  date: Date
}

const ELEMENT_DATA: ApprovalHistory[] = [
  { type: 'Initiator', status: 'Completed', actionTakenBy: 'John Doe', date: new Date('2024-02-01') },
  { type: 'Approver', status: 'Pending', actionTakenBy: 'Jane Smith', date: new Date('2024-02-05') },
  { type: 'Initiator', status: 'In Progress', actionTakenBy: 'Michael Brown', date: new Date('2024-02-10') }
];

 export  interface WorkOrderDeliveryScheduleDetails{
   lotNo: string;
   item: string;
   qty: string;
   deliveryDate: Date;
   deliveryLocation: string;
   receivedQty: string;
 }

const workOrderDeliveryScheduleDetails: WorkOrderDeliveryScheduleDetails[] = [
  {
    lotNo: 'LOT12345',
    item: 'Laptop',
    qty: '50',
    deliveryDate: new Date('2024-02-15'),
    deliveryLocation: 'Warehouse A',
    receivedQty: '40'
  }

];


@Component({
  selector: 'app-purchase-order',
  imports: [
    RouterOutlet,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    DatePipe
  ],
  templateUrl: './purchase-order.component.html',
  styleUrl: './purchase-order.component.css'
})
export class PurchaseOrderComponent {
  displayedColumns: string[] = ['type', 'status', 'actionTakenBy', 'date'];
  approvalHistory: ApprovalHistory[] = ELEMENT_DATA;

  workOrderDisplayedColumns: string[] = ['serialNo','lotNo', 'item', 'qty', 'deliveryDate', 'deliveryLocation', 'receivedQty'];
  workOrderScheduleDetails: WorkOrderDeliveryScheduleDetails[] = workOrderDeliveryScheduleDetails;
}
