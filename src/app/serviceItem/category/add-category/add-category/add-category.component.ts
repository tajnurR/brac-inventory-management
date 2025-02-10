import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';

@Component({
  selector: 'app-add-category',
  imports: [
    RouterOutlet,
    MatRadioGroup,
    MatRadioButton,
    RouterLink
  ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

}
