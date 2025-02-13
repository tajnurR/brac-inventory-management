import { Component } from '@angular/core';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {NgComponentOutlet, NgForOf, NgIf} from '@angular/common';
import {AddRoleComponent} from '../../roleUAM/add-role/add-role.component';
import {UomListComponent} from '../../uom/uom-list/uom-list.component';
import {RodComponent} from './rod/rod.component';
import {GiftComponent} from './gift/gift.component';
import {PoReceiveComponent} from './po-receive/po-receive.component';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  imports: [
    MatRadioGroup,
    MatRadioButton,
    FormsModule,
    NgComponentOutlet,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent {
  pageToGo: string = '1';
  selectedComponent: any = PoReceiveComponent;

  handleAction(selectedValue: string) {
    this.pageToGo = selectedValue;

    if (selectedValue === '2') {
      // receive with other documents
      this.selectedComponent = RodComponent;
    } else if (selectedValue === '3') {
      this.selectedComponent = GiftComponent;
    } else if (selectedValue === '1') {
      this.selectedComponent = PoReceiveComponent;
    }
  }

  files: File[] = []; // Array to store all selected files

  // Method to handle file selection
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      // Append new files to the existing `files` array
      this.files = [...this.files, ...Array.from(input.files)];
      console.log('All Files:', this.files); // Debugging
    }
  }
}
