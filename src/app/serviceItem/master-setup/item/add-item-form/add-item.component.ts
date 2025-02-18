import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButton} from '@angular/material/button';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-add-item-form',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioGroup, MatRadioButton, RouterOutlet, RouterLink],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {

}
