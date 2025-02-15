import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';

@Component({
  selector: 'app-po-receive',
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatRadioGroup, MatRadioButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './po-receive.component.html',
  styleUrl: './po-receive.component.css'
})
export class PoReceiveComponent {

}
