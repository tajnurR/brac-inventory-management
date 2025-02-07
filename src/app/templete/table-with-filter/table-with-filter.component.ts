import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ItemData} from '../../domains/item-data';
import {NgClass} from '@angular/common';

/** Constants used to fill up our data base. */
const ITEM_DATA: ItemData[] = Array.from({ length: 100 }, (_, i) => ({
  sl: (i + 1).toString(),
  item: `Item ${i + 1}`,
  sku: `SKU-${1000 + i}`,
  uom: ['pcs', 'kg', 'litre', 'box'][i % 4],
  category: ['Electronics', 'Groceries', 'Clothing', 'Furniture'][i % 4],
  specification: `Specification details for item ${i + 1}`,
  created_on: new Date(2023, i % 12, (i % 28) + 1).toISOString(),
}));

@Component({
  selector: 'app-table-with-filter',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './table-with-filter.component.html',
  styleUrl: './table-with-filter.component.css'
})
export class TableWithFilterComponent {
  displayedColumns: string[] = ['sl', 'item', 'sku', 'uom','category','specification','created_on'];
  dataSource: MatTableDataSource<ItemData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const users = ITEM_DATA
      // console.table(users);
    this.dataSource = new MatTableDataSource(users);
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
}

/** Builds and returns a new User. */
// function createNewUser(id: number): ItemData {
//
//
//   return {
//     sl: id.toString(),
//     item: name,
//     uom: name,
//     sku: name,
//     category: name,
//     specification: name,
//     created_on: name
//     // created_on: Math.round(Math.random() * 100).toString(),
//     // fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }
