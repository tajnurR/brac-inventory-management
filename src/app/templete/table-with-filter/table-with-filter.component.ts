import {AfterViewInit, Component, ElementRef, input, Input, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {MatIcon} from '@angular/material/icon';


@Component({
  selector: 'app-table-with-filter',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, CommonModule, MatIcon],
  templateUrl: './table-with-filter.component.html',
  styleUrl: './table-with-filter.component.css'
})
export class TableWithFilterComponent {
  @Input() columns: { key: string, label: string }[] = [];
  @Input() data: any[] = [];
  @Input() searchBox: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  constructor() {}

  ngOnInit() {
    this.displayedColumns = this.columns.map(col => col.key);
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    this.searchBox = true
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Approved': return 'approved';
      case 'Approval Pending': return 'pending';
      case 'QC Pending': return 'qc-pending';
      case 'Reject': return 'rejected';
      case 'Send Back': return 'send-back';
      case 'Draft': return 'draft';
      case 'Active': return 'active';
      case 'Inactive': return 'inactive';
      default: return '';
    }
  }
}

