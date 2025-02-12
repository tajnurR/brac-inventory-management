import { Component } from '@angular/core';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {NgComponentOutlet, NgIf} from '@angular/common';
import {AddRoleComponent} from '../../roleUAM/add-role/add-role.component';
import {UomListComponent} from '../../uom/uom-list/uom-list.component';
import {RodComponent} from '../rod/rod.component';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  imports: [
    MatRadioGroup,
    MatRadioButton,
    FormsModule,
    NgComponentOutlet,
    NgIf
  ],
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent {
  pageToGo: string = '1';
  selectedComponent: any = AddRoleComponent;

  handleAction(selectedValue: string) {
    this.pageToGo = selectedValue;

    if (selectedValue === '2') {
      // receive with other documents
      this.selectedComponent = RodComponent;
    } else if (selectedValue === '3') {
      this.selectedComponent = UomListComponent;
    } else if (selectedValue === '1') {
      this.selectedComponent = AddRoleComponent;
    }
  }
}
