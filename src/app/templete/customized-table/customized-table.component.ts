import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ItemData} from '../../domains/item-data';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customized-table',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, CommonModule, FormsModule],
  templateUrl: './customized-table.component.html',
  styleUrl: './customized-table.component.css'
})
export class CustomizedTableComponent {
  selectedOption: string = '';
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  @Input() columns: { key: string, label: string }[] = [];
  @Input() data: any[] = [];
  @Input() routeComponent: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  constructor(private router: Router) {}

  ngOnInit() {
    this.displayedColumns = this.columns.map(col => col.key);
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onRowClick(row: any) {
    console.log(row.sl);
    this.router.navigate([this.routeComponent], { queryParams: { id: row.item } });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Approved': return 'approved';
      case 'Approval Pending': return 'pending';
      case 'QC Pending': return 'qc-pending';
      case 'Reject': return 'rejected';
      case 'Send Back': return 'send-back';
      default: return '';
    }
  }
}
