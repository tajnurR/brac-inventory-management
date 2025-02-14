import { Component } from '@angular/core';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {NgComponentOutlet, NgForOf, NgIf} from '@angular/common';
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

  files: File[] = [];
  pageToGo: string = '1';
  selectedComponent: any = PoReceiveComponent; // Set default component

  ngOnInit() {
    this.handleAction(this.pageToGo); // Ensure '1' is selected on load
  }

  handleAction(selectedValue: string) {
    this.pageToGo = selectedValue;
    this.files = []; // Clear files when switching components

    const componentMap = {
      '1': PoReceiveComponent,
      '2': RodComponent,
      '3': GiftComponent
    };

    this.selectedComponent = componentMap[selectedValue] || PoReceiveComponent;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.files = [...this.files, ...Array.from(input.files)];
      console.log('All Files:', this.files); // Debugging
    }
  }

  removeFile(index: number) {
    this.files.splice(index, 1); // Remove the file at the specified index
  }

}
