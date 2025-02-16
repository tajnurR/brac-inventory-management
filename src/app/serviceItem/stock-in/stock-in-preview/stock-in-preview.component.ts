import { Component } from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-stock-in-preview',
  imports: [
    NgIf,
    RouterOutlet
  ],
  templateUrl: './stock-in-preview.component.html',
  styleUrl: './stock-in-preview.component.css'
})
export class StockInPreviewComponent {
  id: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        console.log('Received ID:', this.id);
      }
    });
  }
}
